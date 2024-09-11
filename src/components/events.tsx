import { useState } from "react";
import { CollapseIcon, ExpandIcon } from "./icons";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({subsets: ['latin']});

const Event = (event: {name: string; date: Date; time: string; location: string; directions: string; desc: string; calendar:string}) => {
    /* Calendar link can be found by creating a Google Calendar Event and copying the link from 'Invite via link'. */

    const [expand, setExpand] = useState(false);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December']


    /**
     * @constructor formatDirections(address):
     * @param {string} address - The street address of the location.
     * @returns {string} link - A usable google maps link to get directions to the address.
        Takes a street address in the form of a string in the following format and formats it into a usable Google Maps Link.
        Address Format: 'NUMBER Street, City, State ZIP'
        (e.g. '100 Nicolls Rd, Stony Brook, NY 11794' or '15-5 Bennetts Rd, Setauket- East Setauket, NY 11733')
        You can copy the exact street address that Google gives you and it should work.
    */
    const formatDirections = (address: string) => {
        let link = 'https://www.google.com/maps/place/';
        const separated_address =address.split(" ");
        for (let i = 0; i < separated_address.length; i++){
            link = link + separated_address[i];
            if (i + 1 < separated_address.length){
                link = link + '+';
            }
        }
        return link;
    }

    return(
            <div key={event.date.getTime()} className="bg-[#ffffff09] rounded-2xl border-solid border-[2px] border-[#FFDADA] hover:border-white drop-shadow-element">
                { /* Main Event Information */ }
                <div className="flex flex-row w-full h-20 cursor-pointer" onClick={() => setExpand(!expand)}>
                    <div className="flex flex-col justify-center w-full h-full p-2 md:p-5 ">
                        <h3 className="text-xl sm:text-2xl font-light text-white">{event.name}</h3>
                        <div className="hidden sm:flex flex-row gap-5 text-sm md:text-md lg:text-lg text-[#ffffff] font-light">
                            <p className="">{days[event.date.getDay()]}, {months[event.date.getMonth()]} {event.date.getDate()}, {event.date.getFullYear()}</p>
                            <p className="">Location: {event.location}</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-7">
                        {expand ? <CollapseIcon /> : <ExpandIcon />}
                    </div>
                </div>
                { /* Expanded Event Information */ }
                <div className={expand ? "flex flex-col px-2 sm:px-5 text-sm md:text-md lg:text-lg text-[#ffffff] font-light" : "hidden"}>
                    <hr className="border-white mb-2"/>
                    <p className="sm:hidden">{days[event.date.getDay()]}, {months[event.date.getMonth()]} {event.date.getDate()}, {event.date.getFullYear()}</p>
                    <p className={event.time.length != 0 ? "" : "hidden"}>Time: {event.time}</p>
                    <p className="sm:hidden">Location: {event.location}</p>
                    <p className={event.directions.length != 0 ? "" : "hidden"}>Directions: <a href={formatDirections(event.directions)} className="text-[#4690ff] hover:underline" target="blank">{event.directions}</a></p>
                    <p className={event.desc.length != 0 ? "p-3 italic" : "hidden"}>{event.desc}</p>
                    <div className={event.calendar.length != 0 ? "mx-auto bg-[#f2fff700] p-1 m-2 rounded-lg" : "hidden"}>
                        <a href={event.calendar} className={open_sans.className + " underline hover:text-[#4690ff]"} target="blank">Add to Google Calendar</a>
                    </div>
                </div>
            </div>
    );

}

const Events = () => {

    const events = [
        {name: "Head of the Fish - Saratoga Regatta", date: new Date('October 26, 2024'), time: "",location: "Fish Creek, Saratoga Springs, NY", directions:"684 N Country Rd, Setauket- East Setauket, NY 11733", desc: "", calendar:"https://calendar.app.google/9jkTmUsnaCxfvWGP7"},
        {name: "Stony Brook Crew Alumni Day", date: new Date('November 2, 2024'), time:"9:00AM - 11:30AM", location: "Port Jefferson Yacht Club", directions:"2 Pass Way, Port Jefferson, NY 11777", desc: "Calling all Alumni of SBU Crew! Alumni Breakfast Day is being held on November 2nd, 2024 (tentatively) at the Port Jefferson Yacht Club Clubhouse from 9AM-11:30AM. Enjoy having a tasty meal while catching up with your fellow SBU Crew alumni! Save the date and RSVP by email now: sbu.crew.alumni@gmail.com. We can't wait to see you there!", calendar:"https://calendar.app.google/9jkTmUsnaCxfvWGP7"},
        {name: "First Official Practice", date: new Date('September 4, 2024'), time:"6:00AM", location: "Multi-Activity Courts (MAC) - Walter J. Hawrys Campus Recreation Center", directions: "39 John S. Toll Drive, Stony Brook, NY 11794", desc:"Come join us for our first official practice of the Fall 2024 semester! Practice is open to all current undergraduate and graduate students of Stony Brook University. No experience is required so feel free to join if you're interested in joining, experienced, or just curious! You can find us at the Campus Rec Center downstairs in the MAC Courts at 6am. See you there!", calendar:""},
        {name: "The Poughkeespie Regatta", date: new Date('October 5, 2024'), time:"8:00AM", location: "Hudson River Rowing Association", directions: "270 N Water St", desc:"Come experience our first regatta of the fall where we row on the scenic Hudson River", calendar:""},
        {name: "Frostbite Regatta", date: new Date('November 9, 2024'), time:"TDB", location: "Mercer lake, West windsor, NJ", directions: "334 S. Post Road, West Windsor, NJ", desc:"Come experience our first regatta of the weekend at the frostbite regatta in West Windsor, NJ", calendar:""},
        {name: "Braxton Memorial Regatta", date: new Date('November 10, 2024'), time:"TDB", location: "Mercer lake, West windsor, NJ", directions: "334 S. Post Road, West Windsor, NJ", desc:"Come experience our second regatta of the weekend at the frostbite regatta in West Windsor, NJ", calendar:""},
    ];

    // Sorts Events into chronological order.
    events.sort(function(a, b) {
        return a.date.getTime() - b.date.getTime()
    });

    // Filter out any events that have already passed just in case.
    // ***Need to work on not excluding the day of the event.
    const upcomingEvents = events.filter(event => event.date.getTime() > Date.now());

    return(
        <>
        <ul className="flex flex-col gap-3 fade-in-element">
            {upcomingEvents.map(event => (
                Event(event)
            ))}
        </ul>
        <div className={upcomingEvents.length !== 0 ? "hidden" : "text-xl font-light text-white px-3 text-center"}>
            <p>There are currently no events scheduled for the rest of the season.</p>
            <p>We will update this section with all the info regarding our upcoming regattas, alumni days, and other events as soon as days and locations are confirmed!</p>
        </div>
        </>

    );
}

export default Events;
