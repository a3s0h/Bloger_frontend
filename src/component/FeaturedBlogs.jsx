import React, { useEffect, useState } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import { BASE_URL } from '../utils/constant'
import { Link } from 'react-router-dom'

const BlogCard = ({title , excert , featuredImage , createdAt}) => {


  useEffect(()=> {
    AOS.init({duration : 2000});
  },[])


  return (
    <>
      <div className="px-4 w-[300px] h-auto" data-aos="faded-down">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={featuredImage} alt="" className="w-[350px] h-[300px] overflow-hidden" />
          </div>
          <div>
            {createdAt && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-black">
                {createdAt}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-orange-600 sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {title}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {excert}
            </p>
          </div>
        </div>
      </div>
</>
  )}


const FeaturedBlogs = (data) => {
  
  // const data = useSelector((store) => store.blogs?.posts);
  // const {title , excert , featuredImage , createdAt} = data;

  

  console.log(data);

  return (
    <div>
            <section className=" p-6 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="w-full">
          <div className="-mx-4 flex flex-row flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-orange-600 sm:text-4xl md:text-[40px]">
                  Our Recent Blogs
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-around sm:items-start items-center sm:flex-row flex-wrap">
            {
              data?.data?.map((post) => (
                <Link to={`/blog/${post?._id}`} key={post?._id}>
                <BlogCard 
                  title = {post?.title}
                  excert = {post?.excert}
                  featuredImage= {post?.featuredImage}
                  createdAt= {post?.createdAt}
                />
                </Link>
              )) 
              
              
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturedBlogs