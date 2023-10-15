import AfterLoginHeader from '../../../components/Header/AfterLoginHeader';
import { Container, Text, Flex, Box, Image, Avatar, HStack, Button } from '@chakra-ui/react';
import Breezy from '../../../assets/Breezey.png';
import { FormInput, FormSelect } from '@/components';
import { Form, FormikProvider, useFormik } from 'formik';
import { ArtistCreateFormValues } from './schema';

const ArtistEditProfile = () => {
  const formik = useFormik<ArtistCreateFormValues>({
    initialValues: {
      fullName: '',
      stageName: '',
      emailAddress: '',
      artistGenre: '',
      phoneNumber: 0,
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
    },
    onSubmit: async () => {}
  });

  const { values, errors, touched, handleChange, isSubmitting } = formik;

  return (
    <>
      <AfterLoginHeader />
      <Box pb='100px'>
        <Container maxW='800px' p='0'>
          <Flex
            gap={{ md: '15px' }}
            alignItems='flex-start'
            direction={{ base: 'column', md: 'row' }}
          >
            <Box width='100%'>
              <Image src={Breezy} w='100%' h='350px' />
              <Box px={{ base: '12px', md: '0px' }}>
                <Flex flexDir={['column', 'row']} justifyContent='space-between'>
                  <Flex gap={[2, 2]} mt={['26px', 0]}>
                    <Avatar
                      src='data:image/jpeg;base64,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'
                      w='100px'
                      h='100px'
                      pos='relative'
                      top='-50px'
                      ml='20px'
                    />
                  </Flex>
                </Flex>
              </Box>

              <Box p={{ base: '20px', md: '0' }}>
                <FormikProvider value={formik}>
                  <Form>
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
                        label=''
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
                        label=''
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
                  </Form>
                </FormikProvider>

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

                <Box display='flex' justifyContent='center'>
                  <Button my='20px' width='50%' py='15px' h='auto' isLoading={isSubmitting}>
                    Save Changes
                  </Button>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default ArtistEditProfile;
