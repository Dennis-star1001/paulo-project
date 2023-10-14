import AfterLoginHeader from "../../../components/Header/AfterLoginHeader"
import { 
	Container, 
	Text, 
	Flex, 
	Box, 
	Heading,
	Button,
	Grid,
	GridItem,
	Divider,
	VStack,
	HStack,
	Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
	
} from '@chakra-ui/react'

const ArtistAnalytics = () =>  {
	return(
		<>
			<AfterLoginHeader/>
			<Box bg='neutral.100' p={[4, '100px']}>
			  		<Container maxW="1000px" p="0">
			  			<Flex justifyContent="space-between">
			  				<Heading color="primary" fontWeight="600" fontSize="1.5rem">Analytics</Heading>

			  				<Button variant="solid" colorScheme='red'>Export tax filling/returns</Button>
			  			</Flex>

			  			<Box px="10px" py="30px" bg="white" mt="30px">
			  				<Grid
				  				templateColumns={['repeat(2, 1fr)','repeat(5, 1fr)', 'repeat(7, 1fr)']}
					            columnGap={[4, 7]}
					            rowGap={[5, '20px']}
			  				>
			  					<GridItem>
			  						<VStack spacing={0.5} textAlign="center">
			  							<Text as='b' fontSize="0.8rem">Total Earnings</Text>
			  							<Text as="span" fontSize="0.7rem">(Excluding Tax)</Text>
			  							<Text color="red">$25,642</Text>
			  						</VStack>
			  					</GridItem>

			  					<GridItem>
			  						<VStack spacing={0.5} textAlign="center">
			  							<Text as='b' fontSize="0.85rem">Total Songs</Text>
			  							<Text as="span" fontSize="0.9rem" fontWeight="600">36</Text>
			  						</VStack>
			  					</GridItem>


			  					<GridItem>
			  						<VStack spacing={0.5} textAlign="center">
			  							<Text as='b' fontSize="0.85rem">Rejected Orders</Text>
			  							<Text as="span" fontSize="0.9rem" fontWeight="600">36</Text>
			  						</VStack>
			  					</GridItem>


			  					<GridItem>
			  						<VStack spacing={0.5} textAlign="center">
			  							<Text as='b' fontSize="0.85rem">Active Orders</Text>
			  							<Text as="span" fontSize="0.9rem" fontWeight="600">36</Text>
			  						</VStack>
			  					</GridItem>
			  					


			  					<GridItem>
			  						<VStack spacing={0.5} textAlign="center">
			  							<Text as='b' fontSize="0.85rem">2 Mins Tracks</Text>
			  							<Text as="span" fontSize="0.9rem" fontWeight="600">36</Text>
			  						</VStack>
			  					</GridItem>


			  					<GridItem>
			  						<VStack spacing={0.5} textAlign="center">
			  							<Text as='b' fontSize="0.85rem">3 Mins Tracks</Text>
			  							<Text as="span" fontSize="0.9rem" fontWeight="600">36</Text>
			  						</VStack>
			  					</GridItem>


			  					<GridItem>
			  						<VStack spacing={0.5} textAlign="center">
			  							<Text as='b' fontSize="0.85rem">Demo Tracks</Text>
			  							<Text as="span" fontSize="0.9rem" fontWeight="600">36</Text>
			  						</VStack>
			  					</GridItem>
			  				</Grid>


			  				<Box mt='50px'>
			  					<Heading color="primary" fontSize="1.1rem">ACTIVE ORDERS</Heading>

			  					<TableContainer mt="10px">
  									<Table variant='simple' size='sm'>
  										 <Thead>
									      <Tr>
									        <Th>CLIENT'S NAME</Th>
									        <Th>GENRE</Th>
									        <Th>SONG LENGTH</Th>
									        <Th>DUE DATE</Th>
									        <Th>PAYMENT</Th>
									        <Th>ACTION</Th>
									      </Tr>
									    </Thead>
									    <Tbody>
									    	<Tr>
									    		<Td>Chinwe Adaeze</Td>
									    		<Td>Afrobeats, HighLife</Td>
									    		<Td>Demo</Td>
									    		<Td>Wednesday 12th, May 2022 | 6:00pm</Td>
									    		<Td>$54</Td>
									    		<Td>
									    			<HStack>
									    				<Button variant="solid" colorScheme="green">Accept</Button>
									    				<Button variant="solid" colorScheme="red">Reject</Button>
									    			</HStack>
									    		</Td>
									    	</Tr>

									    	<Tr>
									    		<Td>Chinwe Adaeze</Td>
									    		<Td>Afrobeats, HighLife</Td>
									    		<Td>Demo</Td>
									    		<Td>Wednesday 12th, May 2022 | 6:00pm</Td>
									    		<Td>$54</Td>
									    		<Td>
									    			<Button>Accept</Button>
									    		</Td>
									    	</Tr>

									    	<Tr>
									    		<Td>Chinwe Adaeze</Td>
									    		<Td>Afrobeats, HighLife</Td>
									    		<Td>Demo</Td>
									    		<Td>Wednesday 12th, May 2022 | 6:00pm</Td>
									    		<Td>$54</Td>
									    		<Td>
									    			<Button>Accept</Button>
									    		</Td>
									    	</Tr>

									    	<Tr>
									    		<Td>Chinwe Adaeze</Td>
									    		<Td>Afrobeats, HighLife</Td>
									    		<Td>Demo</Td>
									    		<Td>Wednesday 12th, May 2022 | 6:00pm</Td>
									    		<Td>$54</Td>
									    		<Td>
									    			<Button>Accept</Button>
									    		</Td>
									    	</Tr>
									    </Tbody>
  									</Table>
  								</TableContainer>
			  				</Box>
			  			</Box>
			  		</Container>
			</Box>

		</>
	)
}

export default ArtistAnalytics