import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Slider from "../Components/Slider/Slider";


const Root = () => {
    return (
        <div className="mb-5">
            
            <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;