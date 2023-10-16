import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useVerifyPasswordCodeMutation } from '@/app/services/auth';
import { setForgotEmailToken } from '@/app/slice/authSlice';
import { Modal } from '@/components/auth';
import { useHandleError, useHandleSuccess } from '@/hooks';
import {
  Button,
  HStack,
  PinInput,
  PinInputField,
  Stack,
  Text,
  UseDisclosureProps
} from '@chakra-ui/react';
import { Form, FormikProvider, useFormik } from 'formik';
import { VerifyCodeFormValues, VerifyCodeSchema } from './schema/auth.schema';

type EmailVerificationModalProps = UseDisclosureProps & {
  onLogin?: () => void;
};
export const EmailVerificationModal = ({
  isOpen = true,
  onClose = () => null,
  onLogin = () => null
}: EmailVerificationModalProps) => {
  const [verifyCode] = useVerifyPasswordCodeMutation();

  const handleError = useHandleError();
  const handleSuccess = useHandleSuccess();

  const dispatch = useAppDispatch();

  const email = useAppSelector((state) => state.auth?.forgotEmail);

  const formik = useFormik<VerifyCodeFormValues>({
    initialValues: {
      email: '',
      token: ''
    },
    onSubmit: async (values) => {
      try {
        const response = await verifyCode({
          email,
          token: values.token
        }).unwrap();
        const status = response.status;

        handleSuccess('', response.message, status);
        if (status) {
          onClose();
          dispatch(setForgotEmailToken(values.token));
        }
      } catch (err) {
        handleError(err);
      }
    },
    validationSchema: VerifyCodeSchema
  });
  const { values, isSubmitting, setFieldValue } = formik;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalHeader={<Text textStyle='body'>Email Verification</Text>}
    >
      <Text color='primary' textStyle='body' fontWeight={400}>
        Enter the email that was sent to your email address to help us help you recover your
        password
      </Text>

      <FormikProvider value={formik}>
        <Form>
          <HStack
            sx={{
              '.chakra-pin-input': {
                bg: '#E6F2F7',
                border: '1px solid !important',
                borderColor: '#fff !important',
                borderRadius: '6px',
                _placeholder: { fontSize: '26px', color: 'gray.300' },
                h: '64px',
                w: 'full'
              }
            }}
          >
            <PinInput
              type='alphanumeric'
              mask
              placeholder=''
              variant='flushed'
              focusBorderColor='transparent'
              id='token'
              value={values.token}
              onChange={(_code) => setFieldValue('token', _code)}
            >
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <Stack spacing={3} my={3}>
            <Button isDisabled={isSubmitting} type='submit'>
              Reset Password
            </Button>
            <Button onClick={onLogin} variant='text'>
              Login to your account
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
    </Modal>
  );
};
