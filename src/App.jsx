import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar"; 
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/SignIn";
import Register from "./pages/Register";


const App=()=>{
    return (
        <BrowserRouter>
        <div className=" bg-gray-800 text-2xl w-screen h-screen overflow-hidden " >
            <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<Signin/>}/>
            <Route path="/services" element={<Signin/>}/>
            <Route path="/contact" element={<Signin/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        </div>
        </BrowserRouter>
    )
}

const container =document.getElementById("root");
const root=createRoot(container);
root.render(<App/>)