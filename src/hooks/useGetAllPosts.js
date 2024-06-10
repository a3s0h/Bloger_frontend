import {BASE_URL} from "../utils/constant"
import {useDispatch, useSelector} from "react-redux"
import { addPosts } from "../utils/blogSlice";
import { useEffect } from "react";
import axios from "axios";

const useGetAllPosts = () => {


    const post = useSelector((store)=> store.blogs?.posts);
    const dispatch = useDispatch();

    const fetchPosts = async () => {
        const response = await axios.get(BASE_URL);
        dispatch(addPosts(response?.data));
        // console.log("response" , response);
      }
      useEffect(()=>{
        !post && fetchPosts();
      },[])
} 

export default useGetAllPosts;