'use client';

import { Button } from "@/components/ui/button";
import { useBarcodeStore } from "@/lib/store";

interface SelectBarcodeButtonProps {
  barcodeType: string;
}

const SelectBarcodeButton: React.FC<SelectBarcodeButtonProps> = ({ barcodeType }) => {
  const setSelectedType = useBarcodeStore(state => state.setSelectedType);

  const handleClick = () => {
    setSelectedType(barcodeType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button 
      onClick={handleClick}
      variant="outline" 
      size="sm"
    >
      generate
    </Button>
  );
};

export default SelectBarcodeButton;