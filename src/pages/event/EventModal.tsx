import {
  Box,
  Text,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
}

type Category = {
  name: string;
  link: string;
};

const eventCategories: Category[] = [
  { name: 'Online Events', link: '/online-events' },
  { name: 'Free Events', link: '/free-events' },
  { name: 'Paid Events', link: '/paid-events' },
  { name: 'Upcoming Events', link: '/upcoming-events' },
  { name: 'Events near you', link: '/events-near-you' },
  { name: 'Training', link: '/training' },
  { name: 'Seminars', link: '/seminars' },
  { name: 'Vlogs', link: '/vlogs' },
  { name: 'Festivals', link: '/festivals' },
  { name: 'Owanbe', link: '/owanbe' },
  { name: 'Music and Comedy', link: '/music-and-comedy' },
  { name: 'Arts & Crafts', link: '/arts-and-crafts' }
];

// eslint-disable-next-line react/prop-types
const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, eventTitle }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='md'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{eventTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {eventCategories.map((category, index) => (
            <Box key={index}>
              <Link href={category.link}>
                <Text>{category.name}</Text>
              </Link>
            </Box>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;
