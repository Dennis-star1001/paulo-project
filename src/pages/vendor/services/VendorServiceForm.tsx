import {
  useAddVendorServiceMutation,
  useGetVendorServiceCategoriesQuery
} from '@/app/services/service';
import { FormInput, FormLeftAddonInput, FormSelect, FormTextArea } from '@/components';
import { AvatarUploader } from '@/components/upload';
import { useHandleError, useHandleSuccess } from '@/hooks';
import { Box, Button, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { Form, FormikProvider, useFormik } from 'formik';
import { ServiceFormValues, ServiceSchema } from './schema';
import { useNavigate } from 'react-router';
import { path } from '@/routes/path';

export const VendorServiceForm = () => {
  const handleError = useHandleError();
  const handleSuccess = useHandleSuccess();

  const router = useNavigate();

  const [vendorService] = useAddVendorServiceMutation();
  const { data: response } = useGetVendorServiceCategoriesQuery();
  const categories =
    response?.data?.map((category) => ({
      label: category.name,
      value: category.id
    })) || [];

  const formik = useFormik<ServiceFormValues>({
    initialValues: {
      availableSlot: '',
      category: '',
      description: '',
      price: '',
      serviceImage: [],
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
        formData.append('serviceImage', values.serviceImage[0]);

        const response = await vendorService(formData).unwrap();
        handleSuccess('Success', response.message || 'Service created');
        router(path.VENDOR_SERVICES);
      } catch (err) {
        handleError(err);
      }
    },
    validationSchema: ServiceSchema
  });
  const { values, errors, touched, handleChange, isSubmitting, setFieldValue } = formik;

  return (
    <Box bg='neutral.100' p={[4, '100px']}>
      <FormikProvider value={formik}>
        <Form>
          <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} columnGap={6}>
            <GridItem>
              <Text color='black' textTransform='uppercase' textStyle='h1' mb='30px'>
                create service
              </Text>
              <Stack>
                <AvatarUploader
                  name='serviceImage'
                  errorMessage={errors.serviceImage}
                  touchedField={touched.serviceImage}
                  setFieldValue={setFieldValue}
                />
              </Stack>
            </GridItem>
            <GridItem>
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
                  placeholder='Select Category'
                  options={categories}
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
            </GridItem>
          </Grid>
        </Form>
      </FormikProvider>
    </Box>
  );
};
