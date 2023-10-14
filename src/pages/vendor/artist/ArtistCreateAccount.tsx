import BeforeLoginHeader from '../../../components/Header/BeforeLoginHeader';
import {
  Container,
  Text,
  Flex,
  Box,
  Image,
  Stack,
  Avatar,
  Heading,
  HStack,
  VStack,
  Button,
  Badge,
  Grid,
  GridItem,
  Progress,
  Checkbox,
  CheckboxGroup
} from '@chakra-ui/react';
import { AvatarUploader } from '@/components/upload';
import {
  FormInput,
  FormLeftAddonInput,
  FormSelect,
  FormTextArea,
  FormCheckBox
} from '@/components';
import { Form, FormikProvider, useFormik } from 'formik';
import { ArtistCreateFormValues, ArtistCreateSchema } from './schema';

const ArtistCreateAccount = () => {
  const formik = useFormik<ArtistCreateFormValues>({
    initialValues: {
      fullName: '',
      stageName: '',
      emailAddress: '',
      artistGenre: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      address: '',
      country: '',
      state: '',
      city: '',
      zipCode: '',
      dateOfBirth: '',
      gender: '',
      referralCode: ''
    }
  });

  const { values, errors, touched, handleChange, isSubmitting, setFieldValue } = formik;

  return (
    <>
      <BeforeLoginHeader />

      <Box p={[4, '80px']}>
        <Container maxW='600px' p='0'>
          <Heading fontSize='1.4rem' textAlign='center' my={{ base: '40px', md: '10px' }}>
            CREATE AND ARTIST ACCOUNT
          </Heading>
          <FormikProvider value={formik}>
            <Form spacing='20px'>
              <FormInput
                py='25px'
                id='fullName'
                name='fullName'
                placeholder='Full Name'
                value={values.fullName}
                errorMessage={errors.fullName}
                onChange={handleChange}
                touchedField={touched.fullName}
                mb='20px'
              />

              <FormInput
                py='25px'
                id='stageName'
                name='stageName'
                placeholder='Stage Name'
                value={values.stageName}
                errorMessage={errors.stageName}
                onChange={handleChange}
                touchedField={touched.stageName}
                mb='20px'
              />

              <FormInput
                py='25px'
                id='emailAddress'
                name='emailAddress'
                placeholder='Email Address'
                value={values.emailAddress}
                errorMessage={errors.emailAddress}
                onChange={handleChange}
                touchedField={touched.emailAddress}
                mb='20px'
              />

              <FormInput
                py='25px'
                id='artistGenre'
                name='artistGenre'
                placeholder='Artist Genre'
                value={values.artistGenre}
                errorMessage={errors.artistGenre}
                onChange={handleChange}
                touchedField={touched.artistGenre}
              />
              <Text mb='20px' fontSize='.8rem' mt='3px'>
                Artists can add up to three genres
              </Text>

              <FormInput
                py='25px'
                id='phoneNumber'
                name='phoneNumber'
                placeholder='Phone Number'
                value={values.phoneNumber}
                errorMessage={errors.phoneNumber}
                onChange={handleChange}
                touchedField={touched.phoneNumber}
                mb='20px'
              />

              <FormInput
                py='25px'
                id='password'
                name='password'
                placeholder='Password'
                value={values.password}
                errorMessage={errors.password}
                onChange={handleChange}
                touchedField={touched.password}
                mb='20px'
              />

              <FormInput
                py='25px'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Confirm Password'
                value={values.confirmPassword}
                errorMessage={errors.confirmPassword}
                onChange={handleChange}
                touchedField={touched.confirmPassword}
                mb='20px'
              />

              <FormInput
                py='25px'
                id='address'
                name='address'
                placeholder='Address'
                value={values.address}
                errorMessage={errors.address}
                onChange={handleChange}
                touchedField={touched.address}
                mb='20px'
              />

              <HStack mb='25px'>
                <FormSelect
                  id='country'
                  name='country'
                  placeholder='Country'
                  options={[]}
                  value={values.country}
                  errorMessage={errors.country}
                  onChange={handleChange}
                  touchedField={touched.country}
                />

                <FormInput
                  py='25px'
                  id='state'
                  name='state'
                  placeholder='State/Province'
                  value={values.state}
                  errorMessage={errors.state}
                  onChange={handleChange}
                  touchedField={touched.state}
                />
              </HStack>

              <HStack mb='25px'>
                <FormSelect
                  id='city'
                  name='city'
                  placeholder='City'
                  options={[]}
                  value={values.city}
                  errorMessage={errors.city}
                  onChange={handleChange}
                  touchedField={touched.city}
                />

                <FormInput
                  py='25px'
                  id='zipCode'
                  name='zipCode'
                  placeholder='Zip Code'
                  value={values.zipCode}
                  errorMessage={errors.zipCode}
                  onChange={handleChange}
                  touchedField={touched.zipCode}
                />
              </HStack>

              <HStack mb='25px'>
                <FormInput
                  py='25px'
                  id='dateOfBirth'
                  name='dateOfBirth'
                  placeholder='Date of Birth'
                  value={values.dateOfBirth}
                  errorMessage={errors.dateOfBirth}
                  onChange={handleChange}
                  touchedField={touched.dateOfBirth}
                />

                <FormInput
                  py='25px'
                  id='gender'
                  name='gender'
                  placeholder='Gender'
                  value={values.gender}
                  errorMessage={errors.gender}
                  onChange={handleChange}
                  touchedField={touched.gender}
                />
              </HStack>

              <FormInput
                py='25px'
                id='referralCode'
                name='referralCode'
                placeholder='Referral Code (optional)'
                value={values.referralCode}
                errorMessage={errors.referralCode}
                onChange={handleChange}
                touchedField={touched.referralCode}
              />

              <Checkbox mt='20px' mb='8px'>
                Agree to Cleaques Terms and Conditions and Use of Privacy Policy
              </Checkbox>

              <Text fontSize='0.8rem' pl='20px'>
                You consent to receive phone calls and SMS from Cleaques to provide updates on your
                order and/or for marketing purposes
              </Text>

              <Box display='flex' justifyContent='center'>
                <Button my='20px' width='80%' py='15px' h='auto'>
                  Sign Up
                </Button>
              </Box>
            </Form>
          </FormikProvider>
        </Container>
      </Box>
    </>
  );
};

export default ArtistCreateAccount;
