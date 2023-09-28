import { FormControl, FormControlProps, Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  label?: string;
  children: ReactNode;
  textProps?: TextProps & { htmlFor: string };
  controlProps?: FormControlProps;
};
export const FormControlLabel = ({
  label = '',
  controlProps = {
    display: 'flex',
    flexDirection: 'column',
    gap: 1
  },
  ...props
}: Props) => {
  return (
    <FormControl {...controlProps}>
      {label && (
        <Text as='label' textStyle='subtext' {...props.textProps}>
          {label}
        </Text>
      )}
      {props.children}
    </FormControl>
  );
};
