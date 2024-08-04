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
                    <a href={Icon.link} target="blank" className="cursor-pointer fill-white text-white hover:bg-[#ffffff2f] p-2 rounded-full">
                         <Icon.icon />
                    </a>
                ))}
                
            </div>

        );
    }


    return(
        <footer className="flex flex-col items-center text-center w-full bg-[#c84444] pt-10 pb-5 text-white">
            <FooterIcons />
            <p>© 2024 - Crew at Stony Brook University</p>
        </footer>
    );
}

export default Footer;