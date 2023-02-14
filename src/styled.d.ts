import {} from 'styled-components';
import { ThemeType } from './theme';
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    background: string
    bannerBg: string
    primary: string
    secondary: string
    textPrimary: string
    textSecondary: string
    headerBg: string
    borderColor: string
  }
}