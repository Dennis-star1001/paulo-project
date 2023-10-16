import { useResetPasswordMutation } from '@/app/services/auth';
import { PasswordInput } from '@/components';
import { Modal } from '@/components/auth';
import { Button, Stack, Text, UseDisclosureProps } from '@chakra-ui/react';
import { Form, FormikProvider, useFormik } from 'formik';
import { ResetPasswordFormValues, ResetPasswordSchema } from './schema/auth.schema';
import { useHandleError, useHandleSuccess } from '@/hooks';
import { useAppSelector } from '@/app/hooks';

type NewPasswordModalProps = UseDisclosureProps;
export const NewPasswordModal = ({
  isOpen = false,
  onClose = () => null
}: NewPasswordModalProps) => {
  const [changePassword] = useResetPasswordMutation();

  const email = useAppSelector((state) => state.auth?.forgotEmail);
  const token = useAppSelector((state) => state.auth?.forgotEmailToken);

  const handleError = useHandleError();
  const handleSuccess = useHandleSuccess();

  const formik = useFormik<ResetPasswordFormValues>({
    initialValues: {
      email: '',
      password: '',
      password_confirmation: '',
      token: ''
    },
    onSubmit: async (values) => {
      try {
        const response = await changePassword({
          email,
          password: values.password,
          password_confirmation: values.password_confirmation,
          token
        }).unwrap();
        const status = response?.status;

        handleSuccess('', response?.message, status);
        if (status) {
          onClose();
        }
      } catch (err) {
        handleError(err);
      }
    },
    validationSchema: ResetPasswordSchema
  });
  const { values, errors, touched, handleChange, isSubmitting } = formik;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalHeader={<Text textStyle='body'> New Password </Text>}
    >
      <FormikProvider value={formik}>
        <Form>
          <Text color='primary' textStyle='body-regular' fontWeight={400} mt={2}>
            Enter a new password that you can remember to access your account
          </Text>
          <PasswordInput
            id='password'
            name='password'
            label='Create password'
            value={values.password}
            errorMessage={errors.password}
            onChange={handleChange}
            touchedField={touched.password}
          />
          <PasswordInput
            id='confirm-password'
            name='password_confirmation'
            label='Confirm password'
            value={values.password_confirmation}
            errorMessage={errors.password_confirmation}
            onChange={handleChange}
            touchedField={touched.password_confirmation}
          />
          <Stack mt={7}>
            <Button type='submit' isDisabled={isSubmitting}>
              Reset Password
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
    </Modal>
  );
};
