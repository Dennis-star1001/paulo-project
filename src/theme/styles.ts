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
      900: '#003b51',
      hover: '#0077c2'
    },
    gray: { 100: '#ADA8AB', 400: '#4D4D4D' }
  },
  styles: {
    global: () => ({
      h1: {
        fontFamily: 'Lato, sans-serif'
      },
      h2: {
        fontFamily: 'Lato, sans-serif'
      },
      h3: {
        fontFamily: 'Lato, sans-serif'
      },
      h4: {
        fontFamily: 'Lato, sans-serif'
      },
      h5: {
        fontFamily: 'Lato, sans-serif'
      },
      h6: {
        fontFamily: '"Lato", sans-serif'
      },
      body: {
        background: { base: '#fff' },
        fontFamily: 'Open Sans, sans-serif',
        color: '#000'
      },
      '*::placeholder': {
        color: '#4D4D4D'
      },
      html: {
        fontFamily: '"Open Sans", sans-serif'
      }
    })
  }
};
