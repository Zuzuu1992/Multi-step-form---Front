import { create } from "zustand";

interface numberState {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  // Add other relevant state here
}

const useNumber = create<numberState>((set) => ({
  currentPage: 1, // Initialize with the first page
  setCurrentPage: (page) => set({ currentPage: page }),
  // Initialize other state values here
}));

export default useNumber;
