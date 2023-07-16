import 'styled-components';

import type { DefaultThemeColors } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: DefaultThemeColors;
  }
}
