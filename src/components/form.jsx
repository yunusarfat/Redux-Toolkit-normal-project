import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../feature/userDetailSlice";
import { useNavigate } from "react-router-dom";
function Form() {
    const [users,setUsers]=useState({});
    const dispatch=useDispatch();
    const nevigate=useNavigate();
    const getUserData=(e)=>
    {
       setUsers({...users,[e.target.value]:e.target.value});
       console.log(users);
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log(users);
        dispatch(createUser(users));
        nevigate("/read");

    }
  return (
    <div className="gap-4 p-4 flex flex-col items-center">
      <h1 className="text-center">Enter your data</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <input
            type="text"
            name="name"
            onChange={getUserData}
            className="border border-collapse"
            placeholder="Enter your name"
          />
        </div>
        <div className="mt-4">
          <input
            type="email"
            name="email"
            onChange={getUserData}
            className="border border-collapse"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-4">
          <input
            type="number"
            name="age"
            onChange={getUserData}
            className="border border-collapse"
            placeholder="Enter your age"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              onChange={getUserData}
              name="gender"
              value="male"
              defaultChecked
              className="w-4 h-4"
            />
            <span>Male</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              onChange={getUserData}
              name="gender"
              value="female"
              className="w-4 h-4"
            />
            <span>Female</span>
          </label>
        </div>

        <div className="mt-4 px-15">
          <button className="px-2 text-center  bg-blue-400 rounded  " type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
