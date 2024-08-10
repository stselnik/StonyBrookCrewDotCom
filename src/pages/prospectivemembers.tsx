import Layout from "@/components/layout"
import Head from "next/head";
import Image from "next/image";
import localFont from 'next/font/local';

const collegeFont = localFont({src: '../fonts/college.regular.ttf'});


export default function ProspectiveMembers() {

    const LandingScreen = () => {

        function RecruitmentMessage() {
            return(
                <div className={`flex flex-col items-center my-auto text-white text-4xl ` + collegeFont.className}>
                    <h1 className="text-[10rem] leading-[0.8]">NOW</h1>
                    <h1 className="text-[3.75rem] leading-[1]">RECRUITING</h1>
                    <Image src="/assets/Prospective Members/FOR-White.png" width={300} height={300}  alt="Two Boats rowing under the sunrise on Port Jefferson Harbor."/>
                    <h1 className="text-[4.2rem] leading-[1]">FALL 2024</h1>
                </div>
            )
        }

        return(
            <header className="flex flex-row justify-center gap-5 h-[85vh] bg-[url('/assets/prospective-landing.jpg')] bg-cover bg-top md:bg-fixed">
                <div className="relative self-center hidden sm:block">
                    <Image src="/assets/SBU Crew Logo Transparent.png" height={260} width={260} alt="Stony Brook Rowing Logo"/>
                </div>
                <div className="border-l-4 h-[240px] border-white self-center hidden sm:block"></div>
                <RecruitmentMessage />
            </header>
        )
    }

    const Positions = () => {

        function Position({name, desc, resp, img} : {name: string, desc: string, resp: Array<string>, img: string}){
            return(
                <div className="flex flex-col lg:flex-row w-full max-w-[] bg-[#BA3F3F] m-3 rounded-xl drop-shadow-element">
                    <div className="flex-1 mx-5 my-3 lg:my-10 text-lg font-light">
                         <h1 className="text-3xl font-lora">{name}</h1>
                        <hr className="border-[#003665]"/>
                        <p>{desc}</p>
                        <ul className="list-disc pl-5">
                            {resp.map(responsibility => (
                                <li>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative lg:flex-1 h-[28vw] lg:h-auto w-auto">
                        <Image src={img} fill={true} className="rounded-b-xl lg:rounded-none lg:rounded-r-xl object-cover" alt="4 boats racing with eachother in practice in Lake Lure, North Carolina."/>
                    </div>
                   
                </div>
            )
        }

        return(
            <>
            <Position 
                name={"Rowers"} 
                desc={"Rowers are the athletes with the oars who are responsible for propelling the boat forward and physically getting it across the finish line."} 
                resp={[
                    "Rowers train on the ergometer (rowing machine) at land practices and in racing shells on the water.",
                    "Each boat is usually composed of a crew of either 4 or 8 rowers.",
                    "Rowers are expected to show up for all land practices to train together and for all water practices they are scheduled to be in."]}
                img={"/assets/Prospective Members/RowersExample.jpeg"}
            />
            <Position 
                name={"Coxswains"} 
                desc={"While they may not row the boat, coxswains are just as valued and integral to the team as rowers are and are crucial for a successful crew. "} 
                resp={[
                    "Coxswains both coordinate the rhythm and power of the boat and steer the boat.",
                    "Each boat only requires 1 coxswain.",
                    "Unlike rowers, Coxswains are only required to be present for land practice 2-3 days a week, and are present for all water practices."]}
                img={"/assets/Prospective Members/CoxswainSpring2023.jpeg"}
            />
            </>
        )
    }



    return (
        <Layout>
            <Head>
                <title>Prospective Members</title>
            </Head>
            <LandingScreen />
            <main className="flex min-h-screen flex-col items-center justify-between bg-[#c84444] pt-16 px-5 lg:px-[8%] text-white">
                <div className="">
                    <h1 className="text-3xl font-lora">Prospective Members</h1>
                    <hr className="border-[#003665] rounded-xl"/>
                    <p className="text-lg font-light">
                        Crew at Stony Brook University is open to undergraduate and graduate students of Stony Brook University of all skill levels. We have practice from Monday-Friday at 6am at the MAC Courts of the Walter J. Hawrys Campus Recreation Center for land practice and 5:15am at Port Jefferson Yacht Club for water practice.
                        &nbsp;<span className="underline">No rowing experience is required</span>, so if you're a current Stony Brook student and want to try something new come join us for our first practice and we'll teach you everything you have to know!
                        <br />
                        If you want to join but missed the first practices, just email us at <a href="mailto:%75%73%62%63%72%65%77%40%67%6D%61%69%6C%2E%63%6F%6D" target="blank" className="text-[#5eb7ff] hover:text-[#5a96c7]">usbcrew@gmail.com</a> to make sure water practice season hasn't started yet and let us know you're coming.
                        {/* Email URL above is URL encoded to partially prevent spam from email harvester programs. */} 
                    </p>
                </div>
                <Positions />
                <div className="w-full h-fit overflow-visible">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1lZZvkySRMGWaKhMFM9RdQ39wpy2_X5JtNU36XOXUy8YzeA/viewform?embedded=true" className="w-full overflow-visible" width="640" height="2550" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </main>
        </Layout>
    );
}