import { Link, NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'
import { FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const Navbar = () => {

  const {user, logOut} =useContext(AuthContext);

  const handleSignOut = e =>{
logOut()
.then(result =>{
  console.log(result)
})
.catch(error=>{
  console.log(error)
})
  }

    const navlinks = <div className=" gap-4 flex">
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink>About Us</NavLink></li>
    <li><NavLink>Update Profile</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
    </div>

    const resnav = <>
    <li><NavLink>Home</NavLink></li>
    <li><NavLink>About Us</NavLink></li>
    <PrivateRoute>
    <li><NavLink to='/update'>Update Profile</NavLink></li>
    </PrivateRoute>
    <li><NavLink>User Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 navi">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {resnav}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-dynapuff">Home Haven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end gap-4">

   {
    user ? <>
       <FaUserAlt className="rounded-full border text-4xl text-black"/>
       <button onClick={handleSignOut} className="btn btn-ghost btn-outline ">Log Out</button>    
    </>
    : <Link to='/login'><button className="btn btn-ghost btn-outline ">Login</button></Link>
   } 


  </div>
</div>
    );
};

export default Navbar;