import { create } from "zustand";

export interface InputInfo {
  name: string;
  email: string;
  phone: string;
}

interface FormStore {
  inputInfo: InputInfo;
  setInputInfo: (newInputInfo: InputInfo) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  inputInfo: { name: "", email: "", phone: "" },
  setInputInfo: (newInputInfo: InputInfo) => set({ inputInfo: newInputInfo }),
}));
