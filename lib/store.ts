import { create } from "zustand";

type BarcodeStore = {
  selectedType: string
  setSelectedType: (type: string) => void
}

export const useBarcodeStore = create<BarcodeStore>((set) => ({
  selectedType: 'upca',
  setSelectedType: (type) => set({ selectedType: type }),
}))