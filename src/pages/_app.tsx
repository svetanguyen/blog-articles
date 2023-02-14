import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import theme from '../theme/theme';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { GlobalStyle } from '../components/styles/'

const client = new ApolloClient({
  uri: 'https://powerful-beyond-01021.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    'Content-Type': 'application/JSON'
  }
});

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState("light");
  const handleThemeSwitch = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }
  return (
    <ApolloProvider client={client}>
      <GlobalStyle theme={currentTheme === 'light' ? theme.light : theme.dark} />
      <ThemeProvider
        theme={currentTheme === 'light' ? theme.light : theme.dark}
      >
        <Component currentTheme={currentTheme} handleThemeSwitch={handleThemeSwitch} {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
