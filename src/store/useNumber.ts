import { create } from "zustand";

interface PaginationState {
  active: boolean;
  setActive: (pageNumber: boolean) => void;
}

const useNumber = create<PaginationState>((set) => ({
  active: true,
  setActive: (pageNumber) => set({ active: pageNumber }),
}));

export default useNumber;
