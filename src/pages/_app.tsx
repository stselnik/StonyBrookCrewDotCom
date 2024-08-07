import "@/styles/globals.css";
import { Lato, Lora } from "next/font/google";
import type { AppProps } from "next/app";


/* Import Fonts from Google Fonts */
const lato = Lato({ 
  weight: ['100', '300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-lato',
});

const lora = Lora({
  subsets: ['latin'], 
  style: ['normal', 'italic'],
  variable: '--font-lora'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lato.variable} ${lora.variable} font-lato scroll-smooth`}> 
      <Component {...pageProps} />
    </main>
    )
}
