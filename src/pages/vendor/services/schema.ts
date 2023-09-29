import * as Yup from 'yup';

export type ServiceFormValues = {
  availableSlot: number | '';
  category: string;
  description: string;
  price: string;
  title: string;
  serviceImage: File | null;
};

export const ServiceSchema = Yup.object<Record<keyof ServiceFormValues, Yup.AnySchema>>({
  availableSlot: Yup.number().required('Available slot is required'),
  category: Yup.string().required('Category is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.string().required('Price is required'),
  title: Yup.string().required('Title is required'),
  serviceImage: Yup.mixed().required('Service image is required')
});
