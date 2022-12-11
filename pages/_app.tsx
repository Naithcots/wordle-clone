import { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WordleProvider } from "../context/WordleContext";
import { ThemeProvider } from "../context/ThemeContext";
import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <WordleProvider>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </WordleProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
