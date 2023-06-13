import Navbar from "./components/Navbar";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";
import { useState, useEffect } from "react";
import { checkToken } from "./api/auth";
import UserContext from "./context/UserContext";
import UserProfile from "./pages/UserProfile";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<Users />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
