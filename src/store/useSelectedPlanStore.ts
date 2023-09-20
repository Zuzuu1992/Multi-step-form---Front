import { create } from "zustand";

interface PlanStore {
  selectedOption: string | null;
  setSelectedOption: (option: string | null) => void;
}

export const useSelectedPlanStore = create<PlanStore>((set) => ({
  selectedOption: null,
  setSelectedOption: (option) => set({ selectedOption: option }),
}));
