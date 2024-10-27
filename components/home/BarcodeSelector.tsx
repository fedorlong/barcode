'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { CATEGORY_MAP, CATEGORY_NAMES, Category } from '@/lib/consts';
import { useBarcodeStore } from '@/lib/store';

interface BarcodeSelectorProps {
  onSelect: (type: string) => void;
}

export const BarcodeSelector: React.FC<BarcodeSelectorProps> = ({ onSelect }) => {
  // const [selectedType, setSelectedType] = useState<string>('upca');
  const { selectedType, setSelectedType } = useBarcodeStore();
  const [openCategory, setOpenCategory] = useState<string>(Category.PointOfSale);
  const cardRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const timeoutRef = useRef<number | null>(null);

  const handleSelect = (type: string) => {
    setSelectedType(type);
    // onSelect(type);
  };

  const handleAccordionChange = (value: string) => {
    setOpenCategory(value);
  };

  const handleExternalTypeChange = (newType: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newCategory = Object.entries(CATEGORY_MAP).find(([_, barcodes]) =>
      barcodes.some(barcode => barcode.value === newType)
    )?.[0];

    if (newCategory && newCategory !== openCategory) {
      setOpenCategory(newCategory);
    }
  };

  const scrollToCategory = () => {
    if (openCategory && cardRef.current && triggerRefs.current[openCategory]) {
      const cardContentTop = cardRef.current.getBoundingClientRect().top;
      const triggerTop = triggerRefs.current[openCategory]!.getBoundingClientRect().top;
      const scrollDistance = triggerTop - cardContentTop;

      cardRef.current.scrollTo({
        top: cardRef.current.scrollTop + scrollDistance,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // 清除之前的 timeout
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    // 使用 requestAnimationFrame 来确保在下一帧执行
    timeoutRef.current = window.setTimeout(() => {
      requestAnimationFrame(scrollToCategory);
    }, 300);

    // 清理函数
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openCategory]);

  // selectedType changed, trigger onSelect and handle external changes
  useEffect(() => {
    onSelect(selectedType);
    handleExternalTypeChange(selectedType);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType]);

  return (
    <Card className="rounded">
      <CardContent className="pt-4 pb-0 px-0">
        <div ref={cardRef} className="max-h-[40vh] overflow-y-auto px-4">
          <Accordion
            type="single"
            value={openCategory}
            onValueChange={handleAccordionChange}
            collapsible
            className="w-full"
          >
            {Object.entries(CATEGORY_MAP).map(([category, barcodes]) => (
              <AccordionItem value={category} key={category}>
                <AccordionTrigger
                  ref={(el: HTMLButtonElement | null) => {
                    if (el) triggerRefs.current[category] = el;
                  }}
                  className="cursor-pointer p-2 flex items-center justify-between whitespace-nowrap text-sm font-medium w-full 
                  bg-[#3c3c44] text-primary-foreground hover:bg-primary/75 h-10 rounded-none px-3"
                  style={{ fontWeight: 600 }}
                >
                  <span>{CATEGORY_NAMES[category as Category]}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-0.5">
                    {barcodes.map((barcode) => (
                      <li
                        key={barcode.value}
                        className={`cursor-pointer p-[8px] rounded ${
                          selectedType === barcode.value ? 'bg-gray-100 font-semibold border-2 p-[6px] border-primary' : 'hover:bg-gray-100'
                        }`}
                        onClick={() => handleSelect(barcode.value)}
                      >
                        {barcode.label}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
};