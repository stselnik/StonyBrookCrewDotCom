import Head from "next/head";
import Navbar from "./navbar";
import React, { ReactNode } from "react";
import Footer from "./footer";
import { Analytics } from '@vercel/analytics/react';


export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="The official website for Crew at Stony Brook University, Stony Brook University's Rowing team. Learn all about rowing on Port Jefferson Harbor, SBU Crew history, upcoming regattas, recruiting, and how to join." />
        <link rel="icon" href="/favicon.ico" />
        <title>Stony Brook Rowing - Crew at Stony Brook University</title>
      </Head>
      <Navbar />
      {props.children}
      <Analytics />
      <Footer />
    </>
  )
}
