

import React from "react";

export const Logoing = () => {
  const reviews = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOuGLG3j30xk8c2iVoXkrTyo7FyAN9YLk_A&s=10",
      text: "This platform helped me land my first tech job!",
      name: "Rahul",
    },
    {
      img: "https://img.freepik.com/free-photo/young-happy-student-smiling_23-2148168572.jpg",
      text: "The courses are well structured and easy to follow.",
      name: "Sneha",
    },
    {
      img: "https://img.freepik.com/free-photo/portrait-happy-smiling-teenage-student-girl_53876-40309.jpg",
      text: "Mentors are very supportive and experienced.",
      name: "Arjun",
    },
  ];

  return (
    <div className="py-16 px-6 bg-gray-100 text-center">
     
      <h2 className="text-3xl font-bold mb-10">Student Reviews</h2>

  
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center"
          >
           
            <img
              src={item.img}
              alt={item.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />

            
            <p className="italic text-gray-600">"{item.text}"</p>

          
            <h4 className="mt-4 font-semibold text-orange-500">- {item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};