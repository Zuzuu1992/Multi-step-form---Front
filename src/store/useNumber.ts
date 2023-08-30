import { create } from "zustand";

interface StepNumber {
  step: number;
  nextStep: (by: number) => void;
}

export const useNumber = create<StepNumber>()((set) => ({
  step: 1,
  nextStep: (by) => set((state) => ({ step: state.step + by })),
}));
