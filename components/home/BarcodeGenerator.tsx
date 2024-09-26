'use client';

import { useState } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { useQueryState } from 'nuqs';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import BwipJs from '@bwip-js/browser';
import { symdesc, CATEGORY_ARRAY, CATEGORY_NAMES, CATEGORY_MAP } from '@/lib/consts';
import { getDefaultSpecificOptions } from '@/lib/utils';

const BarcodeGenerator = () => {
  // const [barcodeType, setBarcodeType] = useQueryState('type');
  // const [barcodeData, setBarcodeData] = useQueryState('data');
  const [barcodeType, setBarcodeType] = useState<string | undefined>(undefined);
  const [barcodeData, setBarcodeData] = useState<string>('');
  const [altText, setAltText] = useState<string>('');
  // const [barcodeImage, setBarcodeImage] = useState<string | null>(null);
  // const barcodeOptions = formatBarcodeOptions(symdesc);

  const selecChangeHandler = (value: string) => {
    setBarcodeType(value);
    const defaultText = symdesc[value]?.text;
    setBarcodeData(defaultText);
    setAltText('');
  }

  const generateBarcode = async () => {
    if (!barcodeType || !barcodeData) return;

    // console.log(barcodeType, barcodeData);
    try {
      const optsStr = symdesc[barcodeType]?.opts;
      const specificOptions = getDefaultSpecificOptions(optsStr);

      BwipJs.toCanvas('canvas', {
        ...specificOptions,
        bcid: barcodeType,
        text: barcodeData,
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
    <section id="generator" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Generate Free Barcode</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="w-full">
            <div className="font-bold">Barcode type</div>
            <Select value={barcodeType || ''} onValueChange={selecChangeHandler}>
              <SelectTrigger>
                <SelectValue placeholder="select barcode type" />
              </SelectTrigger>
              <SelectContent>
                {/* {barcodeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))} */}

                {CATEGORY_ARRAY.map((category) => (
                  <SelectGroup key={category}>
                    <SelectLabel>{CATEGORY_NAMES[category]}</SelectLabel>
                    {CATEGORY_MAP[category].map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
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
            <Button className="mt-4" onClick={generateBarcode}>Generate Barcode</Button>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="mt-4 w-2/3 flex justify-center items-center">
              <canvas id="canvas" style={{ zoom: 0.5, width: '-webkit-fill-available' }}></canvas>
            </div>
            <Button className="mt-4" onClick={downloandBarcode}>Download</Button>
          </div>
          {/* <canvas ref={canvasRef} id="canvas"></canvas> */}
        </div>
        {/* {barcodeImage && (
          <div className="mt-6">
            <img src={barcodeImage} alt="生成的条形码" className="mx-auto" />
          </div>
        )} */}
      </div>
    </section>
  );
};

export default BarcodeGenerator;