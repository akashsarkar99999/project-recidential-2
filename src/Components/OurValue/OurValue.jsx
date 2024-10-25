import lamp from '../../assets/lamp.webp';

const OurValue = () => {
    return (
        <div>
            
            <div className='lg:flex items-center'>
                <div className='lg:w-[36%] bg-red-300'>
                    <img className='h-full w-full' src={lamp} alt="" />
                </div>
                <div className='lg:w-[64%] h-[680px] bg-[#ffefd5] text-center items-center flex justify-center'>
                    <div>
                    <h2 className='font-rubik text-6xl text-black font-bold'>Our Value</h2>
                    <p className='font-rubik font-semibold text-2xl mt-5'>Our company was founded with the vision to make everyday life more practical, innovative, and comfortable for our customers. We offer a wide range of products for every room in the house, carefully curated to enhance functionality and style. Our practicality is reflected in the smart design of our products, making them easy to use and maintain. Innovation is at the heart of our company, always looking for new and exciting ways to improve the products we offer, using the latest technology and materials.</p>

                    <p className='mt-5 text-2xl font-rubik text-black'>By combining multiple technologies into one appliance, you can do more for less money and less space.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurValue;