import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const alldata=useSelector((state)=>state.app.user);
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between  items-center px-6">
       

        <ul className="flex space-x-6">
          <li>
            <Link
              to="/create"
              className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
            >
              Create Post({alldata.length})
            </Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
