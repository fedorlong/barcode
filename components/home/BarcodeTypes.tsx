// import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const barcodeTypes = [
  {
    name: 'Code 128',
    description: 'High-density linear barcode symbol',
    characterSet: 'ASCII character set (0-127)',
    length: 'Variable length',
    usage: 'Used in logistics, packaging, and other scenarios',
  },
  {
    name: 'QR Code',
    description: 'Two-dimensional matrix barcode',
    characterSet: 'Numbers, letters, Chinese characters, binary',
    length: 'Can store up to 7089 digits or 4296 alphanumeric characters',
    usage: 'Used in mobile device scanning',
  },
  // 添加更多条形码类型
];

const BarcodeTypes = () => {
  return (
    <section id="types" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Common Barcode Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {barcodeTypes.map((type) => (
            <Card key={type.name} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{type.name}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p><strong>Character Set:</strong> {type.characterSet}</p>
                <p><strong>Length:</strong> {type.length}</p>
                <p><strong>Usage:</strong> {type.usage}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarcodeTypes;