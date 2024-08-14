import Image from "next/image";
/*
The EBoard Component
*/

const EBoard = () => {

  const members = [
    { name: "Harrison Bohrer", role: "President", major: "Environmental Studies", imgpath: "/assets/About Us/Harry.jpeg" },
    { name: "Patrick Muller", role: "Vice President", major: "Computer Science", imgpath: "/assets/About Us/patrick.jpeg" },
    { name: "Victoria Rocas", role: "Secretary", major: "Envronmental Studies?", imgpath: "/assets/About Us/Harrison.jpg" },
    { name: "Dominic Stanz", role: "Treasurer", major: "Biology & Economics", imgpath: "/assets/About Us/Harrison.jpg" },
    { name: "Alexis White", role: "Equipment Manager", major: "Civil Engineering", imgpath: "/assets/About Us/Harrison.jpg" },
    { name: "Taryn Wilcken", role: "Equipment Manager", major: "Applied Mathematics & Statistics", imgpath: "/assets/About Us/Harrison.jpg" },
    { name: "Tobias Smith", role: "Equipment Manager", major: "Applied Mathematics & Statistics", imgpath: "/assets/About Us/Harrison.jpg" },
    { name: "Nino Della Porta", role: "Fundraising Chair & Event Coordinator", major: "Electrical Engineering", imgpath: "/assets/About Us/Harrison.jpg" },
  ];

  /* Populates div with the profile for each E-Board Member*/
  const EBoard = () => {
    return (
      <div className="flex flex-wrap gap-5 justify-center">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col py-5 px-5 rounded-3xl">
            <Image src={member.imgpath} alt={"Profile of " + member.name} width={0} height={0} className="rounded-full w-[35vh] h-[35vh] self-center drop-shadow-xl object-cover" />
            <h2 className="text-3xl">{member.name}</h2>
            <h3 className="text-2xl font-light text-start overflow-x-visible max-w-64 2xl:max-w-none">{member.role}</h3>
            <hr className="mb-3 border-red-800" />
            <p className="text-md font-light">Major: {member.major}</p>
            <p className="text-md font-light">Favorite Boat: The Gooch</p>
          </div>
        ))}
      </div>
    );
  }


  return (
    <EBoard />
  );

}

export default EBoard;
