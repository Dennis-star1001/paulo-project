import { extendTheme } from '@chakra-ui/react';
import { button, input, link } from './components';
import { typography } from './foundations';
import { globalStyles } from './styles';

const theme = extendTheme(globalStyles, button, input, link, typography);

export default theme;
