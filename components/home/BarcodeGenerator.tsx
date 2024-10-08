'use client';

import { useState } from 'react';
import { Pencil1Icon, DownloadIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { BarcodeSelector } from './BarcodeSelector';
import BwipJs from '@bwip-js/browser';
import { symdesc } from '@/lib/consts';
import { getDefaultSpecificOptions } from '@/lib/utils';
import { GenParams } from '@/types/barcode';

const BarcodeGenerator = () => {
  const [barcodeType, setBarcodeType] = useState<string | undefined>(undefined);
  const [barcodeData, setBarcodeData] = useState<string>('');
  const [altText, setAltText] = useState<string>('');

  const selecChangeHandler = (value: string) => {
    setBarcodeType(value);
    const defaultText = symdesc[value]?.text;
    setBarcodeData(defaultText);
    setAltText('');

    generateBarcode({
      bcid: value,
      text: defaultText,
      altText: '',
    })
  }

  const genBtnHandler = () => {
    generateBarcode({
      bcid: barcodeType,
      text: barcodeData,
      altText,
    })
  }

  const generateBarcode = async (immediateParam: GenParams) => {
    const { bcid, text, altText } = immediateParam || {};
    if (!bcid || !text) return;

    try {
      const optsStr = symdesc[bcid]?.opts;
      const specificOptions = getDefaultSpecificOptions(optsStr);

      BwipJs.toCanvas('canvas', {
        ...specificOptions,
        bcid: bcid,
        text: text,
        alttext: altText,
        scale: 4,
      });
    } catch (error) {
      console.error('生成条形码时出错:', error);
    }
  };

  const downloandBarcode = () => {
    
  }

  return (
    <section id="generator" className="pt-3 pb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Generate Free Barcode</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <BarcodeSelector onSelect={selecChangeHandler} />
          <Card className="flex flex-col h-full rounded">
            {/* <CardHeader>
              <CardTitle>Barcode type</CardTitle>
            </CardHeader> */}
            <CardContent className="flex-grow">
              <div className="mt-4 font-bold">Barcode data</div>
              <Textarea
                placeholder="input barcode data"
                rows={3}
                value={barcodeData || ''}
                onChange={(e) => setBarcodeData(e.target.value)}
              />
              {/** whether alt text is needed? */}
              <div className="mt-4 font-bold">Alt text</div>
              <Input
                type="text"
                placeholder="input alt text"
                value={altText || ''}
                onChange={(e) => setAltText(e.target.value)}
              />
            </CardContent>
            <CardFooter className="mt-auto flex justify-center">
              <Button variant="outline" onClick={genBtnHandler}><Pencil1Icon className="mr-2" />Generate Barcode</Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full rounded">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex justify-center items-center">
              <div className="mt-4 w-2/3 ">
                <canvas id="canvas" style={{ zoom: 0.5, maxWidth: '400px', maxHeight: '300px' }}></canvas>
              </div>
              {/* <Button className="mt-4" onClick={downloandBarcode}>Download</Button> */}
            </CardContent>
            <CardFooter className="mt-auto flex justify-center">
              <Button onClick={downloandBarcode}><DownloadIcon className="mr-2" />Download Barcode</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BarcodeGenerator;