import AfterLoginHeader from '../../../components/Header/AfterLoginHeader';
import {
  Container,
  Text,
  Flex,
  Box,
  Image,
  Stack,
  Avatar,
  Heading,
  HStack,
  Button,
  Badge,
  Grid,
  GridItem,
  Progress
} from '@chakra-ui/react';
import Breezy from '../../../assets/Breezey.png';
import { TriangleUpIcon } from '@chakra-ui/icons';
import Slider from 'react-slick';
import { AiFillStar } from 'react-icons/ai';

const Artist = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    controls: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <AfterLoginHeader />
      <Box bg='neutral.100' pb='100px'>
        <Container maxW='1000px' p='0'>
          <Flex
            gap={{ md: '15px' }}
            alignItems='flex-start'
            direction={{ base: 'column', md: 'row' }}
          >
            <Box width={{ base: '100%', md: '74%', xl: '74%' }}>
              <Image src={Breezy} w='100%' h='350px' />

              <Box px={{ base: '12px', md: '0px' }}>
                <Flex flexDir={['column', 'row']} justifyContent='space-between'>
                  <Flex gap={[2, 2]} mt={['26px', 0]}>
                    <Avatar
                      src='data:image/jpeg;base64,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'
                      w='100px'
                      h='100px'
                      pos='relative'
                      top='-50px'
                      ml='20px'
                    />
                    <Stack spacing={1} mt='20px'>
                      <Text textStyle={['body-regular', 'p']}>Stage Name</Text>
                      <Heading as='h5' size='md' m='0'>
                        B.Boy ATL
                      </Heading>
                      <HStack spacing='40px'>
                        <Text as='p' fontSize='0.9rem'>
                          <Text color='primary' as='b'>
                            20
                          </Text>{' '}
                          Following
                        </Text>

                        <Text as='p' fontSize='0.9rem'>
                          <Text as='b' color='primary'>
                            56
                          </Text>{' '}
                          Following
                        </Text>
                      </HStack>
                    </Stack>
                  </Flex>

                  <Flex mt={[10, 8]} flexDir='column' alignItems='center'>
                    <Text color='red' as='span' textAlign='center'>
                      Platinum Subscription
                    </Text>
                    <HStack mt='10px'>
                      <Button as="a" href="artist-edit-profile" variant='outline' size='md'>
                        Edit Profile
                      </Button>
                      <Button as="a" href="artist-add-song" size='md'>Add Sample Song</Button>
                    </HStack>
                  </Flex>
                </Flex>

                <Box mt='20px' px='10px'>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>

                  <HStack mt='20px'>
                    <Badge bg='white' color='primary' size='sm' py='5px' px='8px'>
                      RnB
                    </Badge>
                    <Badge bg='white' color='primary' size='sm' py='5px' px='8px'>
                      Hip Hop
                    </Badge>
                    <Badge bg='white' color='primary' size='sm' py='5px' px='8px'>
                      Afro Fusion
                    </Badge>
                  </HStack>
                </Box>

                <Box bg='white' py='15px' px='20px' my='40px'>
                  <Text as='p'>Pricing</Text>

                  <Grid
                    templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                    columnGap={[4, 7]}
                    rowGap={[5, '30px']}
                    mt='30px'
                  >
                    <GridItem>
                      <Box>
                        <Heading as='h5' size='sm'>
                          2 Minutes Tracks - $50
                        </Heading>

                        <Text
                          as='p'
                          fontSize='0.9rem'
                          mt='10px'
                          textAlign='justify'
                          color='gray.400'
                        >
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                      </Box>
                    </GridItem>

                    <GridItem>
                      <Box>
                        <Heading as='h5' size='sm'>
                          2 Minutes Tracks - $50
                        </Heading>

                        <Text
                          as='p'
                          fontSize='0.9rem'
                          mt='10px'
                          textAlign='justify'
                          color='gray.400'
                        >
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                      </Box>
                    </GridItem>

                    <GridItem>
                      <Box>
                        <Heading as='h5' size='sm'>
                          2 Minutes Tracks - $50
                        </Heading>

                        <Text
                          as='p'
                          fontSize='0.9rem'
                          mt='10px'
                          textAlign='justify'
                          color='gray.400'
                        >
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                      </Box>
                    </GridItem>
                  </Grid>
                </Box>

                <Box>
                  <Text as='p'>Sample Songs</Text>

                  <Grid
                    templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                    columnGap={[4, 7]}
                    rowGap={[5, '20px']}
                    mt='5px'
                  >
                    <GridItem bg='white' p='10px' pr='25px'>
                      <Flex gap='20px'>
                        <Box>
                          <Avatar
                            src='data:image/jpeg;base64,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'
                            w='50px'
                            h='50px'
                          />
                        </Box>
                        <Box>
                          <Text as='p' fontSize='0.9rem' fontWeight='300'>
                            Thanks ft J.Cole
                          </Text>
                          <HStack>
                            <Badge
                              bg='gray.200'
                              color='primary'
                              fontWeight='300'
                              size='sm'
                              px='5px'
                            >
                              RnB
                            </Badge>
                            <Badge
                              bg='gray.200'
                              color='primary'
                              fontWeight='300'
                              size='sm'
                              px='5px'
                            >
                              Hip Hop
                            </Badge>
                          </HStack>
                        </Box>
                      </Flex>

                      <Text my='18px' ml='15px'>
                        Let It Down
                      </Text>
                      <Flex alignItems='center'>
                        <TriangleUpIcon color='primary' transform='rotate(90deg)' />
                        <Progress
                          bg='gray.200'
                          color='primary'
                          h='4px'
                          flexGrow='2'
                          size='sm'
                          value={20}
                        />
                      </Flex>
                      <Flex justifyContent='space-between' px='15px'>
                        <Text as='small'>1:15</Text>
                        <Text as='small'>2:15</Text>
                      </Flex>

                      <Text as='p' fontSize='0.8rem' mt='15px'>
                        1,346 Plays
                      </Text>
                    </GridItem>

                    <GridItem bg='white' p='10px' pr='25px'>
                      <Flex gap='20px'>
                        <Box>
                          <Avatar
                            src='data:image/jpeg;base64,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'
                            w='50px'
                            h='50px'
                          />
                        </Box>
                        <Box>
                          <Text as='p' fontSize='0.9rem' fontWeight='300'>
                            Thanks ft J.Cole
                          </Text>
                          <HStack>
                            <Badge
                              bg='gray.200'
                              color='primary'
                              fontWeight='300'
                              size='sm'
                              px='5px'
                            >
                              RnB
                            </Badge>
                            <Badge
                              bg='gray.200'
                              color='primary'
                              fontWeight='300'
                              size='sm'
                              px='5px'
                            >
                              Hip Hop
                            </Badge>
                          </HStack>
                        </Box>
                      </Flex>

                      <Text my='18px' ml='15px'>
                        Let It Down
                      </Text>
                      <Flex alignItems='center'>
                        <TriangleUpIcon color='primary' transform='rotate(90deg)' />
                        <Progress
                          bg='gray.200'
                          color='primary'
                          h='4px'
                          flexGrow='2'
                          size='sm'
                          value={20}
                        />
                      </Flex>
                      <Flex justifyContent='space-between' px='15px'>
                        <Text as='small'>1:15</Text>
                        <Text as='small'>2:15</Text>
                      </Flex>

                      <Text as='p' fontSize='0.8rem' mt='15px'>
                        1,346 Plays
                      </Text>
                    </GridItem>

                    <GridItem bg='white' p='10px' pr='25px'>
                      <Flex gap='20px'>
                        <Box>
                          <Avatar
                            src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgUFhYYFhgaGBgZHBgYGhkeGB8aGh8cHBwaHBYhIS4lHCErHxwYJjgmLDQxNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzQrJCs0NDQ2NjQxNDQ0NDQ0NjE2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND00NjQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAQIDBAUGB//EADoQAAEDAgQDBgUCBAYDAAAAAAEAAhEDIQQSMUEFUWEGInGBkaETMrHR8ELBBxRSYhUjgpKi4RYzcv/EABkBAQEBAQEBAAAAAAAAAAAAAAACAQMEBf/EACERAQEBAQADAQADAQEBAAAAAAABAhESITEDIkFhMlEE/9oADAMBAAIRAxEAPwD05ERAREQEREBSFCkICIiAiIgIqalQNBc4gACSTYAdSuT4p20oiWMzySG5gIJBm7JMnTVZdSNmbfjoeIcSp0RL3tB/pkZvJu612H7TU3y4GWgw4EQ8DdwH6gN/adF5jxriIqvdkz5P63lp2uNJMmTY29JxMMH/ADd0R8s6+ZFyTyhR5VczHreI7U4ZoJDw6NhOqwcN22oOJDmPZE37pHsZ8oXmf8s9r4cZdNyTeToL+A9Fdztbm6uJHMH9QjoY9FnlVTEehP7UNcdcrZAi2Yk/QR566LfcM4i2rMdI9BI8RI9QvHquOaQYsQGieoET9fVbLhXHXseHS49A6OQ8Dok1S4nPT2CUXP8ABuNtqMYA7M5xIk67kyOgH0W+Y6QDzAK6S9crOKkRFrBERBCKUQQilQgIiICIiAiIgIiICIiAiIgKVClAREQFTVqNa0ucQ1oEkkwABuSqlpO09YsYHahuZ8GMpeIDA6dsxzf6FlvI2Ttcx2x7Rtc8UgHlgAJbdpcToXCJAA2Ma3XD46CTUyuaY0zbbQIW0flc45jnOaSb94m5mI3nxVx9FrjmcABrJ7x6Na3rsFxt7eu8nJxgcFw7Gt+LVg5vlmbN2Mayfp5rN+I17gWuyxpNpj6WHssCu9x7gbq7ujW2gE6EyTPgVcpMaAWkNa/d+YiPEzA3+yyti/xDFsghwGYWJgT4z6rnsRiRYt08byJj904pgqjHXuNQ5rmuB8NFrvhvNwJGkk2G22sfZVIzVbF9cd6YJ8beYt6qaFYjcGOTvr0VtmDGQHmATMzqdb229fNMFTggHSdpze9x5JYyVucHxZ1IEDu5hlmJMEiY0109V6j2e7UU8ScjWvDxqMpLQAJBL9BPJeVPw7SBDo6GZ6wdvNbHhPEThzDpLbyJIJb/AE22NpPK1kzeGs9ewUaufvD5dAefUdOXNXlr+C8QbWptcIBgd3lAGy2C6xxoiItYIiIChSiCEREBERAREQEREBERAREQSEREBERAXG/xJxBZQYNi+8dBb6rslwX8V6jm0aWmXM+R1y28ozDzU6+Kz9cdg3aDcwJ5TqfT3Vuri2tJBEsExFiIMHzM+5Wtw2LlzjN4kecfnkrWLJAvub+cfYlcndt24yTIZENJbz0+yopV4N41N+s6+K1dXES8Fh0ueWmn1SvUl0DUGLdY085CyN1/jZYmiXNzB5dvBj0AFlVRwTXsa2IhuYjeZcSJ56LEwGKyZnuM2iPfysZ5rLxVT4ZGU/PmnlYTbonW+Fs6rqYDM5gNhAaB0A1PoLq7W4Q1vfBkRpbcSPt5eutfxRxiNQNvzqrT69QCc1wRY2MeGhF06znpmscARuPaeRVioWl+vL85LEGMIcbAWJJjl6hYv82S7No63htstkTbx3XZbjhoVflc9ru7kE2B1cDGthteV6vSeHNDhoRK8P4IR/Msa8DJnaDIEQT4HQFe4tbAjkumHP8ARKIitzEREBERAKhSoQEREBERAREQEREBEUhAREQEREBecfxgDslAg92XiOsNP7R5r0dcf/E/Ch+EDzqyowj/AFS0/UKb8VPrx7h1KXLq6PDA9rQWzPP7rTcEwuepG2pXZYipkaMok7ALy/pr3yPb+OZ49rAHZiwcBcLWcQ7PPYZaDHgttQxOJZLoeSfSOivM4zUsHsIGkxusnlP7dL437GkwXDn5Hs7vejWRcDWI8Fcq8KqFjZYyWfqnWxBkRyK7LAPY82A+94lbccOBtaFnavmY8kp8De50iR/8jX1WXX4BUOUERA5zc8wu04nVZTLmjYgEj88Vp6eEr1zmByAibn8stlt9oszPUjlX8BeSRbrda1+ELHw6267epwurQOcwRoTfTmtD2nYJY7SftKvOr3jlvM8eum7C8ApYuj8V8hzKuo3DYME+ZHuvUlzX8PuHChgaQjvVAajvF+n/AByrpV6MzkePV7RERUkREQEREBQpUICIiAiIgIiICIiApUKUBERAREQFre0ODFbDVaRIBexwbmMDPEtv4gLZLmO2pqNFF7BmZnLHtI1zxHhoVO7456v88+WpOvOOztJzHmRs4EHUOaQHNPXQ+YXR/HDXyW5yBIBJDWg/qd6WG8eJGtxOCc2qRSfkz3BgOhw5t8JHn0Wx4ZhXua41C1zi90loIENhoABJjT3Xk1Zf5PfmWTxSypXxE5LNbdzyGsYOpJ+Xwlx8FjYnB4im0vcWVGTldkObKeThbmLWW1eGPw7sPJZJuQJ0O4kX89lHB8A2gx4qYh1XOGiXyTAmBdxJ1Wy54m535evjA4Vjmh7ZgXMRoenMHoutJdlzXhcpxXC0WMgZgXOAYXWcXbQNYkD2XW0sEw0YDJ7sZjJd6m6njpbZ8cRxTiALzEuJOg3I+yzcBh8STcOmJyMdTz30lrnD0VWB4ZSbVqOkjIWECZAaWgyWm93TfSykcL/zviDFvDS8VDT/AEZg7MD89zYXjYKs+M+o15X4vf4k4k03vfuIcxgvyczLIPgYPNczj+GvrVaVDuy5xDToOgIuW3gTddlivh1qhc0S4C7h+5WJSweao9zSGvZScaZIkCpmaWuI3ggW3TF/lw/Sfw67jh7GtpMayQ1rGtaDqAABBGxEQVkLA4LhKtOmW1qjary97y5jMjRnObKGydyTPVZ69j5wiIgIiICIiAoUqEBERAREQEREBERAUqFKAiIgIiICxOK081Nw6sI8cwhZaxuI0y6m4NEmxA5wQY9lO53NXi81L/rz7iFPJkeSZdVIMmwGVwAHLQeq2HDXAOg6Pu0/3AAOb4wJHPvclg9qiXU3hrHNyFr7tIgtImeVlRwjFNe0A3BA/J2IO68Nnp9GXtbzFcLY8yRB5gkHzIVeD4Wxl4k8ySfqppvcBAeHD+4X/wBwI+iunO4Rmgf2CD/ukkeUHqpivbXY5jatZlPKCKZLiYFiB3WzsZykxyHNdRgG90tWkw9NlOS6BsB01+pWwwnEqeocql9s1m2emueRRryW92o3I4kCAQ4lt+RzEGdy3qqsRwSm8zljwJHsp4nxCi45HEX0PLb0votWzir6RyG3IOuI/tdIMeMrLW5l/puKXD2U2w0QPzUrDwNIOxQbsMrndIJc0ebgPIHon+KFw2HgL+RNvZX+z2Fc6o6o0gMEAi5cXCT+9yTKr853U4j9rzF66lERe98wREQEREBERAUFSoKAiIgIiICIiAiIgBSiICIiAiIgIiIKMTRD2OY75Xtc0+DhB+q8ewgdQqOpOPyOc0naQY9CvZF5t29weSvngRUaHCf62wHe2U+a5frnsdvx346bHA15C3uGiJXnXA8c4EhxFmg6/m62Du0hAiY9ZXk8bK9/nLnq92ypucc7KhY2Lhpvabg+XsuTZxV1Kxc9wsJtM9StpxPGZxDntaCTcnbTT80WvpUKbrHO8b5GE+Ygcl0zPXtF8rf4q8Lis1RtZwLi35Qbga7aLqcXjaVVgNQT1FiI3B1laHC8NeLU2OyE/NW7h8AyM3t5qvGcCqls54i4a0QI+qzWZVSazOrlHFFrHjMXta3M125GwPWbLs/4fVHPw73utmqEAdGtb+5K88a3JTyPdJcQDzgGSfp6r1rs5g/hYamwiDlzEdXkuI8pjyXX8c++vN/9G7ZI2aIi9DyCIiAiIgIiICgqVBQEREBERAREQEREEoiICIiAiIgIiIC53tzg/iYYkfNTe14nS8tIPQ5l0SxOL089Co3+x3qBI+inXyqz/wBR4pScWmY0tH3VxjWPeA4WPPTaZ2WbxDCd7MNfY+K01R0OEyCD5eY/NVw/6nXq7c3ldNR4bQHeDG+LYBWWzE0mAw59v0kgLF4PVa4EP25LMxPDaTyDFtDfmufbL7enOrz0wv8AyLv5WNAvF7lbX+Zc1jqr+Vh6+ywq2CosMsaGke/t+StZx/iBe1lMb256xNx1W88qjWrJ21n9keDvxVdtZ/8A6qZBIO5Fwz1gnpbdeqLnOwtIMwxaNnunxLWSujXqxJ4+ng3b5exERUgREQEREBERAUFSoKAiIgIiICIiAiIglERAREQEREBERAWNxE/5bxzaR62/dZBMXNlqcfjA8ZWGWzd3hy81snWXXHC1KUjkdxuCNQtLj8Jmvo4aH9jzC7niOBzAvYJO459R1+q5+pSaV5NZuNce3Os/pnscuzGOZ3XNgyLi415rOp8T7nzaETfQa+ekz0U4/AzMBc/Vwz80AFV/G/Wfyz8raHiZO5NojlJ0nmthwjCFz87p6A7D7rD4Zw7KJdquy4PgQRmNmjXr0Cz76yT1/LVdJ2XblYQf1EuHgIb+y3q5/D4mHgtEACANo0iFucPimv0MGYg/tzXpmfGSPJdzWrV9ERAREQEREBERAUFSoQEREBERAREQEREEooUoCIiAiKlz0FSxq2LA0Bcemnr9lD3Tr/16Kw8qplF1/wCMLFve894w3lttaN/PqsdrgLDYwec6/us9612JdlfBjvC1wBI1m3KfTqusjnaq+PBiFquJcOzy9ndfu06O+x6rPbSnf7HwUvzKdYmpytx+msXsce55BLXAtcLEHULFrNbMxddnjuHCqMzhlc2wcJmDoOt415rU0uCvL3MIAyxL+jtCG6nw2hePX5XN9e3vz+2dTt9MPg+ANUybMabnmf6QfqV1QaIDQIA0AVdHBCmwNYZaLee8+ZUfy5FwV6fzxMx5P1/S6v8Ai9RZ6ystuGkAgwfCxPksaidJttv4kfnNbKiLBdK4xXSzjUz4/dZHxeYI91S0WRRY6y8XGuB0KlUFg13UtB8fzms42aVIqQ5VKVCIiAoUqEBERAREQEREBERAUqEQSoJVNR8QNyVRmWyJuuK3OVl5Ul+yoe5VIi1S69lQ5VOKtSqiVLjeFgYykH5Y1m3Qi4M9DB8lfxJgifUe3vCrayABudftKr4z6sDUWvvrE7iSZKuhrRdxAHVUOcGTILpEiBJLh+nncR6FYpeS7O4numGs1ibtJ58/IhBdfU1c7uhmjDEzsXkHQ302uVzXEMVXoVqGKYc7HsJNJoh5puhz5JO8gjSHBsyt697HkNc4BrAHutB72YBs3n9V+ULDxLWnvsYGNcyCS0BvOWwJJPn4LJO1tvI3bHtdle27Hta5pExlIluvn6hKjb2mB9FrOzJd8B1JwdNNxyjSWP7wls2AOYeAWxo1RZu4vN79JHib8wt4zql1OHtkWG+xJufH9Pv1W1w4ERyWM2CIN+f1VdN2S2oOh38Cl+E+sproKvNWC2rfRX2PKmxUrIVQVsFC/qpUuEBWi/Kbmx3VTXoRMjos43qpFTT08LfnkqlKpUIiI0REQEREBERAREQEREGK9/fA6fdGvkSpRXPjlfqiq791jNqSURXEVUXq0H6+SItjVNFuYl5EdOu5/b16K452iIjFuoybenisdgaXAZQOQBMBrosepMGRMXUogwuHYfNVr4i2Z+WMzQYbTzBscjDllMa5zsznB574mI8gERJ/Zf6ayri/g1G1nNhj5a/dwaSIIg3ix56roqeFiXWI2te/e1N99FKLaRJZopse6dFCKWqKb4MOuQPbWVfbU9xKIgrdUhWjVJJ5IiwX2O2Vxr7j81CIsrYYd9irrXSpRTXTIiIpUIiICIiD/9k='
                            w='50px'
                            h='50px'
                          />
                        </Box>
                        <Box>
                          <Text as='p' fontSize='0.9rem' fontWeight='300'>
                            Thanks ft J.Cole
                          </Text>
                          <HStack>
                            <Badge
                              bg='gray.200'
                              color='primary'
                              fontWeight='300'
                              size='sm'
                              px='5px'
                            >
                              RnB
                            </Badge>
                            <Badge
                              bg='gray.200'
                              color='primary'
                              fontWeight='300'
                              size='sm'
                              px='5px'
                            >
                              Hip Hop
                            </Badge>
                          </HStack>
                        </Box>
                      </Flex>

                      <Text my='18px' ml='15px'>
                        Let It Down
                      </Text>
                      <Flex alignItems='center'>
                        <TriangleUpIcon color='primary' transform='rotate(90deg)' />
                        <Progress
                          bg='gray.200'
                          color='primary'
                          h='4px'
                          flexGrow='2'
                          size='sm'
                          value={20}
                        />
                      </Flex>
                      <Flex justifyContent='space-between' px='15px'>
                        <Text as='small'>1:15</Text>
                        <Text as='small'>2:15</Text>
                      </Flex>

                      <Text as='p' fontSize='0.8rem' mt='15px'>
                        1,346 Plays
                      </Text>
                    </GridItem>

                    <GridItem bg='white' p='10px' pr='25px'>
                      <Flex gap='20px'>
                        <Box>
                          <Avatar
                            src='data:image/jpeg;base64,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'
                            w='50px'
                            h='50px'
                          />
                        </Box>
                        <Box>
                          <Text as='p' fontSize='0.9rem' fontWeight='300'>
                            Thanks ft J.Cole
                          </Text>
                          <HStack>
                            <Badge
                              bg='gray.200'
                              color='primary'
                              fontWeight='300'
                              size='sm'
                              px='5px'
                            >
                              RnB
                            </Badge>
                            <Badge
                              bg='gray.200'
                              color='primary'
                              fontWeight='300'
                              size='sm'
                              px='5px'
                            >
                              Hip Hop
                            </Badge>
                          </HStack>
                        </Box>
                      </Flex>

                      <Text my='18px' ml='15px'>
                        Let It Down
                      </Text>
                      <Flex alignItems='center'>
                        <TriangleUpIcon color='primary' transform='rotate(90deg)' />
                        <Progress
                          bg='gray.200'
                          color='primary'
                          h='4px'
                          flexGrow='2'
                          size='sm'
                          value={20}
                        />
                      </Flex>
                      <Flex justifyContent='space-between' px='15px'>
                        <Text as='small'>1:15</Text>
                        <Text as='small'>2:15</Text>
                      </Flex>

                      <Text as='p' fontSize='0.8rem' mt='15px'>
                        1,346 Plays
                      </Text>
                    </GridItem>

                    <GridItem bg='white' p='10px' pr='25px'>
                      <Flex gap='20px'>
                        <Box>
                          <Avatar
                            src='data:image/jpeg;base64,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'
                            w='50px'
                            h='50px'
                          />
                        </Box>
                        <Box>
                          <Text as='p' fontSize='0.9rem' fontWeight='300'>
                            Thanks ft J.Cole
                          </Text>
                          <HStack>
                            <Badge
                              bg='gray.200'
                              color='primary'
                              fontWeight='300'
                              size='sm'
                              px='5px'
                            >
                              RnB
                            </Badge>
                            <Badge
                              bg='gray.200'
                              color='primary'
                              fontWeight='300'
                              size='sm'
                              px='5px'
                            >
                              Hip Hop
                            </Badge>
                          </HStack>
                        </Box>
                      </Flex>

                      <Text my='18px' ml='15px'>
                        Let It Down
                      </Text>
                      <Flex alignItems='center'>
                        <TriangleUpIcon color='primary' transform='rotate(90deg)' />
                        <Progress
                          bg='gray.200'
                          color='primary'
                          h='4px'
                          flexGrow='2'
                          size='sm'
                          value={20}
                        />
                      </Flex>
                      <Flex justifyContent='space-between' px='15px'>
                        <Text as='small'>1:15</Text>
                        <Text as='small'>2:15</Text>
                      </Flex>

                      <Text as='p' fontSize='0.8rem' mt='15px'>
                        1,346 Plays
                      </Text>
                    </GridItem>

                    <GridItem bg='white' p='10px' pr='25px'>
                      <Flex gap='20px'>
                        <Box>
                          <Avatar
                            src='data:image/jpeg;base64,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'
                            w='50px'
                            h='50px'
                          />
                        </Box>
                        <Box>
                          <Text as='p' fontSize='0.9rem' fontWeight='300'>
                            Thanks ft J.Cole
                          </Text>
                          <HStack>
                            <Badge
                              bg='gray.200'
                              color='primary'
                              fontWeight='300'
                              size='sm'
                              px='5px'
                            >
                              RnB
                            </Badge>
                            <Badge
                              bg='gray.200'
                              color='primary'
                              fontWeight='300'
                              size='sm'
                              px='5px'
                            >
                              Hip Hop
                            </Badge>
                          </HStack>
                        </Box>
                      </Flex>

                      <Text my='18px' ml='15px'>
                        Let It Down
                      </Text>
                      <Flex alignItems='center'>
                        <TriangleUpIcon color='primary' transform='rotate(90deg)' />
                        <Progress
                          bg='gray.200'
                          color='primary'
                          h='4px'
                          flexGrow='2'
                          size='sm'
                          value={20}
                        />
                      </Flex>
                      <Flex justifyContent='space-between' px='15px'>
                        <Text as='small'>1:15</Text>
                        <Text as='small'>2:15</Text>
                      </Flex>

                      <Text as='p' fontSize='0.8rem' mt='15px'>
                        1,346 Plays
                      </Text>
                    </GridItem>
                  </Grid>
                </Box>

                <Box mt='20px'>
                  <Text as='p'>Reviews</Text>

                  <Box mt='10px'>
                    <Slider {...settings}>
                      <Box bg='white' p='10px'>
                        <Flex gap='10px'>
                          <Avatar
                            src='data:image/jpeg;base64,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'
                            w='40px'
                            h='40px'
                          />
                          <Box>
                            <Text color='primary'>Olarenwaju Daniels</Text>
                            <Flex gap='3px'>
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <Text as='span' fontSize='0.8rem' fontWeight='300'>
                                4.0/4.5
                              </Text>
                            </Flex>
                          </Box>
                        </Flex>

                        <Text mt='10px' fontSize='0.9rem'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                      </Box>

                      <Box bg='white' p='10px'>
                        <Flex gap='10px'>
                          <Avatar
                            src='data:image/jpeg;base64,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'
                            w='40px'
                            h='40px'
                          />
                          <Box>
                            <Text color='primary'>Olarenwaju Daniels</Text>
                            <Flex gap='3px'>
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <Text as='span' fontSize='0.8rem' fontWeight='300'>
                                4.0/4.5
                              </Text>
                            </Flex>
                          </Box>
                        </Flex>

                        <Text mt='10px' fontSize='0.9rem'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                      </Box>

                      <Box bg='white' p='10px'>
                        <Flex gap='10px'>
                          <Avatar
                            src='data:image/jpeg;base64,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'
                            w='40px'
                            h='40px'
                          />
                          <Box>
                            <Text color='primary'>Olarenwaju Daniels</Text>
                            <Flex gap='3px'>
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <Text as='span' fontSize='0.8rem' fontWeight='300'>
                                4.0/4.5
                              </Text>
                            </Flex>
                          </Box>
                        </Flex>

                        <Text mt='10px' fontSize='0.9rem'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                      </Box>

                      <Box bg='white' p='10px'>
                        <Flex gap='10px'>
                          <Avatar
                            src='data:image/jpeg;base64,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'
                            w='40px'
                            h='40px'
                          />
                          <Box>
                            <Text color='primary'>Olarenwaju Daniels</Text>
                            <Flex gap='3px'>
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <AiFillStar color='red' />
                              <Text as='span' fontSize='0.8rem' fontWeight='300'>
                                4.0/4.5
                              </Text>
                            </Flex>
                          </Box>
                        </Flex>

                        <Text mt='10px' fontSize='0.9rem'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                      </Box>
                    </Slider>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box width={{ base: '100%', md: '26%', xl: '26%' }} bg='white' p='20px'>
              <Text as='p'>Sample Songs</Text>

              <Grid templateColumns={['repeat(1, 1fr)']} rowGap={[5, '20px']} mt='5px'>
                <GridItem bg='gray.200' p='10px' pr='25px'>
                  <Flex gap='20px'>
                    <Box>
                      <Avatar
                        src='data:image/jpeg;base64,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'
                        w='50px'
                        h='50px'
                      />
                    </Box>
                    <Box>
                      <Text as='p' fontSize='0.9rem' fontWeight='300'>
                        Thanks ft J.Cole
                      </Text>
                      <HStack>
                        <Badge bg='white' color='primary' fontWeight='300' size='sm' px='5px'>
                          RnB
                        </Badge>
                        <Badge bg='white' color='primary' fontWeight='300' size='sm' px='5px'>
                          Hip Hop
                        </Badge>
                      </HStack>
                    </Box>
                  </Flex>
                  <Text as='span' fontSize='0.8rem'>
                    Sample Song
                  </Text>
                  <Text my='1px' fontSize='0.8rem' ml='15px'>
                    Let It Down
                  </Text>
                  <Flex alignItems='center'>
                    <TriangleUpIcon color='primary' transform='rotate(90deg)' />
                    <Progress
                      bg='white'
                      color='primary'
                      h='4px'
                      flexGrow='2'
                      size='sm'
                      value={20}
                    />
                  </Flex>
                  <Flex justifyContent='space-between' px='15px'>
                    <Text as='small'>1:15</Text>
                    <Text as='small'>2:15</Text>
                  </Flex>

                  <Flex flexDirection='column' mt='10px' px='30px'>
                    <Button fontWeight='300' h='auto' py='8px'>
                      View Profile
                    </Button>
                  </Flex>
                </GridItem>

                <GridItem bg='gray.200' p='10px' pr='25px'>
                  <Flex gap='20px'>
                    <Box>
                      <Avatar
                        src='data:image/jpeg;base64,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'
                        w='50px'
                        h='50px'
                      />
                    </Box>
                    <Box>
                      <Text as='p' fontSize='0.9rem' fontWeight='300'>
                        Thanks ft J.Cole
                      </Text>
                      <HStack>
                        <Badge bg='white' color='primary' fontWeight='300' size='sm' px='5px'>
                          RnB
                        </Badge>
                        <Badge bg='white' color='primary' fontWeight='300' size='sm' px='5px'>
                          Hip Hop
                        </Badge>
                      </HStack>
                    </Box>
                  </Flex>
                  <Text as='span' fontSize='0.8rem'>
                    Sample Song
                  </Text>
                  <Text my='1px' fontSize='0.8rem' ml='15px'>
                    Let It Down
                  </Text>
                  <Flex alignItems='center'>
                    <TriangleUpIcon color='primary' transform='rotate(90deg)' />
                    <Progress
                      bg='white'
                      color='primary'
                      h='4px'
                      flexGrow='2'
                      size='sm'
                      value={20}
                    />
                  </Flex>
                  <Flex justifyContent='space-between' px='15px'>
                    <Text as='small'>1:15</Text>
                    <Text as='small'>2:15</Text>
                  </Flex>

                  <Flex flexDirection='column' mt='10px' px='30px'>
                    <Button fontWeight='300' h='auto' py='8px'>
                      View Profile
                    </Button>
                  </Flex>
                </GridItem>
              </Grid>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Artist;
