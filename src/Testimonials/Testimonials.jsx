import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Testimonials = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
        
      
        <div>
          <h3 className="flex items-center justify-center md:justify-start gap-2 font-bold text-2xl mb-3 text-orange-500">
  Coding Ninjas
  <img
    src="data:image/jpeg;base64,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"
    alt="logo"
    className="w-8 h-8 object-contain rounded"
  />
       </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Learn coding from scratch with real-world projects, expert
            mentorship, and structured courses designed to make you job-ready.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Courses", "Practice", "Events", "Blog"].map((item) => (
              <li
                key={item}
                className="hover:text-orange-500 cursor-pointer transition duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

      
        <div>
          <h3 className="font-bold text-xl mb-3">Contact</h3>
          <p className="text-gray-400 text-sml mb-2">
            Email: support@codingninjas.com
          </p>
          <p className="text-gray-400 text-sm mb-4">
            Phone: +91 123 456 7890
          </p>

         
          <div className="flex justify-center md:justify-start gap-4 text-lg">
            <FaFacebook className="hover:text-orange-500 cursor-pointer transition" />
            <FaTwitter className="hover:text-orange-500 cursor-pointer transition" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer transition" />
            <FaLinkedin className="hover:text-orange-500 cursor-pointer transition" />
          </div>
        </div>
      </div>

     
      <div className="mt-10 border-t border-gray-700 pt-5 text-gray-500 text-sm text-center">
        © {year} Coding Ninjas Clone. All rights reserved.
      </div>
    </footer>
  );
};