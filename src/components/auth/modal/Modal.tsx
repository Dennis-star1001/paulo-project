import React, { ReactNode } from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Flex,
  Image,
  Stack,
  Text,
  ModalBodyProps as ChakraModalBodyProps,
  UseDisclosureProps,
  UseModalProps
} from '@chakra-ui/react';
import Logo from '@/assets/logo.svg';

interface ModalProps extends UseModalProps {
  // modal: UseModalProps;
  modalHeader: ReactNode;
  children: ReactNode;
}
export const Modal = ({ children, modalHeader, ...rest }: ModalProps) => {
  return (
    <ChakraModal size={['sm', 'lg']} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign='center'>
          <Flex justifyContent='center'>
            <Image src={Logo} />
          </Flex>

          {modalHeader}
        </ModalHeader>
        <ModalBody px={[0, '22px']}>{children}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
