import React from 'react'
import { BASE_URL } from '../../utils/constant';

const BlogTemplate = ({data}) => {

    const {title , excert , author , category , comments , featuredImage } = data;

    const createdAt = data?.createdAt;
const date = new Date(createdAt);
const formattedDate = date.toISOString().split('T')[0];


  return (
    <div className="py-10 w-[300px]  ">
        <div className=" relative h-[350px] w-full rounded-lg overflow-hidden">
            <img
                className="w-full h-full rounded-lg"
            src={featuredImage} alt="postImage" />
            <div className="overlay absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100">
                    <h2 className="text-white text-xl font-semibold">{title}</h2>
                </div>
        </div>
        <div className="p-5 text-left">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{author?.name}</h2>
                <p className="italic ">{category?.name}</p>
            </div>
            <p className="text-gray-800 italic">{excert}</p>
            <p>{formattedDate}</p>
        </div>
    </div>
  )
}

export default BlogTemplate