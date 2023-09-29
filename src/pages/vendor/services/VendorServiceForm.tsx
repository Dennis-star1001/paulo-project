import { useAddServiceMutation } from '@/app/services/admin_service';
import Placeholder from '@/assets/placeholder.png';
import { FormInput, FormLeftAddonInput, FormSelect, FormTextArea, IconButton } from '@/components';
import { useHandleError, useHandleSuccess } from '@/hooks';
import { Box, Button, Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react';
import { Form, FormikProvider, useFormik } from 'formik';
import { RiImage2Fill } from 'react-icons/ri';
import { ServiceFormValues, ServiceSchema } from './schema';

export const VendorServiceForm = () => {
  const handleError = useHandleError();
  const handleSuccess = useHandleSuccess();

  const [vendorService] = useAddServiceMutation();

  const formik = useFormik<ServiceFormValues>({
    initialValues: {
      availableSlot: '',
      category: '',
      description: '',
      price: '',
      serviceImage: null,
      title: ''
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append('slot', values.availableSlot.toString());
        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('amount', values.price);
        formData.append('type_id', values.category);

        if (values.serviceImage instanceof Array) {
          formData.append('serviceImage', values.serviceImage[0]);
        }

        const response = await vendorService(formData).unwrap();
        handleSuccess('Success', response.message || 'Service created');
      } catch (err) {
        handleError(err);
      }
    },
    validationSchema: ServiceSchema
  });
  const { values, errors, touched, handleChange, isSubmitting } = formik;

  return (
    <Box bg='neutral.100' p='100px'>
      <Grid templateColumns='repeat(2, 1fr)' columnGap={6}>
        <GridItem>
          <Text color='black' textTransform='uppercase' textStyle='h1' mb='30px'>
            create service
          </Text>
          <Stack>
            {/* <AvatarUploader
              name='profile_photo'
              errorMessage={errors.serviceImage}
              touchedField={touched.serviceImage}
              setFieldValue={setFieldValue}
              // src={ ''}
            /> */}
            <Image src={Placeholder} alt='service' w='592px' h='394px' />
            <IconButton aria-label='Add Image' mx='auto' icon={<RiImage2Fill />}>
              Add Image
            </IconButton>
          </Stack>
        </GridItem>
        <GridItem>
          <FormikProvider value={formik}>
            <Form>
              <Stack
                sx={{
                  'input, select, textarea': {
                    bgColor: '#fff',
                    _focus: {
                      bgColor: '#fff'
                    }
                  }
                }}
              >
                <FormSelect
                  label='Select Category'
                  id='category'
                  name='category'
                  options={[{ label: 'lorem', value: '1' }]}
                  value={values.category}
                  errorMessage={errors.category}
                  onChange={handleChange}
                  touchedField={touched.category}
                />
                <FormInput
                  label='Service Title'
                  id='title'
                  name='title'
                  value={values.title}
                  errorMessage={errors.title}
                  onChange={handleChange}
                  touchedField={touched.title}
                />
                <FormTextArea
                  label='Service Description'
                  id='description'
                  name='description'
                  errorMessage={errors.description}
                  handleChange={handleChange}
                  touchedField={touched.description}
                  value={values.description}
                  placeholder='Add more details to your service like your schedule, sponsors or featured guests.'
                />
                <FormLeftAddonInput
                  label='Price'
                  addonText='$'
                  onChange={handleChange}
                  inputProps={{
                    name: 'price',
                    id: 'price',
                    placeholder: 'Price of your service'
                  }}
                  errorMessage={errors.price}
                  touchedField={touched.price}
                  value={values.price}
                />
                <FormInput
                  type='number'
                  label='Available Slot'
                  id='availableSlot'
                  name='availableSlot'
                  value={values.availableSlot}
                  errorMessage={errors.availableSlot}
                  onChange={handleChange}
                  touchedField={touched.availableSlot}
                />
                <Stack spacing={6}>
                  <Button type='submit' isLoading={isSubmitting}>
                    Post Service
                  </Button>
                  <Button variant='outline'>Save for later</Button>
                </Stack>
              </Stack>
            </Form>
          </FormikProvider>
        </GridItem>
      </Grid>
    </Box>
  );
};
