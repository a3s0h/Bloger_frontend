import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CommentTemplate from "./CommentTemplate"
import { useDispatch, useSelector } from 'react-redux'
import useGetPostById from '../../hooks/useGetPostById'
import { resetSpecificPost } from '../../utils/blogSlice'
import { BASE_URL } from '../../utils/constant'

const Blog = () => {
    const dispatch = useDispatch();
    const {blogId} = useParams();
    // console.log(blogId);

    useEffect(()=>{
        dispatch(resetSpecificPost());
    },[]);

    useGetPostById(blogId);

    const data = useSelector((store) => store.blogs?.specificPost);
   
    // console.log(data);
   

    if(!data)return;

    const { category , comments , content , excert , featuredImage , title} = data;

  return (
    data ? 
    <div className="p-10 container">
        <h1 className="text-6xl  font-bold mb-4">{title}</h1>
        <div className="w-full h-[600px] overflow-hidden">
            <img
                className="w-full h-auto content-center"
            src={featuredImage}  alt="featured image here" />
        </div>
        <div>
            <span>
                {category?.name}
            </span>
            <p>{excert}</p>
            <p>{content}</p>
        </div>
        <hr />
        <div>
            <h2>Comments</h2>
            {
                comments?.map((comment) => (
                   <CommentTemplate
                    name = {comment?.author?.name}
                    content = {comment?.content}
                   />
                ))
            }
        </div>
    </div>:
     <h1>Loading...</h1>
  )
}

export default Blog