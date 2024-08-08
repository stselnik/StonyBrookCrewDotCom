import Layout from "@/components/layout"
import Head from "next/head";
import Image from "next/image";
import localFont from 'next/font/local';

const collegeFont = localFont({src: '../fonts/college.regular.ttf'});

export default function ProspectiveMembers() {
    const LandingScreen = () => {
        return(
            <header className="flex flex-row justify-center gap-5 h-[85vh] bg-[url('/assets/prospective-landing.jpg')] bg-cover bg-top bg-fixed">
                <div className="relative self-center hidden sm:block">
                    <Image src="/assets/SBU Crew Logo Transparent.png" height={260} width={260} alt="Stony Brook Rowing Logo"/>
                </div>

                <div className="border-l-4 h-[240px] border-white self-center hidden sm:block"></div>
                
                <div className={`flex flex-col items-center my-auto text-white text-4xl ` + collegeFont.className}>
                    <h1 className="text-[10rem] leading-[0.8]">NOW</h1>
                    <h1 className="text-[3.75rem] leading-[1]">RECRUITING</h1>
                    <Image src="/assets/Prospective Members/FOR-White.png" width={300} height={300}  alt="Two Boats rowing under the sunrise on Port Jefferson Harbor."/>
                    <h1 className="text-[4.2rem] leading-[1]">FALL 2024</h1>
                </div>
            </header>
        )
    }



    return (
        <Layout>
            <Head>
                <title>Prospective Members</title>
            </Head>
            <LandingScreen />
            <main className="flex min-h-screen flex-col items-center justify-between bg-[#c84444] p-5">
                <div>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1lZZvkySRMGWaKhMFM9RdQ39wpy2_X5JtNU36XOXUy8YzeA/viewform?embedded=true" width="640" height="2550" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </main>
        </Layout>
    );
}