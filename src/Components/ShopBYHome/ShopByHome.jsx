import bg1 from '../../assets/bathroom.webp'
import bg2 from '../../assets/livingroom.webp'
import bg3 from '../../assets/kitchen.webp'

const ShopByHome = () => {
    return (
        <div>
            <div className='lg:flex gap-5 text-center'>
                <div className='bg-bg-1 w-[500px] h-[250px] rounded-lg mb-5 flex items-center justify-center'>
                    <p className='text-6xl font-rubik font-bold text-white '>Bathroom</p></div>


                <div className='bg-bg-2 w-[500px] h-[250px] rounded-lg mb-5 flex items-center justify-center'><p className='text-6xl font-rubik font-bold text-white '>Living Room</p></div>
                <div className='bg-bg-3 w-[500px] h-[250px] rounded-lg mb-5 flex items-center justify-center'><p className='text-6xl font-rubik font-bold text-white '>Kitchen</p></div>
            </div>
        </div>
    );
};

export default ShopByHome;