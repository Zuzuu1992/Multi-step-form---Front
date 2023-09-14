import { create } from "zustand";

interface FormData {
  name: string;
  email: string;
  phone: string;
  // Add more fields as needed
}

interface FormStore {
  formData: FormData;
  setFormField: (field: string, value: string) => void;
}

const useFormStore = create<FormStore>((set) => ({
  formData: {
    name: "",
    email: "",
    phone: "",
    // Initialize other form fields here
  },
  setFormField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
}));

export default useFormStore;
