'use client';

import { useState } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { useQueryState } from 'nuqs';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BarcodeGenerator = () => {
  // const [barcodeType, setBarcodeType] = useQueryState('type');
  // const [barcodeData, setBarcodeData] = useQueryState('data');
  const [barcodeType, setBarcodeType] = useState<string | null>(null);
  const [barcodeData, setBarcodeData] = useState<string | null>(null);
  const [barcodeImage, setBarcodeImage] = useState<string | null>(null);

  const generateBarcode = async () => {
    if (!barcodeType || !barcodeData) return;

    try {
      const response = await fetch('/api/generate-barcode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: barcodeType, data: barcodeData }),
      });

      if (response.ok) {
        const blob = await response.blob();
        setBarcodeImage(URL.createObjectURL(blob));
      } else {
        console.error('生成条形码失败');
      }
    } catch (error) {
      console.error('生成条形码时出错:', error);
    }
  };

  return (
    <section id="generator" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">条形码生成器</h2>
        <div className="space-y-4">
          <Select value={barcodeType || ''} onValueChange={setBarcodeType}>
            <SelectTrigger>
              <SelectValue placeholder="选择条形码类型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="code128">Code 128</SelectItem>
              <SelectItem value="qrcode">QR Code</SelectItem>
              {/* 添加更多条形码类型 */}
            </SelectContent>
          </Select>
          <Input
            type="text"
            placeholder="输入条形码数据"
            value={barcodeData || ''}
            onChange={(e) => setBarcodeData(e.target.value)}
          />
          <Button onClick={generateBarcode}>生成条形码</Button>
        </div>
        {barcodeImage && (
          <div className="mt-6">
            <img src={barcodeImage} alt="生成的条形码" className="mx-auto" />
          </div>
        )}
      </div>
    </section>
  );
};

export default BarcodeGenerator;