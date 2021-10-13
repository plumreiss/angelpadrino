import { GlobalStyles } from "@/styles/GlobalStyles";
import "@/styles/globalFont.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
