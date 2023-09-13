import { create } from "zustand";

interface validForm {
  formData: {
    name: string;
    email: string;
    phone: string;
  };
  setFormData: (data: { name: string; email: string; phone: string }) => void;
}

const useValidForm = create<validForm>((set) => ({
  formData: {
    // Initialize with your form data structure
    name: "",
    email: "",
    phone: "",
  },
  setFormData: (data) => set({ formData: data }),
}));

export default useValidForm;
