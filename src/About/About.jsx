

import React from "react";
import { FaCode, FaProjectDiagram, FaBrain } from "react-icons/fa";

export const About = () => {
  const courses = [
    {
      title: "Full Stack Web Development",
      desc: "Build modern web apps using MERN stack with real-world projects.",
      icon: <FaCode className="text-orange-500 text-3xl mb-4" />,
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Master problem-solving skills and crack top tech interviews.",
      icon: <FaProjectDiagram className="text-orange-500 text-3xl mb-4" />,
    },
    {
      title: "Machine Learning",
      desc: "Learn AI concepts and build intelligent systems using Python.",
      icon: <FaBrain className="text-orange-500 text-3xl mb-4" />,
    },
  ];

  return (
    <div className="py-16 px-6 bg-gray-50">
     
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Courses
      </h2>

     
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <div
            key={i}
            className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center"
          >
            {course.icon}

            <h3 className="text-lg font-semibold">{course.title}</h3>

            <p className="text-sm text-gray-500 mt-3">
              {course.desc}
            </p>

            <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition duration-300">
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;