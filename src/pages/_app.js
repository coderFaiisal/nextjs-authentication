import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Layout/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </SessionProvider>
  );
}
