import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";





const Register = () => {

  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');

  const {creatUser} = useContext(AuthContext);

const handleRegister = e =>{

  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const email = form.get('email');
  const name = form.get('name');
  const password = form.get('password');
  const checked = e.target.terms.checked;
  console.log(email, name, password)

  // resset succes or error
  setRegisterError('')
  setSuccess('')


  if(password.length<6){
    setRegisterError('Password should be at least 6 character or longer');
    return;
  }
  else if(!/[A-Z]/.test(password)){
    setRegisterError('password should at least one uppercase character')
    return;
  }
  else if(!checked){
    setRegisterError('Plese Accept Our Terms And Condition')
    return;
  }

  // creat user
  creatUser(email, password)
  .then(result=>{
    console.log(result)
    setSuccess('Registered Successfully!')
    e.target.reset();
  })
  .catch(error=>{
    console.log(error)
    setRegisterError(error.message)
  });
  

}



    return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register Now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">

        <div className="form-control">

          <label className="label">
            <span className="label-text">Name</span>
          </label>
          
          <input type="text" placeholder="Name" className="input input-bordered"
          name='name'
           required />
        </div>


        <div className="form-control">

          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input type="email" placeholder="email" className="input input-bordered"
          name='email'
           required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"
          name='password'
           required />
           <div className="flex gap-2 mt-4">
            <input type="checkbox" name="terms" id="" /> 
            <p>Accepet Our Terms and Conditions</p>
           </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <div>
            <p>Already have an account? Please <Link to='/login'><button className='btn btn-link'>Login</button></Link></p>
          </div>

{
  registerError && <p className="text-red-600 font-bold">{registerError}</p>
}
{
  success && <p className="text-green-600 font-bold">{success}</p>
}

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;