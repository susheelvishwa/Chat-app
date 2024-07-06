import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./style.scss";
import "./module/user";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="nav">
          <Link to="/">Register</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Home">Home</Link>
        </div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
