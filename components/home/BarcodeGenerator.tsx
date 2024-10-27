'use client';

import { useState } from 'react';
import { ReloadIcon, DownloadIcon } from "@radix-ui/react-icons"
// import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarcodeSelector } from './BarcodeSelector';
import BwipJs from '@bwip-js/browser';
import { saveAs } from 'file-saver';
import { symdesc, DownloadKey, DownloadTypeInfoMap } from '@/lib/consts';
import { getDefaultSpecificOptions } from '@/lib/utils';
import { GenParams } from '@/types/barcode';

const BarcodeGenerator = () => {
  const [barcodeType, setBarcodeType] = useState<string | undefined>(undefined);
  const [barcodeData, setBarcodeData] = useState<string>('');
  const [altText, setAltText] = useState<string>('');
  const [outputType, setOutputType] = useState<DownloadKey>(DownloadKey.png);

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

  const handleOutputTypeChange = (value: DownloadKey) => {
    setOutputType(value);
  }

  const downloandBarcode = () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (canvas) {
      const downloadInfo = DownloadTypeInfoMap[outputType];
      const ext = downloadInfo.ext;
      const mimeType = downloadInfo.mimeType;
      const basename = barcodeType + '-' + barcodeData.replace(/[^a-zA-Z0-9._]+/g, '-');

      const context = canvas.getContext("2d");
      if (context) {
        context.globalCompositeOperation = "destination-over";
        context.fillStyle = "rgb(255,255,255)";
        context.fillRect(0, 0, canvas.width, canvas.height)
      }

      canvas.toBlob(function (blob) {
        if (blob) {
          saveAs(blob, basename + ext);
        }
      }, mimeType);
    }
  }

  return (
    <section id="generator" className="pt-3 pb-12">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Generate Free Barcode</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
          <BarcodeSelector onSelect={selecChangeHandler} />
          <Card className="flex flex-col h-full rounded">
            {/* <CardHeader>
              <CardTitle>Barcode type</CardTitle>
            </CardHeader> */}
            <CardContent className="flex-grow">
              <div className="mt-4 font-bold">Barcode Data</div>
              <Textarea
                placeholder="input barcode data"
                rows={4}
                value={barcodeData || ''}
                onChange={(e) => setBarcodeData(e.target.value)}
              />
              <div className="mt-2 text-gray-500 text-xs">{barcodeType && symdesc[barcodeType]?.format}</div>
              {/** whether alt text is needed? */}
              {/* <div className="mt-4 font-bold">Alt Text</div>
              <Input
                type="text"
                placeholder="input alt text"
                value={altText || ''}
                onChange={(e) => setAltText(e.target.value)}
              /> */}
            </CardContent>
            <CardFooter className="mt-auto flex justify-center">
              <Button variant="outline" className="border-primary" onClick={genBtnHandler}><ReloadIcon className="mr-2" />Generate Barcode</Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full rounded">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex justify-center items-center">
              <div className="mt-4">
                <canvas id="canvas" style={{ zoom: 0.5, margin: '0 auto', maxWidth: '400px', maxHeight: '300px' }}></canvas>
              </div>
            </CardContent>
            <CardFooter className="mt-auto flex justify-center">
              <Button className="mr-2" onClick={downloandBarcode}><DownloadIcon className="mr-2" />Download Barcode</Button>
              <Select value={outputType} onValueChange={handleOutputTypeChange}>
                <SelectTrigger>
                  <SelectValue placeholder="output type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={DownloadKey.png}>png</SelectItem>
                  <SelectItem value={DownloadKey.jpeg}>jpeg</SelectItem>
                  <SelectItem value={DownloadKey.bmp}>bmp</SelectItem>
                  <SelectItem value={DownloadKey.gif}>gif</SelectItem>
                </SelectContent>
              </Select>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BarcodeGenerator;