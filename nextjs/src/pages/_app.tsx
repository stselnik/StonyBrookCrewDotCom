import "@/styles/globals.css";
import { Lato } from "next/font/google";
import type { AppProps } from "next/app";


/* Import Fonts from Google Fonts */
const lato = Lato({ 
  weight: ['100', '300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'] 
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={lato.className}> 
      <Component {...pageProps} />
    </main>
    )
}
