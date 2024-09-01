import Layout from "@/components/layout";
import Head from "next/head";

export default function Custom404() {
    return(
        <Layout>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <main className="flex flex-col min-h-[80vh] bg-[#c84444]">
                <div className="flex flex-col items-center my-auto text-white">
                    <h1 className="text-4xl">Error 404: Page Not Found</h1>    
                    <p className="font-lora italic">Weigh Enough! We may be in the wrong lane!</p>
                </div>
            </main>
        </Layout>
    );
}