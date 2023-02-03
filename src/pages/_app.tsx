import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import theme from '../theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState("light");
  const handleThemeSwitch = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeProvider
      theme={currentTheme === 'light' ? theme.light : theme.dark}
    >
      <Component currentTheme={currentTheme} handleThemeSwitch={handleThemeSwitch} {...pageProps} />
    </ThemeProvider>
  );
}
