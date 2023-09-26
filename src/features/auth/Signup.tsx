import { ReactComponent as UserCartBlack } from '@/assets/user-cart-black.svg';
import { ReactComponent as UserCartWhite } from '@/assets/user-cart-white.svg';
import { ReactComponent as UserOctagonBlack } from '@/assets/user-octagon-black.svg';
import { ReactComponent as UserOctagonWhite } from '@/assets/user-octagon-white.svg';
import { DropzoneFileUpload, FormInput, FormLeftAddonInput, PasswordInput } from '@/components';
import { AuthButton, Modal } from '@/components/auth';
import {
  Button,
  Link as ChakraLink,
  Checkbox,
  Divider,
  Flex,
  Grid,
  GridItem,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UseDisclosureProps
} from '@chakra-ui/react';
import { useState } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import {
  PersonalSignupFormValues,
  SignupSchema,
  VendorSignupFormValues,
  VendorSignupSchema
} from '../schema/auth.schema';
import { usePersonalSignupMutation, useVendorSignupMutation } from '@/app/services/auth';
import { useHandleError, useHandleSuccess } from '@/hooks';

export const SignupModal = ({ isOpen = true, onClose = () => null }: UseDisclosureProps) => {
  const [hasCheckedTerms, setCheckedTerms] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const personalTabSelected = tabIndex === 0;

  const [signup] = usePersonalSignupMutation();
  const [vendorSignup] = useVendorSignupMutation();

  const handleError = useHandleError();
  const handleSuccess = useHandleSuccess();

  const personalRegFormik = useFormik<PersonalSignupFormValues>({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      referral_code: ''
    },
    onSubmit: async (values) => {
      try {
        const payload: PersonalSignupFormValues = {
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          phone: values.phone,
          referral_code: values.referral_code,
          password: values.password,
          confirmPassword: values.confirmPassword
        };

        const response = await signup(payload).unwrap();

        handleSuccess('Success', response.message || 'You have successfully signed up');
        onClose();
      } catch (err: any) {
        handleError(err);
      }
    },
    validationSchema: SignupSchema
  });

  const { values, errors, touched, handleChange, isSubmitting } = personalRegFormik;

  const businessRegFormik = useFormik<VendorSignupFormValues>({
    initialValues: {
      businessImage: null,
      businessEmail: '',
      businessPassword: '',
      businessName: '',
      address: '',
      businessPhone: '',
      country: '',
      state: '',
      city: '',
      zipCode: '',
      dob: '',
      gender: '',
      registrationNumber: '',
      business_referral_code: ''
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        if (values.businessImage instanceof Array) {
          formData.append('businessImage', values.businessImage[0]);
        }
        formData.append('email', values.businessEmail);
        formData.append('password', values.businessPassword);
        formData.append('businessName', values.businessName);
        formData.append('address', values.address);
        formData.append('phone', values.businessPhone);
        formData.append('country', values.country);
        formData.append('state', values.state);
        formData.append('city', values.city);
        formData.append('zipCode', values.zipCode);
        formData.append('dob', values.dob);
        formData.append('gneder', values.gender);
        formData.append('registrationNumber', values.registrationNumber);
        formData.append('referral_code', values.business_referral_code);

        const response = await vendorSignup(formData).unwrap();
        handleSuccess('Success', response.message || 'You have successfully signed up');
        onClose();
      } catch (err) {
        handleError(err);
      }
    },
    validationSchema: VendorSignupSchema
  });
  const {
    values: businessValues,
    errors: businessErrors,
    touched: businessTouched,
    handleChange: handleBusinessChange,
    isSubmitting: isBusinessSubmitting,
    setFieldValue: setBusinessFieldValue
  } = businessRegFormik;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        modalHeader={
          <Stack spacing={2}>
            <Text textStyle='body'>Welcome to Cleaques</Text>
            <Text textStyle='body' fontWeight={400}>
              Connect with your diaspora
            </Text>
          </Stack>
        }
      >
        <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)}>
          <Flex justifyContent='center'>
            <TabList
              as={Flex}
              gap='18px'
              border={0}
              sx={{
                '.chakra-tabs__tab': {
                  outline: 0,
                  border: 0,
                  w: '150px',
                  h: '150px',
                  color: '#000',
                  _selected: {
                    color: '#fff',
                    bg: 'primary'
                  }
                }
              }}
            >
              <Tab>
                <Stack>
                  {personalTabSelected ? <UserOctagonWhite /> : <UserOctagonBlack />}
                  <Text>Personal</Text>
                </Stack>
              </Tab>
              <Tab>
                <Stack>
                  {personalTabSelected ? <UserCartBlack /> : <UserCartWhite />}
                  <Text>Vendor</Text>
                </Stack>
              </Tab>
            </TabList>
          </Flex>

          <TabPanels>
            <TabPanel>
              <FormikProvider value={personalRegFormik}>
                <Form>
                  <AuthButton />

                  <Divider my={8} />

                  <Stack spacing={4}>
                    <FormInput
                      label='Firstname'
                      name='firstname'
                      value={values.firstname}
                      errorMessage={errors.firstname}
                      onChange={handleChange}
                      touchedField={touched.firstname}
                    />
                    <FormInput
                      label='Lastname'
                      name='lastname'
                      value={values.lastname}
                      errorMessage={errors.lastname}
                      onChange={handleChange}
                      touchedField={touched.lastname}
                    />
                    <FormInput
                      label='Email Address'
                      name='email'
                      value={values.email}
                      errorMessage={errors.email}
                      onChange={handleChange}
                      touchedField={touched.email}
                    />
                    <FormLeftAddonInput
                      label='Phone number'
                      addonText='+234'
                      onChange={handleChange}
                      inputProps={{
                        name: 'phone',
                        id: 'phone',
                        maxLength: 11,
                        minLength: 10,
                        inputMode: 'tel'
                      }}
                      errorMessage={errors.phone}
                      touchedField={touched.phone}
                      value={values.phone}
                    />
                    <PasswordInput
                      id='password'
                      name='password'
                      label='Password'
                      value={values.password}
                      errorMessage={errors.password}
                      onChange={handleChange}
                      touchedField={touched.password}
                    />
                    <PasswordInput
                      id='confirm-password'
                      name='confirmPassword'
                      label='Confirm password'
                      value={values.confirmPassword}
                      errorMessage={errors.confirmPassword}
                      onChange={handleChange}
                      touchedField={touched.confirmPassword}
                    />
                    <FormInput
                      label='Referral Code (optional)'
                      name='referral_code'
                      value={values.referral_code}
                      errorMessage={errors.referral_code}
                      onChange={handleChange}
                      touchedField={touched.referral_code}
                    />
                    <Stack spacing={2}>
                      <Checkbox
                        isChecked={hasCheckedTerms}
                        onChange={() => setCheckedTerms(!hasCheckedTerms)}
                      >
                        <Text textStyle='body' fontWeight={400}>
                          Agree to Cleaques <ChakraLink href='#'>Terms and Conditions </ChakraLink>{' '}
                          and <ChakraLink href='#'>and Use of Privacy Policy</ChakraLink>
                        </Text>
                      </Checkbox>
                      <Text textStyle='subtext' ml={6}>
                        You consent to receive phone calls and SMS from Cleaques to provide updates
                        on your order and/or for msrketing purposes.
                      </Text>
                    </Stack>
                  </Stack>
                  <Flex justifyContent='center' mt='25px'>
                    <Stack spacing={4}>
                      <Button
                        isDisabled={!hasCheckedTerms || isSubmitting}
                        w={['full', '312px']}
                        type='submit'
                      >
                        Sign Up
                      </Button>
                      <Text textAlign='center' textStyle='body-regular' fontWeight={400}>
                        Already have an account?{' '}
                        <ChakraLink href='/login' textStyle='body'>
                          Login
                        </ChakraLink>
                      </Text>
                    </Stack>
                  </Flex>
                </Form>
              </FormikProvider>
            </TabPanel>
            <TabPanel>
              <FormikProvider value={businessRegFormik}>
                <Form>
                  <AuthButton />
                  <Divider my={8} />
                  <Grid templateColumns='repeat(2, 1fr)' rowGap={4} columnGap={5}>
                    <GridItem colSpan={2}>
                      <FormInput
                        label='Company Name'
                        id='business-name'
                        name='businessName'
                        value={businessValues.businessName}
                        errorMessage={businessErrors.businessName}
                        onChange={handleBusinessChange}
                        touchedField={businessTouched.businessName}
                      />
                    </GridItem>
                    <GridItem colSpan={2}>
                      <FormInput
                        label='Email Address'
                        id='business-email'
                        name='businessEmail'
                        value={businessValues.businessEmail}
                        errorMessage={businessErrors.businessEmail}
                        onChange={handleBusinessChange}
                        touchedField={businessTouched.businessEmail}
                      />
                    </GridItem>
                    <GridItem colSpan={2}>
                      <PasswordInput
                        id='business-password'
                        name='businessPassword'
                        label='Password'
                        value={businessValues.businessPassword}
                        errorMessage={businessErrors.businessPassword}
                        onChange={handleBusinessChange}
                        touchedField={businessTouched.businessPassword}
                      />
                    </GridItem>
                    <GridItem colSpan={2}>
                      <FormLeftAddonInput
                        label='Phone number'
                        addonText='+234'
                        onChange={handleBusinessChange}
                        inputProps={{
                          name: 'businessPhone',
                          id: 'phone',
                          maxLength: 11,
                          minLength: 10,
                          inputMode: 'tel'
                        }}
                        errorMessage={businessErrors.businessPhone}
                        touchedField={businessTouched.businessPhone}
                        value={businessValues.businessPhone}
                      />
                    </GridItem>
                    <GridItem colSpan={2}>
                      <FormInput
                        label='Address'
                        id='address'
                        name='address'
                        value={businessValues.address}
                        errorMessage={businessErrors.address}
                        onChange={handleBusinessChange}
                        touchedField={businessTouched.address}
                      />
                    </GridItem>
                    <GridItem>
                      <FormInput
                        label='Country'
                        id='country'
                        name='country'
                        value={businessValues.country}
                        errorMessage={businessErrors.country}
                        onChange={handleBusinessChange}
                        touchedField={businessTouched.country}
                      />
                    </GridItem>
                    <GridItem>
                      <FormInput
                        label='State/Province'
                        id='state'
                        name='state'
                        value={businessValues.state}
                        errorMessage={businessErrors.state}
                        onChange={handleBusinessChange}
                        touchedField={businessTouched.state}
                      />
                    </GridItem>
                    <GridItem>
                      <FormInput
                        label='City'
                        id='city'
                        name='city'
                        value={businessValues.city}
                        errorMessage={businessErrors.city}
                        onChange={handleBusinessChange}
                        touchedField={businessTouched.city}
                      />
                    </GridItem>
                    <GridItem>
                      <FormInput
                        label='Zip code'
                        id='zip'
                        name='zipCode'
                        value={businessValues.zipCode}
                        errorMessage={businessErrors.zipCode}
                        onChange={handleBusinessChange}
                        touchedField={businessTouched.zipCode}
                      />
                    </GridItem>
                    <GridItem>
                      <FormInput
                        label='Date of birth'
                        type='date'
                        id='dob'
                        name='dob'
                        value={businessValues.dob}
                        errorMessage={businessErrors.dob}
                        onChange={handleBusinessChange}
                        touchedField={businessTouched.dob}
                      />
                    </GridItem>
                    <GridItem>
                      <FormInput
                        label='Gender'
                        id='gender'
                        name='gender'
                        value={businessValues.gender}
                        errorMessage={businessErrors.gender}
                        onChange={handleBusinessChange}
                        touchedField={businessTouched.gender}
                      />
                    </GridItem>
                    <GridItem colSpan={2}>
                      <FormInput
                        label='Referral Code (optional)'
                        id='business-referral-code'
                        name='business_referral_code'
                        value={businessValues.business_referral_code}
                        errorMessage={businessErrors.business_referral_code}
                        onChange={handleBusinessChange}
                        touchedField={businessTouched.business_referral_code}
                      />
                    </GridItem>
                  </Grid>
                  <Divider my='18px' />
                  <Stack spacing={1}>
                    <FormInput
                      label='EIN/RIC Registration Number'
                      id='registration-number'
                      name='registrationNumber'
                      value={businessValues.registrationNumber}
                      errorMessage={businessErrors.registrationNumber}
                      onChange={handleBusinessChange}
                      touchedField={businessTouched.registrationNumber}
                    />
                    <DropzoneFileUpload
                      name='businessImage'
                      setFieldValue={setBusinessFieldValue}
                      label='Upload business registration certificate'
                      errorMessage={businessErrors.businessImage}
                      touchedField={businessTouched.businessImage}
                      fileSize={5}
                    />
                  </Stack>
                  <Divider my='18px' />
                  <Stack spacing={2}>
                    <Checkbox>
                      <Text textStyle='body' fontWeight={400}>
                        Agree to Cleaques <ChakraLink href='#'>Terms and Conditions </ChakraLink>{' '}
                        and <ChakraLink href='#'>and Use of Privacy Policy</ChakraLink>
                      </Text>
                    </Checkbox>
                    <Text textStyle='subtext' ml={6}>
                      You consent to receive phone calls and SMS from Cleaques to provide updates on
                      your order and/or for msrketing purposes.
                    </Text>
                  </Stack>
                  <Flex justifyContent='center' mt='25px'>
                    <Stack spacing={4}>
                      <Button w={['full', '312px']} isDisabled={isBusinessSubmitting} type='submit'>
                        Sign Up
                      </Button>
                      <Text textAlign='center' textStyle='body-regular' fontWeight={400}>
                        Already have an account?{' '}
                        <ChakraLink href='/login' textStyle='body'>
                          Login
                        </ChakraLink>
                      </Text>
                    </Stack>
                  </Flex>
                </Form>
              </FormikProvider>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Modal>
    </>
  );
};
