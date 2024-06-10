import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSpecificPost, resetSpecificPost } from "../utils/blogSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constant";


const useGetPostById = (id) => {
  const post = useSelector((store) => store.blogs?.specificPost);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}post/${id}`);
      dispatch(addSpecificPost(response?.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    !post && fetchData();
  }, []); // Update useEffect dependency to re-fetch data when id changes
};

export default useGetPostById;
