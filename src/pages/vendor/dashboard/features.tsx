import { Box, Text, Flex, Image, Button, Link } from '@chakra-ui/react';
import flier from '../../../assets/FLIER 1.png';
import { path } from '@/routes/path';

interface Stat {
  label: string;
  value: string;
}

interface Event {
  image: string;
  status: string;
  eventName: string;
  online: string;
  price: string;
  ticketsSold: string;
  moreLink: string;
}

interface Donation {
  image: string;
  status: string;
  eventName: string;
  price: string;
  ticketsSold: string;
  moreLink: string;
}

type CardType =
  | {
      type: 'EVENTS';
      title: string;
      viewAllLink: string;
      stats: Stat[];
      events: Event[];
    }
  | {
      type: 'SERVICES';
      title: string;
      viewAllLink: string;
      stats: Stat[];
      events: Event[];
    }
  | {
      type: 'DONATIONS';
      title: string;
      viewAllLink: string;
      stats: Stat[];
      donations: Donation[];
    };

const Features = () => {
  const cards: CardType[] = [
    {
      type: 'EVENTS',
      title: 'EVENTS',
      viewAllLink: path.VENDOR_EVENTS,
      stats: [
        { label: 'Event', value: '15' },
        { label: 'Upcoming', value: '15' },
        { label: 'Expired', value: '15' }
      ],
      events: [
        {
          image: flier,
          status: 'Completed',
          eventName: 'Event Name',
          online: 'Online',
          price: '$1,200',
          ticketsSold: '200/400 Tickets sold',
          moreLink: '#'
        },
        {
          image: flier,
          status: 'Completed',
          eventName: 'Event Name',
          online: 'Online',
          price: '$1,200',
          ticketsSold: '250/400 Tickets sold',
          moreLink: '#'
        }
      ]
    },
    {
      type: 'SERVICES',
      title: 'SERVICES',
      viewAllLink: path.VENDOR_SERVICES,
      stats: [
        { label: 'Event', value: '15' },
        { label: 'Active', value: '7' },
        { label: 'Completed', value: '15' }
      ],
      events: [
        {
          image: flier,
          status: 'Active',
          eventName: 'Service ',
          online: 'Available slot',
          price: '$1,200',
          ticketsSold: '4 sub services',
          moreLink: '#'
        },
        {
          image: flier,
          status: 'Completed',
          eventName: 'Service ',
          online: 'Available slot',
          price: '$1,200',
          ticketsSold: '4 sub services',
          moreLink: '#'
        }
      ]
    },
    {
      type: 'DONATIONS',
      title: 'DONATIONS',
      viewAllLink: path.VENDOR_DONATION,
      stats: [
        { label: 'Event', value: '15' },
        { label: 'Active', value: '4' },
        { label: 'Expired', value: '11' }
      ],
      donations: [
        {
          image: flier,
          status: 'Active',
          eventName: 'Donation name',
          price: '$1,200/ $5,000',
          ticketsSold: '6 Donations',
          moreLink: '#'
        },
        {
          image: flier,
          status: 'Expired',
          eventName: 'Donation name',
          price: '$800/ $5,000',
          ticketsSold: '4 Donations',
          moreLink: '#'
        }
      ]
    }
  ];

  return (
    <>
      <Flex flexWrap='wrap' justifyContent='space-between' mt='5'>
        {cards.map((card, cardIndex) => (
          <Box
            key={`card_${cardIndex}`}
            flex='1'
            flexDirection='column'
            borderWidth='1px'
            borderRadius='md'
            p='4'
            m='2'
            borderTopWidth='5px'
            borderTopColor='#00B0F3'
            marginBottom='3'
            width={{ base: '100%', md: 'calc(33.33% - 16px)' }}
          >
            <Flex flex='1' flexDirection='row' justifyContent='space-between' alignItems='center'>
              <Text fontFamily='Lato' fontWeight='600' fontSize='24px'>
                {card.title}
              </Text>
              <Text fontFamily='Lato' fontWeight='600' fontSize='12px' color='#00B0F3'>
                <Link href={card.viewAllLink}>View all</Link>
              </Text>
            </Flex>

            {card.stats && (
              <Flex
                flex='1'
                flexDirection='row'
                bg='#F1F5F9'
                p='4'
                borderRadius='10'
                justifyContent='space-between'
                mt='5'
              >
                {card.stats.map((stat, statIndex) => (
                  <Flex key={`stat_${statIndex}`} flexDirection='column' alignItems='center'>
                    <Box>
                      <Text fontFamily='Lato' fontWeight='600' fontSize='24px'>
                        {stat.value}
                      </Text>
                      <Text fontFamily='Lato' fontWeight='500' fontSize='12px'>
                        {stat.label}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Flex>
            )}

            <Flex flex='1' flexDirection='column' display={{ base: 'none', md: 'flex' }}>
              {card.type === 'EVENTS' && card.events && (
                <>
                  {card.events.map((event, eventIndex) => (
                    <Flex
                      key={`event_${eventIndex}`}
                      mt='7'
                      flexDirection='row'
                      justifyContent='space-between'
                      alignItems='center'
                    >
                      <Box display='flex' flexDirection='row' alignItems='center' gap='2'>
                        <Flex>
                          <Image src={event.image} />
                        </Flex>
                        <Flex flexDirection='column'>
                          <Text
                            fontFamily='Lato'
                            fontWeight='600'
                            fontSize='9px'
                            width='fit-content'
                            p='1'
                            borderRadius='10'
                            bg='#6EE7B7'
                          >
                            {event.status}
                          </Text>
                          <Text fontFamily='Lato' fontWeight='600' fontSize='12px' color='#00B0F3'>
                            {event.eventName}
                          </Text>
                          <Text fontFamily='Lato' fontWeight='500' fontSize='12px'>
                            {event.online}
                          </Text>
                        </Flex>
                      </Box>
                      <Box mt='3'>
                        <Flex alignItems='flex-end' flexDirection='column'>
                          <Text fontFamily='Lato' fontWeight='600' fontSize='9px'>
                            ...
                          </Text>
                          <Text fontFamily='Lato' fontWeight='600' fontSize='12px'>
                            {event.price}
                          </Text>
                          <Text fontFamily='Lato' fontWeight='500' fontSize='10px'>
                            {event.ticketsSold}
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  ))}
                </>
              )}

              {card.type === 'SERVICES' && card.events && (
                <>
                  {card.events.map((event, eventIndex) => (
                    <Flex
                      key={`service_${eventIndex}`}
                      mt='7'
                      flexDirection='row'
                      justifyContent='space-between'
                      alignItems='center'
                    >
                      <Box display='flex' flexDirection='row' alignItems='center' gap='2'>
                        <Flex>
                          <Image src={event.image} />
                        </Flex>
                        <Flex flexDirection='column'>
                          <Text fontFamily='Lato' fontWeight='600' fontSize='12px' color='#00B0F3'>
                            {event.eventName}
                          </Text>
                          <Text fontFamily='Lato' fontWeight='500' fontSize='12px'>
                            {event.online}
                          </Text>
                        </Flex>
                      </Box>
                      <Box mt='3'>
                        <Flex alignItems='flex-end' flexDirection='column'>
                          <Text fontFamily='Lato' fontWeight='600' fontSize='9px'>
                            ...
                          </Text>
                          <Text fontFamily='Lato' fontWeight='600' fontSize='12px'>
                            {event.price}
                          </Text>
                          <Text fontFamily='Lato' fontWeight='500' fontSize='10px'>
                            {event.ticketsSold}
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  ))}
                </>
              )}

              {card.type === 'DONATIONS' && card.donations && (
                <>
                  {card.donations.map((donation, donationIndex) => (
                    <Flex
                      key={`donation_${donationIndex}`}
                      mt='7'
                      flexDirection='row'
                      justifyContent='space-between'
                      alignItems='center'
                    >
                      <Box display='flex' flexDirection='row' alignItems='center' gap='2'>
                        <Flex>
                          <Image src={donation.image} />
                        </Flex>
                        <Flex flexDirection='column'>
                          <Text fontFamily='Lato' fontWeight='600' fontSize='12px' color='#00B0F3'>
                            {donation.eventName}
                          </Text>
                        </Flex>
                      </Box>
                      <Box>
                        <Flex alignItems='flex-end' flexDirection='column'>
                          <Text fontFamily='Lato' fontWeight='600' fontSize='9px'>
                            ...
                          </Text>
                          <Text fontFamily='Lato' fontWeight='600' fontSize='10px'>
                            {donation.price}
                          </Text>
                          <Text fontFamily='Lato' fontWeight='500' fontSize='10px'>
                            {donation.ticketsSold}
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  ))}
                </>
              )}
            </Flex>

            <Link href={card.viewAllLink}>
              <Button mt='5'>View {card.title}</Button>
            </Link>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default Features;
