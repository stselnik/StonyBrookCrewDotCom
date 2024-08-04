import Link from "next/link";
import { InstagramIcon, LinkedinIcon, LinkIcon } from "./icons";

const Footer = () => {

    const FooterIcons = () => {
        const icons = [
            {icon: InstagramIcon, link: "https://www.instagram.com/stonybrookrowing/"},
            {icon: LinkIcon ,link: "https://linktr.ee/usbcrew"}, 
            {icon: LinkedinIcon, link: "https://www.linkedin.com/in/crew-at-stony-brook-university-1a054398/"}
        ]

        return(
            <div className="flex flex-row gap-10 my-auto mb-6">
                {icons.map((Icon) => (
                    <div className="cursor-pointer fill-white hover:fill-gray-200 hover:text-gray-200">
                        <a href={Icon.link} target="blank"><Icon.icon /></a>
                    </div>
                ))}
                
            </div>

        );
    }


    return(
        <footer className="flex flex-col items-center text-center w-full bg-[#c84444] pt-16 pb-5 text-white">
            <FooterIcons />
            <p className="w-full">© 2024 - Crew at Stony Brook University</p>
        </footer>
    );
}

export default Footer;