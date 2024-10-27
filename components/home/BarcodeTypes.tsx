// import { useState } from 'react';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COMMON_BARCODE_TYPES } from "@/lib/consts";
import SelectBarcodeButton from "./SelectBarcodeButton";

const BarcodeTypes = () => {
  return (
    <section id="types" className="py-12">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Common Barcode Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {COMMON_BARCODE_TYPES.map((type) => (
            <Card key={type.value} className="hover:shadow-lg transition-shadow text-sm">
              <CardHeader className="pb-4 flex flex-row items-center justify-between">
                <CardTitle>{type.label}</CardTitle>
                <SelectBarcodeButton barcodeType={type.value} />
              </CardHeader>
              <CardContent>
                <div className="w-full flex justify-center mb-4">
                  <Image
                    className="shrink-0"
                    src={type?.url}
                    alt="tool Logo"
                    width={0}
                    height={0}
                    sizes="10vw"
                    style={{ width: 'auto', maxHeight: '70px' }}
                    decoding="async"
                  />
                </div>
                <p className="mb-2"><strong>Format:</strong> {type.dataFormat}</p>
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