import Layout from "@/components/layout";
import styles from "@/styles/history.module.css"
import { useEffect, useRef, useState } from "react";

export default function History() {
    
    const [background, setBackground] = useState(false);

    /*
    const sectionRef = useRef(null);
    
    useEffect(() => {
        let transitionY = 1800;
        if (sectionRef.current) {
            const rect : DOMRect = sectionRef.current.getBoundingClientRect();
            // You can now use rect to position other elements or for any other purpose
            transitionY = rect.top;
            console.log(transitionY);
        
        }
        
        function onScroll () {
            if (window.scrollY > transitionY){
                setBackground(true)
            }
            else if (window.scrollY < transitionY){
                setBackground(false);
            }
        }
        document.addEventListener("scroll", onScroll);
    }, []);
    */
    const SectionTransition = () => {
        return ( <div className="w-full h-[40vh]" /> )
        
    }
        


    const VarsityYearsSection = () => {
        return(
            <div className={`transition-opacity ease-in-out duration-1000 ${background === false ? "opacity-100" : "opacity-0"}`}>
                <h2 className="font-medium text-4xl">The Varsity Years</h2>
                <div className="flex flex-row flex-wrap lg:gap-10 mb-3">
                    <div className="xl:flex flex-col lg:w-[45%]">
                        <hr className="border-black mb-3" />
                        <p>
                            The beginnings of Stony Brook University's Crew program pre-date the creation of the Stony Brook Campus.
                            The inception of Crew at what was then the State University of New York, Long Island Center took place while the campus was still located in Oyster Bay.
                        </p>
                        <br />
                        <p>
                            According to alumni Pat Crean (1961), the team was founded as a result of a simple letter from Mr. Allan Borghard. 
                            Written on July 9th, 1958, the letter suggested the formation of a crew program at what was then simply called "State University", and Borghard offered himself as the team's first coach [1].
                        </p>
                    </div>
    
                    <div className="flex-1 self-center flex justify-center">
                        <img 
                            src="/assets/History/historypic1.jpg" 
                            alt="Black and White Photo of a SBU Crew member holding an oar." 
                            className="object-cover rounded-sm my-3"
                        />
                    </div>
                </div>
                <p>
                    And from such humble origins came humble beginnings. The team at the time only had one shell, donated by Non-Pariel Rowing on the Harlem River. 
                    To complicate things further, the shell was damaged during transport, forcing the team's very first act to be the repair of its only boat [1].
                    <br />
                    <br />
                    By spring 1959 the program at Oyster Bay had two crews and one shell. Thanks to a timely donation by Rutgers University Crew, a second shell was added, only to become the only shell after the demise of the team's first. Regardless, the team persevered and on April 4th competed for the first time, a landslide defeat at the hands of St. John's University. Despite the loss, State University approved further collegiate competition and competed yet again, dropping a decision against Iona College. A third match showed the team's potential, as the team finished in a "dead heat" against Clark University.
                    To cap the season, the campus at Oyster Bay began the first annual North Shore Invitational Regatta [1].
                    <br />
                    <br />
                    Crew continued to develop as the campus was relocated to Stony Brook.
                    According to archived articles from the New York Times the team consistently placed in the top 3 at the Metropolitan Championships, often coming as close as a half a length from the win, as it did in 1968 against Iona College [2]. The team peaked in the late 1970's, earning the Metropolitan Championship win in 1976. While the varsity program disbanded by the end of the 1970's due to inadequate means to support, the program raised three to the Stony Brook Athletic Hall of Fame: John Brisson Jr. (1976), Jonathan Cayle (1976), and Denise Logan-Heuser (1977).
                </p>
                <div className=" bg-[#fdfef4d6] rounded-b-sm w-[90%] mx-auto my-3">
                    <img src="/assets/History/SBU Crew 1967.jpeg" alt="Group Photo of the 1967 SBU Rowing team." className="w-full" />
                    <figcaption className="text-center italic text-base text-gray-900">The 1967 Stony Brook Crew</figcaption>
                </div>
            </div>
        );
    }
    
    
    
    const ClubYears = () => {
        return(
            <div className="font-lato font-light">
            <h2 className="font-medium text-4xl font-lora">The Club Years</h2>
            <div className="lg:flex flex-row flex-wrap gap-5 mb-3">
                <div className="flex-1">
                    <hr className="border-white mb-3"/>
                    <p>
                    While the tenure of crew as an official varsity program at Stony Brook ended in the 1970's, the team did not cease to exist for long. 
                    Thanks to the efforts of such alumni as Michael Chang (2002), crew re-emerged at Stony Brook in the late 1990's.
                    <br /> <br/>
                    The Stony Brook Crew program has certainly seen it's share of ups and downs. Maintaining adequate numbers of rowers to remain competitive, hiring and retaining coaches and even such basic things as finding places to row became uncertain. After the 2009-2010 season, the Stony Brook team lost the majority of it's rowers as well as it's e-board.
                    </p>
                </div>
                <div className="flex-1 self-center ">
                    <img 
                        src="/assets/History/NYStatesRegatta2023Boats.jpeg"
                        alt="The sterns of 3 racing shells with a blue sky behind them."
                        className="object-cover rounded-lg drop-shadow-element"
                    />
                </div>
            </div>
            <br />
            <p>
                Still, the Seawolves refused to go quietly into the night.
                A new board of inexperienced yet determined rowers banded together and fought to keep the team alive.
                They sought out and hired three amazing new coaches, they managed to recruit a large number of enthusiastic novice men and women and are currently rowing every morning at 5:15am on the beautiful water of Stony Brook Harbor.
                <br /> <br />
                In 2015, the team moved from Stony Brook Harbor to the Port Jefferson Yacht Club where they currently reside.
            </p>
            <div className="my-5">
                <img
                    src="/assets/History/BraxtonRegatta2023.JPG"
                    alt="Stony Brook Crew members walking away, surrounded by fall-colored leaves and other regatta goers."
                    className="w-[97%] mx-auto rounded-2xl drop-shadow-element"
                />
                <figcaption className="text-center text-lg font-lato font-light text-[#dedede] italic">Bill Braxton Memorial Regatta, Fall 2023</figcaption>
            </div>
            <div>
                <h3 className="text-xl font-lora">References</h3>
                <ol className="text-lg">
                    <li>[1] "The History of Stony Brook Crew" The Founders Group, Stony Brook Alumni Association.</li>
                    <li>[2] <a  href="https://www.nytimes.com/1968/05/05/archives/iona-eight-keeps-met-rowing-title-scores-by-halflength-over-stony.html" 
                            target="blank"
                            className="underline hover:text-[#5eb7ff]">
                            "Iona Eight Keeps MET Rowing Title; Scores Half-Length Win Over Stony Brook in Race Here"</a> The New York Times.</li>
                </ol>
            </div>
            
            
            </div>
        );
    }
    

    return (
        <Layout>
            {/* Landing Image */}
            <header className={`${styles.landing} h-[75vh] lg:h-[93vh]`} />
            {/* Main Information */}
            <main className={`flex min-h-screen flex-col text-lg 2xl:text-xl font-lora fade-in-element transition-colors duration-300 ${background === true ? "bg-[#c84444] text-white" : "bg-white"}`} >
                <div className="w-[85%] xl:w-[70%] mx-auto my-5 ">
                    <VarsityYearsSection />
                    <SectionTransition />
                    <ClubYears />
                    {/* Create a div component that updates the body by comparing its coordinates with getBoundingClientRect and compare the bottom w scrollY */}
                </div>

            </main>

        </Layout>
    );
}