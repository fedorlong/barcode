'use client';

import React from 'react';
import Link from 'next/link';
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
      {COMMON_BARCODE_TYPES.map((type, index) => (
        <React.Fragment key={type.value}>
          {index > 0 && <span className="mx-1">,</span>}
          <Link
            href="#generator"
            className="text-blue-600 hover:text-blue-800 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              handleQuickSelect(type.value);
            }}
          >
            {type.label}
          </Link>
        </React.Fragment>
      ))}
    </>
  )
}