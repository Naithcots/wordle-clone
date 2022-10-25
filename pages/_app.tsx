import { AppProps } from "next/app";
import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "../context/ThemeContext";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
