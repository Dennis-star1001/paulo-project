export const globalStyles = {
  colors: {
    white: '#FFF',
    black: '#000',
    primary: '#00b0f3',
    blue: {
      100: '#cceffd',
      200: '#aae5fb',
      300: '#80d8f9',
      400: '#55caf7',
      500: '#2abdf5',
      600: '#0093cb',
      700: '#0075a2',
      800: '#00587a',
      900: '#003b51'
    }
  },
  styles: {
    global: () => ({
      heading: {
        fontFamily: '"Lato", sans-serif'
      },
      body: {
        background: { base: '#fff' },
        fontFamily: '"Open Sans", sans-serif',
        color: '#000'
      },
      '*::placeholder': {
        color: '#ADA8AB'
      },
      html: {
        fontFamily: '"Open Sans", sans-serif'
      }
    })
  }
};
