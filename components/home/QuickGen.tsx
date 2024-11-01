'use client';

import React from 'react';
import { Badge } from "@/components/ui/badge"
import { COMMON_BARCODE_TYPES } from '@/lib/consts';
import { useBarcodeStore } from '@/lib/store';

export const QuickGen = () => {
  const setSelectedType = useBarcodeStore(state => state.setSelectedType);

  const handleQuickSelect = (type: string) => {
    setSelectedType(type);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {COMMON_BARCODE_TYPES.map((type) => (
        <React.Fragment key={type.value}>
          <Badge
            variant="outline"
            className="mr-1 mb-1 cursor-pointer hover:border-primary/50 hover:shadow-md transition-all"
            onClick={() => {
              handleQuickSelect(type.value);
            }}
          >
            {type.label}
          </Badge>
        </React.Fragment>
      ))}
    </>
  )
}