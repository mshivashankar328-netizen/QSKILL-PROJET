import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div id="loging">
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
     
      <h2
        className="text-xl font-bold text-orange-500 cursor-pointer"
        onClick={() => navigate("/home")}
      >
        Coding Ninjas
      </h2>

      <ul className="flex gap-6 items-center">
        <li
          className="cursor-pointer hover:text-orange-500 transition"
          onClick={() => navigate("/about")}
        >
          Courses
        </li>
        <li className="cursor-pointer hover:text-orange-500 transition">
          Practice
        </li>
        <li className="cursor-pointer hover:text-orange-500 transition">
          Events
        </li>

        <li>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded transition duration-300"
          >
            Login
          </button>
        </li>
      </ul>
    </nav>
    </div>
  );
};

// export default Assets;