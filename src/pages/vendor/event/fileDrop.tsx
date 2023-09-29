import { useCallback, useRef } from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import { Box, Text, Button } from '@chakra-ui/react';
import gallery from '../../../assets/gallery-add.svg'

interface FileDropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
}


interface FileDropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
  accept: Accept;
}

const FileDropzone = ({ onDrop }: FileDropzoneProps & { accept: Accept }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileInputClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (onDrop) {
        onDrop(acceptedFiles);
      }
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: ['image/*']
  });

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Box
      maxW='500px'
      height='300'
        {...getRootProps()}
        borderWidth={2}
        borderRadius='lg'
        borderColor={isDragActive ? 'green.400' : 'gray.200'}
        borderStyle='dashed'
        p={12}
        cursor='pointer'
        onClick={handleFileInputClick}
      >
        <input {...getInputProps()} ref={inputRef} style={{ display: 'none' }} />
        {isDragActive ? (
          <Text>Drop the files here...</Text>
        ) : (
          <Text>
            Drag drop some images here, or click to select files. (Only image files are allowed)
          </Text>
        )}
      </Box>
      <Button onClick={handleFileInputClick} mt={2} width='fit-content' colorScheme='blue'>
        <img src={gallery} alt='gallery' />
         Add Image
      </Button>
    </Box>
  );
};

export default FileDropzone;
