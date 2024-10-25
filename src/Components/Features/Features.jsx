import logo1 from '../../assets/puzzle.png';
import logo2 from '../../assets/lampe_2.png';
import logo3 from '../../assets/etoile_2.png';


const Features = () => {
    return (
        <div>
           <div className='lg:flex justify-around '>
              <div>
                <img className='mb-3' src={logo1} alt="" />
                <h2 className='text-2xl font-rubik font-semibold mb-2'>Multi-functional Products</h2>

                <p className='text-slate-400'>By combining multiple technologies into one appliance, you <br /> can do more for less money and less space.</p>
              </div>
              <div>
                <img className='mb-3' src={logo2} alt="" />
                <h2 className='text-2xl font-rubik font-semibold mb-2'>Innovative products to improve everyday life</h2>

                <p className='text-slate-400'>Our talented team has designed products that have received <br /> an average customer rating of over 4.8 out of 5.</p>
              </div>
              <div>
                <img className='mb-3' src={logo3} alt="" />
                <h2 className='text-2xl font-rubik font-semibold mb-2'>Better for you</h2>

                <p className='text-slate-400'>Our products not only protect your home, but also make it <br /> more enjoyable for the whole family.</p>
              </div>
            </div> 
        </div>
    );
};

export default Features;