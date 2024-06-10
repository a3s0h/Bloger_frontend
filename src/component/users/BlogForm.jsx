import React, { useRef, useState } from 'react'
import {useSelector} from "react-redux"
import axios from "axios";
import {BASE_URL} from "../../utils/constant"
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
  const title = useRef(null);
  const excert = useRef(null);
  const content = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  // const image = useRef(null);
  const category = useRef(null);
  
  const navigate = useNavigate();

  const author = useSelector((store) => store.user?.userInfo);
  // console.log(author);



  const uploadImage = async () =>{
      const data = new FormData();

      data.append("file", imageFile);
      data.append("upload_preset" , "images_preset");

      try{
        // console.log("Cloudinary Cloud Name:", process.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME);
        let cloudName = import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME;
        let resourceType = 'image';
        let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
        
        const res = await axios.post(api,data);
        const {secure_url} = res.data;
        console.log(secure_url);
        return secure_url;
        
        
        }
        catch(error){
          console.log("error is : ", error);
      }
  }

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

 

  const handleBlog = async () =>{

    
    const imageUrl = await uploadImage(imageFile);

    const formData = new FormData();
  formData.append('title', title.current.value);
  formData.append('content', content.current.value);
  formData.append('excert', excert.current.value);
  formData.append('category', category.current.value);
  formData.append('author[name]', author?.username);
  formData.append('author[id]', author?.userId);


  formData.append('featuredImage', imageUrl);

  try {
    const response = await axios.post(BASE_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
      },
    });
    title.current.value = '';
    content.current.value = '';
    excert.current.value = '';
    category.current.value = '';
    setImageFile(null);

    // Navigate to the blog page
    navigate("/blog");
    // console.log(response);
  } catch (error) {
    console.log(error.message);
  }


  }

  return (
    <div>
        <div className="">
  <div className="flex mx-auto w-full  h-screen ">
    {/* COMPONENT CODE */}
    <div className="mx-auto my-4 px-8 ">
      <form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data" className="w-full mx-auto p-8 my-4 bg-white md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl shadow-2xl">
        <div className="flex">
          <h1 className="font-bold uppercase text-5xl">Create a new <br /> Blog</h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          {/* blog form  */}
            {/* title */}
            <input 
              ref={title}
              className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
              type="text" 
              placeholder="Title*" />
            {/* category */}
            <input 
            ref={category}
              className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
              type="text" 
              placeholder="Category*" />
            {/* excert */}
            <textarea 
              
              ref={excert} 
              cols="30" 
              rows="3" 
              placeholder='Excert*'
              className="bg-gray-200 p-3 rounded-lg"
              />
              <label htmlFor="imageInput" className="bg-gray-200 m-auto px-40 p-10 rounded-lg cursor-pointer">
                <input 
                  id="imageInput"
                  type="file" 
                  accept="image/*" 
                  className="hidden"
                  onChange={handleImageChange} 
                />
                <span className="font-bold text-3xl">+</span>
                <span className="text-2xl ">Add image</span>
              </label>
        </div>
        <div className="my-4">
          <textarea 
          ref = {content}
            placeholder="Content*" 
            className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
            defaultValue={""} />
            </div>
            <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
                  onClick={handleBlog}
                >
            Add Blog
          </button>
        </form>
      </div>
      </div>
      </div>
      </div>

  )
}

export default BlogForm