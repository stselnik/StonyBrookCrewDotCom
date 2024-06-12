import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

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
        {id: 4, text:'Prospective Members', path:'/prospectiverowers'},
    ];

    const DesktopNavbar = () => {
        return(
            <ul className="hidden md:flex justify-center">
                {pages.map(page => (
                    <Link key={page.id} href={page.path} className="p-5 text-[#fffbfb] font-light drop-shadow-md hover:underline underline-offset-4 hover:text-[#ff2828]">
                        {page.text}
                    </Link>
                ))}
            </ul>
        );
    }

    const MobileNavToggle = () => {
        return(
            <div onClick={toggleMobileNav} className="block mr-10 ml-auto md:hidden z-50">
                {mobileNav ? <CloseIcon /> : <MenuIcon />}
            </div>      
        )
    }

    let MobileNavMenu = () => {
        return (
            <div>
                <ul className={mobileNav 
                ? 'flex flex-col fixed md:hidden right-0 top-0 w-[40%] h-full bg-white transition ease-in-out duration-500'
                : 'flex flex-col w-[40%] left-[100%] transition ease-in-out duration-500 fixed top-0 bottom-0'
                }>
                {pages.map(page => (
                    <>
                    <Link key={page.id} href={page.path} className="p-8 text-black hover:underline underline-offset-4 hover:text-[#ff2828]">
                        {page.text}
                    </Link>
                    <hr />
                    </>
                    
                    
                ))}
                </ul> 
            </div>
        );
    }

    return (
        <nav className="absolute flex justify-center items-center h-[4rem] w-full my-3 text-white z-50">
            <Link href='/' className="absolute left-3">
                <img src="/assets/SBU Crew Logo Transparent.png" className="h-[3.6rem]" alt="SBUCrew" />  
            </Link>
            <DesktopNavbar />
            <MobileNavToggle />
            <MobileNavMenu />
        </nav>
    )
}

export default NavigationBar;