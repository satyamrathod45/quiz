import React from "react";

const Events = () => {
  const events = [
    {
      title: "Photoshoot-2024",
      description:
        "Join us for the biggest anime convention of the year with cosplay contests, panels, and exclusive merchandise.",
      image: "https://www.animephproject.com/wp-content/uploads/2012/03/ozine-fest-2012-poster.jpg", 
    },
    {
      title: "Fan Meetup - Nagpur",
      description:
        "A special fan meetup event where anime lovers gather to talk about their favorite shows, enjoy games, and more!",
      image: "https://img.freepik.com/premium-psd/poster-about-cosplay-night-party-displaying-anime-woman_65473-12.jpg", 
    },
    {
      title: "Virtual Anime - Discord",
      description:
        "Watch and discuss anime with fellow enthusiasts in this online marathon event. Get ready for fun trivia and surprises.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/c5a541270265.56008aca70bf3.jpg", 
    },
  ];

  return (
    <section id="events" className="py-20 bg-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
             
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <a
                  href="#"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

