import React, { useEffect, useState } from 'react'
import axios from "axios";
import BlogTemplate from './BlogTemplate';
import {Link} from "react-router-dom"
// import useGetAllPosts from '../../hooks/useGetAllPosts';
import { useSelector } from 'react-redux';
import AOS from "aos"
import 'aos/dist/aos.css'
import AuthorForm from './AuthorForm';


const Blogs = () => {
  


  const type = useSelector((store) => store.user?.userInfo?.type);

  useEffect(()=>{
    AOS.init({duration : 2000});
    
},[])


  const post = useSelector((store) => store.blogs?.posts);
  if(!post)return ;

  // console.log("post : ", post);

  return (
    <div className="text-center">
      <div className="inline-block">
        <h1 className="text-4xl mb-3 font-semibold">Get latest <span className="text-orange-600 font-bold" data-aos="fade-down">Blogs</span></h1>
        <hr className="h-1 w-full bg-orange-500" />
      </div>
      <div className="w-full  flex flex-wrap justify-center flex-col sm:flex-row items-center sm:items-start sm:gap-10 mt-5 px-10" data-aos="fade-up">
        {
          post?.map((post) =>(
            <Link to={`/blog/${post._id}`} key={post._id}>
            <BlogTemplate 
            // key={post._id}
              data = {post}
            />
            </Link>
          ))
        }
      </div>
      {
        type !== 'author' &&
        <>
        <div id='become-author' className="inline-block mt-10">
                  <h1 className="font-semibold text-6xl">
                      Become an <span className="text-orange-600 font-bold">Author</span>
                  </h1>
                  <hr className="h-1 w-full bg-orange-500" />
              </div>
        <AuthorForm />
        
        </>
      }
    </div>
  )
}

export default Blogs