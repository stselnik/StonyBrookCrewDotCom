import Layout from "@/components/layout";
import Head from "next/head";



const LandingScreen = () => {
    return(
        <header className="h-[50vh] bg-[url('/assets/aboutus-img.jpeg')] bg-cover bg-center drop-shadow-xl">
            <div className="h-full bg-gradient-to-b from-[#524a3db1] to-[#a7a7a70d] to-30% flex justify-center relative" >
                <h1 className="absolute bottom-0 mb-3 drop-shadow font-[Georgia] text-[#F9F9F9] text-6xl ">About Us</h1>
            </div>
        </header>
    );
}


const TeamSection= () => {
    return (
        <>
        <div className="flex flex-wrap w-full mb-10 gap-5 lg:gap-14">
            <div className="lg:flex-1 self-center ">
                <h2 className=" text-5xl font-[Georgia] mb-3">The Team</h2>
                <hr className="border-red-800 mb-3"/>
                <p className="text-xl font-light">
                Stony Brook University Crew is a high performance club rowing team that competes at an intercollegiate level
                throughout the northeastern section of the United States.
                </p>
                <ul className="text-xl font-light list-disc list-inside">
                    <li>We practice five days a week, Monday through Friday, with land practices taking place at 6 am at the Stony 
                        Brook University athletic training center multi activity courts (MAC).</li>
                    <li>For water practices, we meet at 5:15 am at the Port Jefferson Yacht Club in Port Jefferson Harbor.</li>
                    <li>We participate in several regattas every semester, and travel for additional training during spring break.</li>  
                </ul>
            </div>
            <div className="lg:flex-1 self-center">
                <img className="rounded-2xl drop-shadow-lg border-solid border-[#b74040ad]" src="/assets/About Us/NYStates Regatta 2023.jpeg" alt="Stony Brook Crew at New York State Regatta"/>
                <figcaption className="text-lg font-light italic text-gray-500 text-center"> NY States Collegiate Championship Regatta - Spring 2023</figcaption>
            </div>
        </div>
        </>
    );
}

const CoachSection = () => {
    return(
        <>
        <div className="lg:flex flex-row-reverse flex-wrap w-full h-min gap-14">
            <div className="lg:flex-1 self-center">
                <h2 className="text-5xl font-[Georgia] mb-3">Our Coach</h2>
                <hr className="border-red-800" />
                <div className="lg:hidden p-5">
                     <CoachImage />
                </div>
               
                <p className="text-xl font-light">
                Our head coach is Tim Massi. The 2024-2025 season will be his second year as coach of Stony Brook Crew. 
                He is a Stony Brook University Alum and has a passion for rowing and leading. He has an enthusiasm for 
                learning and guiding our team to achieve more success everyday and every practice.
                </p>
            </div>
            <div className="hidden lg:inline-block flex-1">
                <CoachImage />
            </div>
        </div>
        </>
    );
    
}
/* Note: The Coach Image is repeated twice in CoachSection as it switches position depending on whether the screen is small or not. */

const CoachImage = () => {
    return(
        <>
        <div className="lg:flex-1 flex justify-center w-[100%]">
            <img className="rounded-full max-h-[45vh] drop-shadow-lg border-solid border-[#b74040ad]" src="/assets/coach-tim.jpeg" alt="Head Coach Tim Massi"/>
        </div>
        </>
    );
}

export default function AboutUs() {
    return (
        <Layout>
            <Head>
                <title>About Us</title>
            </Head>
            { /* Landing Screen */ }
            <LandingScreen />
            <main className="flex min-h-screen flex-col items-center justify-between px-10 lg:px-24 3xl:px-40 py-12">
                <TeamSection />
                <CoachSection />
            </main>

        </Layout>
    )
} 