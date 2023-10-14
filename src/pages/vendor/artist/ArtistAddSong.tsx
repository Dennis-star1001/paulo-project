import AfterLoginHeader from "../../../components/Header/AfterLoginHeader"
import { FormInput, FormLeftAddonInput, FormSelect, FormTextArea } from '@/components';
import { Box, Button, Grid, GridItem, Stack, Text, Container } from '@chakra-ui/react';
import { Form, FormikProvider, useFormik } from 'formik';
import { AvatarUploader } from '@/components/upload';
import { ArtistAddSongFormValues, ArtistAddSongSchema } from './schema';



const ArtistAddSong = () => {

	  const formik = useFormik<ArtistAddSongFormValues>({
	    initialValues: {
	      songGenre: '',
	      songTitle: '',
	      songFeature: '',
	      songCover: []
	    }
	  });
  
  const { values, errors, touched, handleChange, isSubmitting, setFieldValue } = formik;

	return(
		<>
			<AfterLoginHeader/>

			  <Box bg='neutral.100' p={[4, '100px']}>

			  	<Container maxW="1000px" p="0">
			  		<FormikProvider value={formik}>
			  			<Form>
			  				 <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} rowGap={10} columnGap={6}>

			  				 	<GridItem>
						              <Text color='black' textTransform='uppercase' textStyle='h1' mb='30px'>
						                ADD SAMPLE SONG
						              </Text>

						              <Text as="span" fontSize="0.9rem">Song Cover</Text>

						              <Stack>
						                <AvatarUploader
						                  name='songCover'
						                  errorMessage={errors.songCover}
						                  touchedField={touched.songCover}
						                  setFieldValue={setFieldValue}
						                />
						              </Stack>
						            </GridItem>
							        <GridItem>
							              <Stack
							                sx={{
							                  'input, select, textarea': {
							                    bgColor: '#fff',
							                    _focus: {
							                      bgColor: '#fff'
							                    }
							                  }
							                }}
							              >
							              	<Box>
							              	 <FormInput
							                  label='Song Genre'
							                  id='songGenre'
							                  name='songGenre'
							                  placeholder="Type in the genre of your song"
							                  value={values.songGenre}
							                  errorMessage={errors.songGenre}
							                  onChange={handleChange}
							                  touchedField={touched.songGenre}
							                />
							                	<Text as="span" fontSize="0.8rem">Artist can add up to 3 genres</Text>
							                </Box>


							                 <FormInput
							                  label='Song Title'
							                  id='songTitle'
							                  name='songTitle'
							                  placeholder="Name of the your sample song"
							                  value={values.songTitle}
							                  errorMessage={errors.songTitle}
							                  onChange={handleChange}
							                  touchedField={touched.songTitle}
							                />

							                <FormInput
							                  label='Feature'
							                  id='songFeature'
							                  name='songFeature'
							                  placeholder="Name of Featured artist"
							                  value={values.songFeature}
							                  errorMessage={errors.songFeature}
							                  onChange={handleChange}
							                  touchedField={touched.songFeature}
							                />

							                 <Stack spacing={6} mt="20px">
							                  <Button type='submit' isLoading={isSubmitting}>
							                    Post Sample Song
							                  </Button>
							                  <Button variant='outline'>Save for later</Button>
							                </Stack>

							             </Stack>

							       </GridItem>
			  				 </Grid>
			  			</Form>
			  		</FormikProvider>
			  	</Container>

			  </Box>
			
		</>
	)
}

export default ArtistAddSong