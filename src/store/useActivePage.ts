import { create } from "zustand";

interface ActivePageState {
  activePage: number;
  setActivePage: (page: number) => void;
}

const useActivePage = create<ActivePageState>((set) => ({
  activePage: 0,

  setActivePage: (page) => {
    set({ activePage: page });
  },
}));

export default useActivePage;
