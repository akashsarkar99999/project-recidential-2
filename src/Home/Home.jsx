import Navbar from "../Components/Navbar/Navbar";
import Slider from "../Components/Slider/Slider";
import Marquee from "react-fast-marquee";
import marpic1 from '../assets/beautiful-shot-big-farmhouse-clear-blue-sky.jpg'
import marpic2 from '../assets/3d-house-model-with-modern-architecture.jpg'
import marpic3 from '../assets/ai-generated-house-design.jpg'
import marpic4 from '../assets/download (1).jpg'
import '../Home/Home.css'
import { BsStars } from "react-icons/bs";
import ShopByHome from "../Components/ShopBYHome/ShopByHome";
import OurValue from "../Components/OurValue/OurValue";
import Features from "../Components/Features/Features";
import Footer from "../Components/Footer/Footer";
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <div className="">

<Helmet>
        <title>Home</title>
        
    </Helmet>
            
            <div className=" mx-auto h-[600px] relative top-[-80px]">
            <Slider></Slider>
            <Marquee className="bg-[#808080] h-20 " speed={200} >
                <BsStars className="text-4xl text-white"/>
               <p className="text-4xl mr-10">SALE ENDS AT MIDNIGHT</p>

               <BsStars className="text-4xl text-white"/>
               <p className="text-4xl mr-10">SALE ENDS AT MIDNIGHT</p>

               <BsStars className="text-4xl text-white"/>
               <p className="text-4xl mr-10">SALE ENDS AT MIDNIGHT</p>

               <BsStars className="text-4xl text-white"/>
               <p className="text-4xl mr-10">SALE ENDS AT MIDNIGHT</p>
            </Marquee>

            <div className="max-w-7xl mx-auto mb-10 mt-5 flex justify-center">
            <ShopByHome></ShopByHome>
            </div>
            
                <OurValue></OurValue>

                <div className="mt-8">
                <Features></Features>
                </div>

                <Footer></Footer>
                
            
            </div>
        </div>
    );
};

export default Home;