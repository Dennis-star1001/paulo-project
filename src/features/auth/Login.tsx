import { useLoginMutation } from '@/app/services/auth';
import { FormInput, PasswordInput } from '@/components';
import { AuthButton, Modal } from '@/components/auth';
import { useHandleError, useHandleSuccess } from '@/hooks';
import { path } from '@/routes/path';
import { Button, Checkbox, Divider, Stack, Text, UseDisclosureProps } from '@chakra-ui/react';
import { Form, FormikProvider, useFormik } from 'formik';
import { LoginFormValues, LoginSchema } from './schema/auth.schema';

type LoginModalProps = UseDisclosureProps & {
  onRegister?: () => void;
  onForgotPassword?: () => void;
};

export const LoginModal = ({
  isOpen = true,
  onClose = () => null,
  onRegister,
  onForgotPassword
}: LoginModalProps) => {
  const [login] = useLoginMutation();

  const handleError = useHandleError();
  const handleSuccess = useHandleSuccess();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      try {
        const response = await login(values).unwrap();
        const status = response.status;

        handleSuccess('', response.message, status);
        if (status) {
          onClose();

          location.href = path.HOME;
        }
      } catch (err) {
        handleError(err);
      }
    },
    validationSchema: LoginSchema
  });
  const { values, errors, touched, handleChange, isSubmitting } = formik;

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
        <FormikProvider value={formik}>
          <Form>
            <Stack>
              <AuthButton />
              <Divider my={8} />

              <Stack spacing={4}>
                <FormInput
                  label='Email Address'
                  id='email'
                  name='email'
                  value={values.email}
                  errorMessage={errors.email}
                  onChange={handleChange}
                  touchedField={touched.email}
                />
                <PasswordInput
                  label='Password'
                  id='password'
                  name='password'
                  value={values.password}
                  errorMessage={errors.password}
                  onChange={handleChange}
                  touchedField={touched.password}
                />
                <Stack spacing={2}>
                  <Checkbox>
                    <Text
                      color='primary'
                      as='span'
                      cursor='pointer'
                      textStyle='body'
                      onClick={onForgotPassword}
                    >
                      Forget Password?
                    </Text>
                  </Checkbox>
                </Stack>
              </Stack>

              <Stack mt='77px'>
                <Button isDisabled={isSubmitting} type='submit'>
                  Login
                </Button>
                <Stack mx='auto' my={2}>
                  <Text fontSize='14px'>
                    Don&apos;t have an account?{' '}
                    <Text as='span' color='primary' cursor='pointer' onClick={onRegister}>
                      Create account
                    </Text>
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Form>
        </FormikProvider>
      </Modal>
    </>
  );
};
