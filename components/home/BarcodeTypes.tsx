// import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const barcodeTypes = [
  {
    name: 'Code 128',
    description: '高密度线性条码符号',
    characterSet: 'ASCII 字符集 (0-127)',
    length: '可变长度',
    usage: '用于物流、包装等多种场景',
  },
  {
    name: 'QR Code',
    description: '二维矩阵条码',
    characterSet: '数字、字母、汉字、二进制',
    length: '最多可存储7089个数字或4296个字母数字',
    usage: '广泛用于移动设备扫描',
  },
  // 添加更多条形码类型
];

const BarcodeTypes = () => {
  return (
    <section id="types" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">常用条形码类型</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {barcodeTypes.map((type) => (
            <Card key={type.name} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{type.name}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p><strong>字符集:</strong> {type.characterSet}</p>
                <p><strong>长度:</strong> {type.length}</p>
                <p><strong>用途:</strong> {type.usage}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarcodeTypes;