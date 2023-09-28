import { useToast } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ErrorData {
  [key: string]: string[];
}

export const ErrorHandler = ({ errors }: { errors: ErrorData }) => {
  const errorMessages = getErrors(errors);

  if (errorMessages.length === 0) {
    return null;
  }

  return <ul>{errorMessages?.map((message, index) => <li key={index}>{message}</li>)}</ul>;
};

export const getErrors = (errors: ErrorData): string[] => {
  const messages: string[] = [];

  Object.keys(errors).forEach((key) => {
    const keyErrors = errors[key];
    keyErrors.forEach((error) => {
      messages.push(error);
    });
  });

  return messages;
};

export const useHandleSuccess = () => {
  const toast = useToast();

  const handleSuccess = (title: string | null = 'Success', response: string): void => {
    toast({
      title,
      description: response,
      status: 'success',
      duration: 4000,
      position: 'top-right',
      isClosable: true
    });
  };

  return handleSuccess;
};

export const useHandleError = () => {
  const toast = useToast();

  const handleErrors = (
    error?: any,
    defaultErrorMessage?: ReactNode,
    title = 'An error occurred'
  ): void => {
    let errorMessage: ReactNode;

    if (error?.data?.errors) {
      errorMessage = <ErrorHandler errors={error.data?.errors} />;
    } else {
      errorMessage = error?.data?.message || defaultErrorMessage || error.message;
    }

    toast({
      title,
      description: errorMessage,
      status: 'error',
      duration: 4000,
      position: 'top-right',
      isClosable: true
    });
  };

  return handleErrors;
};
