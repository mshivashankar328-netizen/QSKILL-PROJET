
import React from "react";

const Home = () => {
  const features = [
    {
      icon: "🔥",
      title: "Industry Mentors",
      desc: "Learn directly from experienced professionals working in top companies.",
    },
    {
      icon: "💼",
      title: "Placement Support",
      desc: "Get resume guidance, mock interviews, and job assistance.",
    },
    {
      icon: "📚",
      title: "Structured Learning",
      desc: "Step-by-step curriculum designed for real-world success.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-20 px-6 text-center">
      
      
      <h2 className="text-4xl font-extrabold mb-4">
        Why <span className="text-orange-500">Choose Us?</span>
      </h2>

      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        We provide everything you need to build a successful tech career — from mentorship to placement.
      </p>

    
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-3"
          >
          
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-3xl mb-5">
              {item.icon}
            </div>

        
            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

          
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;