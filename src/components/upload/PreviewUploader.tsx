import { useHandleError } from '@/hooks';
import { Avatar, Box, Button, Flex, Icon, Stack } from '@chakra-ui/react';
import { useField } from 'formik';
import { memo, useCallback, useEffect } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { v4 as key } from 'uuid';

const MAX_UPLOADABLE_IMAGES = 1;

interface IImage extends File {
  preview?: string;
  imgKey?: string;
}

interface ImageUploadProps {
  name: string;
  errorMessage?: any;
  touchedField?: any;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  src?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const AvatarUploader = ({
  name,
  errorMessage,
  touchedField,
  setFieldValue,
  src
}: ImageUploadProps) => {
  const [{ value: uploadedImages }] = useField<IImage[]>({ name });
  const handleError = useHandleError();

  const onDrop = useCallback(
    (selectedFiles: IImage[]) => {
      const newImages = selectedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          imgKey: key()
        })
      );
      setFieldValue(name, [...uploadedImages, ...newImages].slice(0, MAX_UPLOADABLE_IMAGES));
    },
    [name, setFieldValue, uploadedImages]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.png']
    },
    maxFiles: 1,
    maxSize: 6242_880,
    onError: (error) => {
      handleError(null, error?.message, 'File Error');
    },
    onDropRejected: (rejectedFiles) => {
      handleError(
        null,
        generateFileError(rejectedFiles) || 'The file you tried to upload is invalid',
        'File Error'
      );
    }
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    // return () => images.forEach((file) => URL.revokeObjectURL(file.preview || ''));
    return () => uploadedImages.forEach((file) => URL.revokeObjectURL(file.preview || ''));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (uploadedImages.length > MAX_UPLOADABLE_IMAGES) {
      // pick first 5 images if more than 5 are selected from the dialog

      setFieldValue(name, uploadedImages.slice(0, MAX_UPLOADABLE_IMAGES));
    }
  }, [name, setFieldValue, uploadedImages]);

  return (
    <Flex>
      <Stack spacing={3}>
        {src && uploadedImages.length < 1 ? (
          <Avatar src={src} size='2xl' objectFit='cover' />
        ) : uploadedImages.length > 0 ? (
          uploadedImages.map((image) => (
            <Previewer
              key={key()}
              img={image.preview}
              onDelete={() => {
                setFieldValue(
                  name,
                  uploadedImages.filter((img) => img.imgKey !== image.imgKey)
                );
              }}
            />
          ))
        ) : (
          <Avatar size='2xl' objectFit='cover' />
        )}

        {uploadedImages.length < 1 ? (
          <Flex {...getRootProps()} justifyContent='center'>
            <input {...getInputProps()} />
            <Button w='auto' size='sm' {...getRootProps()}>
              {isDragActive ? 'Drop the image here' : 'Upload image'}
              <input {...getInputProps()} accept='image/*' />
            </Button>
          </Flex>
        ) : (
          <Button type='submit' w='auto' size='sm'>
            Save Image
          </Button>
        )}

        {errorMessage && touchedField && (
          <Box as='small' color='error'>
            {errorMessage}
          </Box>
        )}
      </Stack>
    </Flex>
  );
};

export default AvatarUploader;

const Previewer = memo(({ img = '', onDelete }: { img?: string; onDelete: () => void }) => {
  return (
    <Flex>
      <Avatar
        src={img}
        // onLoad={() => {
        //   URL.revokeObjectURL(img);
        // }}
        size='2xl'
        objectFit='cover'
      />
      <Icon
        cursor='pointer'
        as={RiDeleteBin6Fill}
        aria-label={''}
        bgColor='transparent'
        color='#EF5D80'
        w={4}
        h={4}
        onClick={onDelete}
      />
    </Flex>
  );
});

Previewer.displayName = 'Previewer';

export const generateFileError = (rejectedFiles: FileRejection[]) => {
  return (
    <ul>
      {rejectedFiles.map((files) => {
        const errors = [];
        errors.push({
          path: files.file.name,
          error: files.errors.map((error) => error.message)
        });
        return (
          <Box
            as='ul'
            key={key()}
            sx={{
              'li.error': {
                mb: 4
              }
            }}
          >
            {errors.map((_error) => {
              return (
                <Box as='li' className='error' key={key()}>
                  {`${_error.path}`}
                  <ul>
                    {_error.error.map((err) => {
                      return <li key={key()}>{err}</li>;
                    })}
                  </ul>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </ul>
  );
};
