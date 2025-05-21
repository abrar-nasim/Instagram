import '../styles/globals.css';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src={`https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&AW3D4uo3L5NKLTOmbaqGdfVc-NKvjeXfuPAq0_MuOI-w5c-fVb9N4sBS8E7nfe-JWioPXIqA1Xv_RX0D=USD`}
          data-sdk-integration-source="button-factory"
        ></script>
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}


