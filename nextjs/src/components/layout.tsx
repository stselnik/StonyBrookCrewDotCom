import Head from "next/head";
import Navbar from "./navbar";

type LayoutProps = {
    children: React.ReactNode;
  };

export default function Layout({ children }: LayoutProps) {
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico"/>
            <title>Stony Brook Rowing</title>
        </Head>
        <Navbar />
        { children }
        </>
    )
}