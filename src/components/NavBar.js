import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
    return (
<header className="bg-purple-900">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-pink-800 text-4xl font-bold cursive tracking-widest"
          >
            Lavender Irons
          </NavLink>

          <NavLink
            to="/post"
            activeClassName="text-blue-300 bg-blue-900"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-blue-300 bg-blue-900"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-blue-300 bg-blue-900"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon url="https://www.linkedin.com/in/lavender-irons-908828117/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35 }}/>
            <SocialIcon url="https://github.com/Lavender-Irons" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35 }}/>
        </div>
      </div>
    </header>
  );
}