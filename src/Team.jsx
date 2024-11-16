import React from "react";

const teamMembers = [
  {
    name: "Naruto Uzumaki",
    role: "Founder & CEO",
    description: "John is the visionary behind our community, dedicated to building a space for anime fans to come together.",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/04/naruto-genjutsu.jpg", // Replace with team member images
  },
  {
    name: "Shikamaru Nara",
    role: "Community Manager",
    description: "Jane is passionate about connecting anime fans and organizing events that bring our community closer.",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/02/Shikamaru-hand-sign.jpg", // Replace with team member images
  },
  {
    name: "Sasuke Uchiha",
    role: "Event Coordinator",
    description: "Chris works tirelessly to organize and manage our events, ensuring everything runs smoothly.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Ml67pFyDUglzvcBgFNJunKwo2rApmKrPRw&s", // Replace with team member images
  },
];

const Team = () => {
  return (
    <section className="bg-blue-100 py-16 px-8" id="team">
      
      <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">Meet Our Team</h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={member.image} 
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{member.role}</p>
            <p className="text-gray-700">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
