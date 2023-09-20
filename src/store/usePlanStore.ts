import { create } from "zustand";

interface PlanStore {
  period: boolean;
  togglePeriod: () => void;
}

export const usePlanStore = create<PlanStore>((set) => ({
  period: false,
  togglePeriod: () => set((state) => ({ period: !state.period })),
}));
