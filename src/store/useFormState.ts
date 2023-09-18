import { create } from "zustand";

interface FormState {
  formRef: React.RefObject<HTMLFormElement> | null;
  setFormRef: (ref: React.RefObject<HTMLFormElement>) => void;
}

export const useFormState = create<FormState>((set) => ({
  formRef: null,
  setFormRef: (ref) => set({ formRef: ref }),
}));
