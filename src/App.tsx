import { useDisclosure } from '@chakra-ui/react';
import { SignupModal } from './features/auth';

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SignupModal />
    </>
  );
};

export default App;
