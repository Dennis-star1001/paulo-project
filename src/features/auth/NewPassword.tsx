import { FormInput } from '@/components';
import { Modal } from '@/components/auth';
import { Button, Link, Stack, Text, UseDisclosureProps } from '@chakra-ui/react';

export const NewPasswordModal = ({ isOpen = true, onClose = () => null }: UseDisclosureProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalHeader={<Text textStyle='body'> New Password </Text>}
    >
      <Link href='#' textStyle='body' fontWeight={400} mt={2}>
        Enter a new password that you can remember to access your account
      </Link>
      <FormInput placeholder='Password' type='password'/>
      <Stack mt={7}>
        <Button>Reset Password</Button>
      </Stack>
    </Modal>
  );
};
