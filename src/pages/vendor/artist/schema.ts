import * as Yup from 'yup';

export type ArtistAddSongFormValues = {
  songGenre: string;
  songTitle: string;
  songFeature: string;
  songCover: File[];
};

export const ArtistAddSongSchema = Yup.object<Record<keyof ArtistAddSongFormValues, Yup.AnySchema>>({
  songGenre: Yup.string().required('Song Genre is required'),
  songTitle: Yup.string().required('Song Title is required'),
  songFeature: Yup.string().required('Song Feature is required'),
  songCover: Yup.array().of(Yup.mixed()).length(1, 'Please upload a valid image')
});


export type ArtistCreateFormValues = {
  fullName: string;
  stageName: string;
  emailAddress: string;
  artistGenre: string;
  phoneNumber: number;
  password: string;
  confirmPassword: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  dateOfBirth: string;
  gender: string;
  referralCode: string;
};


export const ArtistCreateSchema = Yup.object<Record<keyof ArtistCreateFormValues, Yup.AnySchema>>({
  fullName: Yup.string().required('Full Name is required'),
  stageName: Yup.string().required('Stage Name is required'),
  emailAddress: Yup.string().required('Email Address is required'),
  artistGenre: Yup.string().required('Artist Genre is required'),
  phoneNumber: Yup.number().required('Phone Number is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().required('Confirm Password is required'),
  address: Yup.string().required('Address is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  zipCode: Yup.string().required('Zip Code is required'),
  dateOfBirth: Yup.string().required('Date of Birth is required'),
  gender: Yup.string().required('Gender is required'),
  referralCode: Yup.string().required('Referral Code is required')

});





