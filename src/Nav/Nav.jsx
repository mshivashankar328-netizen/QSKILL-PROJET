

import React from "react";

export const Nav = () => {
  return (
    <div>
      
      <div className="text-center py-24 px-6 bg-gradient-to-r from-orange-50 to-orange-100">
        
       
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Learn Coding from{"  "}
          <span className="text-orange-500">Industry Experts</span>
        </h2>

        <p className="mb-8 text-gray-600 text-lg max-w-2xl mx-auto">
          Master Data Structures, Web Development, and build real-world projects
          to kickstart your tech career.
        </p>

      
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => alert("Exploring courses...")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Explore Courses
          </button>

          <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};