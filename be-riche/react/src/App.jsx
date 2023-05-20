import Dashboard from "./compenent/DashBoard"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./compenent/DashBoard";
import Login from "./compenent/Login";
import Home from "./compenent/Home";
export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
<Footer />
    </BrowserRouter>
  )
}
