import 'styled-components';

import type { UserDefaultTheme } from '../styles';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends UserDefaultTheme {}
}
