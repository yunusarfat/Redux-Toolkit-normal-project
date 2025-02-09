import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../feature/userDetailSlice";

function Read() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h1 className="text-center text-xl font-semibold text-gray-700">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center text-red-500 font-semibold">Error: {error}</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-center text-3xl font-bold text-blue-600 mb-6">User List</h1>

      {user?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {user.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg p-5 border">
              <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-500">ID: {item.id}</p>
              <p className="text-gray-500">AGE: {item.age}</p>
             
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No users found</p>
      )}
    </div>
  );
}

export default Read;
