import { create } from "zustand";

interface PageState {
  page: number;
  setPage: (newPage: number) => void; // Specify the type of newPage
}

const usePage = create<PageState>((set) => ({
  page: 0,
  setPage: (newPage) => set({ page: newPage }),
}));

export default usePage;
