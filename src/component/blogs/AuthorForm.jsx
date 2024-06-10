import axios from 'axios';
import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';



const AuthorForm = () => {

    const name = useRef(null);
    const bio = useRef(null);

    const userId = useSelector((store) => store.user?.userInfo?.userId);

    const type = useSelector((store) => store.user?.userInfo?.type);

    const navigate = useNavigate();

    const handleUser = async () =>{
        const nameIn = name.current.value;
        const bioIn = bio.current.value;
        if(!nameIn && !bioIn)return;

        if(type === undefined){navigate("/login");return;}


        // console.log(nameIn);
        // console.log(bioIn);

        
        // const userId = sessionStorage.get('userid');
        // console.log(userId);
        const data = {userId : userId ,name :  nameIn , bio :  bioIn} ;
        try{
            const response = await axios.post(`${BASE_URL}api/user/author`,data);
            console.log("response : ",response);
            sessionStorage.setItem('type' , 'author');
        }
        catch(error)
        {
            console.log(error.message);
        }

        name.current.value = null;
        bio.current.value = null;
    }


    return (
        <div className="my-5">
            {/* form section */}
            <div className="min-h-[600px] px-10  flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">First step to beome an Author</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    {/* name */}
                                    <div className="relative">
                                        <input 
                                        ref={name}
                                            autoComplete="off" 
                                            type="text" 
                                            id='username'
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                                            placeholder="Enter your name" />
                                        <label htmlFor="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                                    </div>

                                    {/* bio */}
                                    
                                    <div className="relative">
                                        <textarea  
                                        ref={bio}
                                            cols="30" 
                                            rows="5"
                                            className="peer w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                                            placeholder="Enter your Bio" ></textarea>
                                        {/* <label id='bio' className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter your bio</label> */}
                                    </div>
                                    <div className="relative">
                                        <button 
                                        onClick={handleUser}
                                        className="bg-orange-500 text-white rounded-md px-2 py-1 hover:bg-orange-400">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AuthorForm