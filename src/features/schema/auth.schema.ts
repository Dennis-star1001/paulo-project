import * as Yup from 'yup';

export type PersonalSignupFormValues = {
  firstname: string;
  lastname: string;
  email: string;
  referral_code: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export type VendorSignupFormValues = {
  businessImage: File | null;
  businessEmail: string;
  businessPassword: string;
  businessName: string;
  address: string;
  businessPhone: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  dob: string;
  gender: string;
  registrationNumber: string;
  business_referral_code: string;
};

export const SignupSchema = Yup.object<Record<keyof PersonalSignupFormValues, Yup.AnySchema>>({
  firstname: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Please enter a valid first name')
    .required('Firstname is required'),
  lastname: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Please enter a valid last name')
    .required('Lastname is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Enter a valid phone number')
    .test(
      'phone-length',
      'Phone number must be either 10 or 11 characters',
      (value: string | undefined) => {
        if (!value) {
          return false;
        }

        return value.length === 10 || value.length === 11;
      }
    )
    .required('Phone number is required'),
  referral_code: Yup.string(),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Passwords must match')
});

export const VendorSignupSchema = Yup.object<Record<keyof VendorSignupFormValues, Yup.AnySchema>>({
  businessImage: Yup.mixed<File>().required('Business image is required'),
  businessEmail: Yup.string().email('Enter a valid email').required('Email is required'),
  businessPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character'
    )
    .required('Password is required'),
  businessName: Yup.string().required('Business name is required'),
  address: Yup.string().required('Address is required'),
  businessPhone: Yup.string()
    .matches(/^[0-9]+$/, 'Enter a valid phone number')
    .test(
      'phone-length',
      'Phone number must be either 10 or 11 characters',
      (value: string | undefined) => {
        if (!value) {
          return false;
        }

        return value.length === 10 || value.length === 11;
      }
    )
    .required('Phone number is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  zipCode: Yup.string().required('Zip code is required'),
  dob: Yup.string().required('Date of birth is required'),
  gender: Yup.string().required('Gender is required'),
  registrationNumber: Yup.string().required('Registration number is required'),
  business_referral_code: Yup.string().required('Please select a referral channel')
});
