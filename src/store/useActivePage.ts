import { create } from "zustand";

// Define the Zustand store
interface ActivePageState {
  activePage: number;
  setActivePage: (page: number) => void;
}

const useActivePage = create<ActivePageState>((set) => ({
  activePage: 0, // Initial active page is 0

  setActivePage: (page) => {
    set({ activePage: page });
  },
}));

export default useActivePage;
