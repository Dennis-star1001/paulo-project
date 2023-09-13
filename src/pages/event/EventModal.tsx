import { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
}

const EventModal: FC<EventModalProps> = ({ isOpen, onClose, eventTitle }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{eventTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Add content related to the event here */}
          {/* For example, you can display event details or a form */}
          <p>Event details go here.</p>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          {/* You can add additional buttons or actions here */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;
