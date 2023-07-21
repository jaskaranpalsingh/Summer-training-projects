import "./App.css";
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const [logIn, setIsLoggedIn] = useState(false);
  return (
    <div className=" w-screen min-h-screen bg-richblack-900 font-inter">
      <Navbar logIn={logIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes >
        <Route path="/" element={<Home logIn={logIn}/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element={
        <PrivateRoute logIn={logIn}><Dashboard /> </PrivateRoute>} />
        <Route path="*" element={<h1>Not Found Pages</h1>} />
      </Routes>
    </div>
  );
}

export default App;
