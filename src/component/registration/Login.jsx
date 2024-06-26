import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUserInfo } from '../../utils/userSlice';
import axios from 'axios';
import { setAuth } from '../../utils/authSlice';
import { BASE_URL } from '../../utils/constant';



const Login = () => {

  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
const user = useSelector((store) => store?.user)
  const navigate = useNavigate();
  // console.log("user in login ",user);

  const handleLogin =  async () =>{
    const emailIn = email.current.value;
    const passwordIn = password.current.value;
    if(!emailIn && !passwordIn)return;
    
    const data = {
      email : emailIn,
      password : passwordIn,
    }

    try {
      const response = await axios.post(`${BASE_URL}api/user/login`, { email: emailIn, password: passwordIn });
      const { sessionId, username, email, _id ,authority} = response.data;
      
      sessionStorage.setItem('token', sessionId);
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('type', authority);
      sessionStorage.setItem('userId', _id);
      navigate("/");
    } catch(error) {
      console.log({ message: error.message });
    }
  }


  return (
    <div className="text-center p-10">
      <div className="inline-block">
      <h1 className="font-bold text-gray-700 text-5xl mb-3">Sign In</h1>
      <hr className="w-full h-[4px] bg-orange-600"/>
      </div>
      <section className="h-screen">
        <div className="container h-full px-6 py-24">
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* Left column container with background*/}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="Phone image" />
            </div>
            {/* Right column container with form */}
            <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
              <form onSubmit={(e) => e.preventDefault()}>
                {/* Email input */}
                <div className="relative mb-6 border-b-[1px] border-black" data-twe-input-wrapper-init>
                  <input 
                  ref= {email}
                    type="text" 
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput3" 
                    placeholder="Email address" />
                  <label 
                    htmlFor="exampleFormControlInput3" 
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">Email address
                  </label>
                </div>

                {/* Password input */}
                <div className="relative mb-6 border-b-[1px] border-black" data-twe-input-wrapper-init>
                  <input 
                  ref=  {password}
                    type="password" 
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput33" 
                    placeholder="Password" />
                  <label 
                  htmlFor="exampleFormControlInput33" 
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">Password
                  </label>
                </div>
                {/* Remember me checkbox */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                    <input className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary" type="checkbox" defaultValue id="exampleCheck3" defaultChecked />
                    <label className="inline-block ps-[0.15rem] hover:cursor-pointer" htmlFor="exampleCheck3">
                      Remember me
                    </label>
                  </div>
                  {/* Forgot password link */}
                  <span>
                  New User?
                  <Link to="/register" className="text-primary focus:outline-none dark:text-primary-400 hover:text-orange-600"> Sign up</Link>
                  </span>
                </div>
                {/* Submit button */}
                <button 
                  type="submit" 
                  className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong bg-orange-600 text-white font-semibold" data-twe-ripple-init data-twe-ripple-color="light"
                  onClick={ handleLogin }
                  >
                  Sign In
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Login