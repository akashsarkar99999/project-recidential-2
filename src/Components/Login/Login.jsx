
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

  const {logIn} = useContext(AuthContext)

  const handleLogin = e =>{
   
     e.preventDefault();
     const form = new FormData(e.currentTarget)
     const email = form.get('email');
     const password = form.get('password');
     console.log(email, password)

    //  sign in
    logIn(email, password)
    .then(result=>{
      console.log(result)
    })
    .catch(error=>{
      console.log(error)
    })
  }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login Now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">

        


        <div className="form-control">

          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input type="email" placeholder="email" className="input input-bordered" 
          name="email"
          required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" 
         name="password"
          required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <div>
            <p>New to this website? please <Link to='/register'><button className="btn btn-link">Register</button></Link></p>
          </div>
        </div>
        <div className="form-control mt-6">
            
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;