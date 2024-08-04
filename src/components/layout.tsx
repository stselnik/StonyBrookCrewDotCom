import Head from "next/head";
import Navbar from "./navbar";
import React, { ReactNode } from "react";
import Footer from "./footer";


export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Stony Brook Rowing</title>
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}
