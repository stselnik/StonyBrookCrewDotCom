import Link from "next/link";
import { useState } from "react";

const NavigationBar = () => {

    // State to manage whether the mobile menu is toggled.
    const [mobileNav, setMobileNav] = useState(false);

    // Toggle function to handle opening and closing the mobile nav menu. 
    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
    };


    // Array containing info for each page.
    const pages = [
        {id: 1, text:'Homepage', path:'/'},
        {id: 2, text:'About Us', path: '/aboutus'},
        {id: 3, text:'History', path: '/history'},
        {id: 4, text:'Prospective Rowers', path:'/prospectiverowers'}
    ];


    return (
        <nav className="absolute flex justify-center items-center h-[4rem] w-[100%] mx-3 my-3 text-white">
            <Link href='/' className="absolute left-0">
                <img src="/assets/SBU Crew Logo Transparent.png" className="h-[3.6rem]" alt="SBUCrew" />  
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden sm:flex justify-center ">
                {pages.map(page => (
                    <Link key={page.id} href={page.path} className="p-5 hover:underline underline-offset-4 hover:text-[#ff2828]">
                        {page.text}
                    </Link>
                ))}
            </ul>




            
        </nav>
    )
}

export default NavigationBar;