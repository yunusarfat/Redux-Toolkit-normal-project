import "./App.css";
import Navbar from "./components/navbar";
import Form from "./components/form";
import Read from "./components/read";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Header Section */}
        <header className="text-center py-6">
          <h1 className="text-blue-600 text-4xl font-extrabold">
            Redux Toolkit CRUD App 🚀
          </h1>
          <p className="text-lg mt-3 max-w-2xl mx-auto">
            This is a React.js application using Redux Toolkit for state 
            management. It supports **Create & Read** operations with **MockAPI**, 
            handled via `createAsyncThunk`.
          </p>
        </header>

        {/* Navigation Bar */}
        <Navbar />

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 my-6">
          <Link to="/form">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md">
              ➕ Create Post
            </button>
          </Link>
          <Link to="/read">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md">
              📜 All Posts
            </button>
          </Link>
        </div>

        {/* Main Routes */}
        <Routes>
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/read" element={<Read />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
