import "@/styles/globals.css";
import { Lato, Lora, Barlow } from "next/font/google";
import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';


/* Import Fonts from Google Fonts */
const lato = Lato({
  weight: ['100', '300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-lato',
});

const lora = Lora({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-lora'
});

const barlow = Barlow({
  weight: ['100', '300', '400', '700', '900', '500', '600', '200', '800'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-barlow'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lato.variable} ${lora.variable} ${barlow.variable} font-lato scroll-smooth`}>
      <Component {...pageProps} />
    </main>
    )
}
