import { AppProps } from "next/app";
import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "../context/ThemeContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
