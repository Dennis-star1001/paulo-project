import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Flex, Image, Button } from '@chakra-ui/react';
import { FaPlay, FaPause, FaForward } from 'react-icons/fa';
import DummyBanner from "../../../../assets/dummy-banner.png"
import { BsMusicNote } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const ArtistMusic: React.FC = ({ background }: any) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', () => {
                setCurrentTime(audioRef.current!.currentTime);
            });
        }
    }, []);

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };

    const handleSkip = () => {
        // Add logic to skip to the next track here
    };

    const handleSeek = (value: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value;
        }
    };

    return (
        <Box textAlign="center" w={'72'} bg={background || 'white'} px='2' py='5' borderRadius={'8px'}>
            <Flex gap='3'>

                <Image
                    borderRadius={'full'}
                    w='12'
                    h='12'
                    src={DummyBanner}
                />
                <Box>

                    <Text pt='3' fontWeight={'medium'} textAlign={'left'} fontSize="sm">Sarah Matthew P.K.A Sarah </Text>
                    <Flex gap='3' pb='5' fontSize={'sm'}>
                        <Text bg='white' px='3' borderRadius={'xl'} color='#00B0F3'>RnB</Text>
                        <Text bg='white' px='3' borderRadius={'xl'} color='#00B0F3'>Hip Hop</Text>
                    </Flex>
                </Box>
            </Flex>


            <audio ref={audioRef}>
                <source src="your-audio-file.mp3" />
            </audio>
            <Flex alignItems={'center'}>
                <Text textAlign={'left'} fontSize="sm">Sample Song</Text>
                <BsMusicNote size='18' />
            </Flex>
            <Box position={'relative'}>
                <Flex top='0' pl='10' position={'absolute'} alignItems={'center'}>
                    <Text textAlign={'left'} fontWeight={'bold'} fontSize="sm">Let you Down</Text>

                </Flex>
                <Flex alignItems={'center'}>


                    <IconButton
                        icon={isPlaying ? <FaPause color='#00B0F3' size='20' /> : <FaPlay color='#00B0F3' size='20' />}
                        onClick={handlePlayPause}
                        bg='none'

                        aria-label={isPlaying ? 'Pause' : 'Play'}
                    />

                    <Box w='xs'>

                        <Slider aria-label='slider-ex-4' defaultValue={30}>
                            <SliderTrack >
                                <SliderFilledTrack />
                            </SliderTrack>

                        </Slider>
                    </Box>
                </Flex>
                <Flex bottom='-3' w='full' pl='10' position={'absolute'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontSize="sm">
                        {Math.floor(currentTime)}

                    </Text>
                    <Text fontSize="sm">

                        {audioRef.current ? Math.floor(audioRef.current.duration) : '0'}
                    </Text>
                </Flex>
            </Box>
            <Link to='/artist-profile'>
                <Button mt='5' px='7' py='2' fontSize={'sm'} h='fit-content'>View Profile</Button>
            </Link>
        </Box >
    );
};

export default ArtistMusic;
