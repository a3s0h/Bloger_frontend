import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import { removeUser, setUserInfo } from '../../utils/userSlice';
import { setAuth } from '../../utils/authSlice';


const NavLinks = () => {

    const dispatch = useDispatch();
    const auth = useSelector((store) => store.auth?.isAuth);
    const username = useSelector((store) => store?.user?.userInfo?.username);
    // console.log(username);

    const isAdmin = false;
    useEffect( () => {
            const token = sessionStorage.getItem('token');
            if (token) {
                dispatch(setAuth(true));
                const username = sessionStorage.getItem('username');
                const email = sessionStorage.getItem('email');
                const userId = sessionStorage.getItem('userId');
                const type = sessionStorage.getItem('type');
                dispatch(setUserInfo({username , email , userId , type}));
                // sessionStorage.removeItem('username');
                // sessionStorage.removeItem('email');
                // sessionStorage.removeItem('userId')
                // sessionStorage.removeItem('type');
            }
            else{
                dispatch(setAuth(false));
                dispatch(removeUser());
            }
            
        }, []);
        
        const handleSignOut = () => {
            sessionStorage.removeItem('token');
            // sessionStorage.removeItem('userId');
            dispatch(setAuth(false));
            dispatch(removeUser());
            // dispatch(removeUserId());
    };

    // console.log("user h: ", user);

    const navLinks = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        }
    ];


    return (
        <div className="navOptions flex items-center justify-center gap-8 text-sm-xl font-semibold cursor-pointer">
            {navLinks.map((link) => (
                <Link to={link.path} key={link.path}>{link.title}</Link>
            ))}
            {auth ?
                <>
                    <Link to="/dashboard">{username}</Link>
                    <Link to="/" onClick={handleSignOut} className="font-semibold bg-orange-600 py-2 px-5 text-white rounded-full ">Sign Out</Link>
                </>
                :
                <>
                    <Link to="/register">
                        Sign Up</Link>
                    <Link to="/login"
                        className="font-semibold bg-orange-600 py-2 px-5 text-white rounded-full "
                    >
                        Sign In</Link>
                </>
            }
            {
                isAdmin &&
                <Link to="admin">Admin</Link>
            }
        </div>
    )
}

export default NavLinks;
