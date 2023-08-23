import { extendTheme } from '@chakra-ui/react';
import { button } from './components';
import { typography } from './foundations';
import { globalStyles } from './styles';

const theme = extendTheme(globalStyles, button, typography);

export default theme;
