import { create } from "zustand";

interface SelectedAddOnsState {
  selectedAddOns: string[];
  setSelectedAddOns: (selectedAddOns: string[]) => void;
}

export const useAddOnsStore = create<SelectedAddOnsState>((set) => ({
  selectedAddOns: [],
  setSelectedAddOns: (selectedAddOns: string[]) => {
    set({ selectedAddOns });
  },
}));
