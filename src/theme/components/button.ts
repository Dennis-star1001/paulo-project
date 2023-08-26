import { ThemeProps } from '@/theme/@types';

export const button: ThemeProps = {
  components: {
    Button: {
      baseStyle: {
        textTransform: 'capitalize',
        borderRadius: '4px',
        border: 'none',
        color: '#fff'
      },

      sizes: {
        md: {
          fontSize: '14px',
          fontWeight: 700,
          px: '11px',
          py: '6px'
        }
      },

      variants: {
        primary: {
          bg: 'primary',
          color: 'white',
          _hover: {
            bg: 'blue.hover'
          }
        },
        text: {
          bg: 'transparent',
          color: 'primary',
          _hover: {
            color: 'blue.hover'
          }
        }
      },

      defaultProps: {
        size: 'md',
        variant: 'primary'
      }
    }
  }
};
