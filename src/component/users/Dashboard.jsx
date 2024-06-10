import React from 'react'
import { useSelector } from 'react-redux'
import useGetUserDetials from '../../hooks/useGetUserDetails';
import {Link } from "react-router-dom"
import BlogForm from './BlogForm';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  const user = useSelector((store) => store.user?.userInfo);

  const userType = user?.type;

  const data = useSelector((store) => store.user?.userInfo?.analysis)
  // console.log(data);

  // if(!data )return;
  const recentPosts = data?.post || [];

  // if(!user)return;

  useGetUserDetials(user?.userId);

  return (
    <div className=" w-full">

      <main>
        <div className="">
          <section>
            <div id="main" className="main-content flex-1  mt-12 md:mt-2 pb-24 md:pb-5">
              <div className=" pt-3">
                <div className="rounded-tl-3xl p-4 shadow text-2xl text-black flex items-center justify-between px-10">
                  <h1 className=" text-black font-bold pl-2 text-5xl">Welcome Back , <span className="text-orange-600">{user?.username}</span></h1>
                  <Link 
                    className="font-semibold text-lg bg-orange-600 px-8 py-2 text-white rounded-lg hover:bg-orange-500"
                    to={userType === 'author' ? "/blogform" : "/blog"}
                  >
                      Create Blog
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  {/*Metric Card*/}
                  <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                      <div className="flex-shrink pr-4">
                        <div className="rounded-full p-5 bg-green-600"><i className="fa fa-wallet fa-2x fa-inverse" /></div>
                      </div>
                      <div className="flex-1 text-right md:text-center">
                        <h2 className="font-bold uppercase text-gray-600">Total Posts</h2>
                        <p className="font-bold text-3xl">{data?.postCount === null ? 0 : data?.postCount} <span className="text-green-500"><i className="fas fa-caret-up" /></span></p>
                      </div>
                    </div>
                  </div>
                  {/*/Metric Card*/}
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  {/*Metric Card*/}
                  <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                      <div className="flex-shrink pr-4">
                        <div className="rounded-full p-5 bg-pink-600"><i className="fas fa-users fa-2x fa-inverse" /></div>
                      </div>
                      <div className="flex-1 text-right md:text-center">
                        <h2 className="font-bold uppercase text-gray-600">Total Comments</h2>
                        <p className="font-bold text-3xl">{data?.commentCount === null ? 0 : data?.commentCount} <span className="text-pink-500"><i className="fas fa-exchange-alt" /></span></p>
                      </div>
                    </div>
                  </div>
                  {/*/Metric Card*/}
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  {/*Metric Card*/}
                  <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                      <div className="flex-shrink pr-4">
                        <div className="rounded-full p-5 bg-yellow-600"><i className="fas fa-user-plus fa-2x fa-inverse" /></div>
                      </div>
                      <div className="flex-1 text-right md:text-center">
                        <h2 className="font-bold uppercase text-gray-600">Total Likes</h2>
                        <p className="font-bold text-3xl">2 <span className="text-yellow-600"><i className="fas fa-caret-up" /></span></p>
                      </div>
                    </div>
                  </div>
                  {/*/Metric Card*/}
                </div>

              </div>
              <div className="w-full mt-2">
                <div className="w-full p-6">
                  {/* recent Post Card */}
                  <div className="bg-white border-transparent rounded-lg shadow-xl">
                    <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                      <h className="font-bold uppercase text-gray-600">Recent posts</h>
                    </div>
                    <div className="p-5" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                      {
                        recentPosts.length !== 0 ? 
                      recentPosts?.map(post => (
                        <Link to={`/blog/${post._id}`} key={post._id}>
                        <div key={post._id} className="mb-4 bg-gray-200 p-5 rounded-lg hover:bg-gray-100">
                          <h2 className="text-xl font-semibold">{post.title}</h2>
                          <p className="text-gray-700 italic">{post.excert}</p>
                        </div>
                        </Link>
                      ))
                      :
                      <p className="font-semibold text-4xl text-gray-600">No Post yet!!</p>
                    
                    }
                    </div>
                  </div>
                </div>
                <div className="w-full  p-6">
                  {/*Graph Card*/}
                  <div className="bg-white border-transparent rounded-lg shadow-xl">
                    <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                      <h2 className="font-bold uppercase text-gray-600">Graph</h2>
                    </div>
                    <div className="p-5">
                      <canvas id="chartjs-0" className="chartjs" width="undefined" height="undefined" />
                    </div>
                  </div>
                  {/*/Graph Card*/}
                </div>



              </div>
            </div>
          </section>
        </div>
      </main>

    </div>
  )
}

export default Dashboard