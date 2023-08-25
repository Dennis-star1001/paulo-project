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
          py: '6px',
          backgroundColor: 'primary'
        }
      },

      variants: {},

      defaultProps: {
        size: 'md',
        variant: 'primary'
      }
    }
  }
};
