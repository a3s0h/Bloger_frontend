import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAnalysis } from "../utils/userSlice";
import { BASE_URL } from "../utils/constant";

const useGetUserDetials = (id) => {
        // const userId = sessionStorage.getItem("userId");
        // console.log(id);
        const dispatch = useDispatch();
        const getUserInfo = async () =>{
            try{
                const response = await axios.get(`${BASE_URL}post/author/${id}`);
                // console.log(response);
                
                dispatch(setAnalysis(response?.data));
            }
            catch(error)
            {
                console.log(error.message);
            }
        }

    useEffect(()=>{
        id && getUserInfo();
    },[])
}


export default useGetUserDetials;