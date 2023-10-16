import { useForgotPasswordMutation } from '@/app/services/auth';
import { FormInput } from '@/components';
import { Modal } from '@/components/auth';
import { useHandleError, useHandleSuccess } from '@/hooks';
import { Button, Link, Stack, Text, UseDisclosureProps } from '@chakra-ui/react';
import { Form, FormikProvider, useFormik } from 'formik';
import { ForgotPasswordFormValues, ForgotPasswordSchema } from './schema/auth.schema';
import { setForgotEmail } from '@/app/slice/authSlice';
import { useAppDispatch } from '@/app/hooks';

type ForgotModalProps = UseDisclosureProps & {
  onLogin?: () => void;
};
export const ForgotPasswordModal = ({
  isOpen = false,
  onClose = () => null,
  onLogin
}: ForgotModalProps) => {
  const [forgotPassword] = useForgotPasswordMutation();

  const handleError = useHandleError();
  const handleSuccess = useHandleSuccess();

  const dispatch = useAppDispatch();

  const formik = useFormik<ForgotPasswordFormValues>({
    initialValues: {
      email: ''
    },
    onSubmit: async (values) => {
      try {
        const response = await forgotPassword(values).unwrap();
        const status = response.status;

        handleSuccess('', response.message, status);
        if (status) {
          onClose();
          dispatch(setForgotEmail(values.email));
        }
      } catch (err) {
        handleError(err);
      }
    },
    validationSchema: ForgotPasswordSchema
  });
  const { values, errors, touched, handleChange, isSubmitting } = formik;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalHeader={<Text textStyle='body'>Forgot Password</Text>}
    >
      <FormikProvider value={formik}>
        <Form>
          <FormInput
            label='Email Address'
            placeholder='johndoe@email.com'
            id='email'
            name='email'
            type='email'
            value={values.email}
            errorMessage={errors.email}
            onChange={handleChange}
            touchedField={touched.email}
          />
          <Link href='#' textStyle='body' fontWeight={400} mt={2}>
            Reset Password with phone number
          </Link>
          <Stack spacing={3} my={3}>
            <Button type='submit' isDisabled={isSubmitting}>
              Reset Password
            </Button>
            <Button variant='text' onClick={onLogin}>
              Login to your account
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
    </Modal>
  );
};
