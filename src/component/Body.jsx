import React from 'react'
import Navbar from './navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';
import Blogs from './blogs/Blogs';
import Blog from './blogs/Blog';
import Register from './registration/Register';
import Login from "./registration/Login"
import Dashboard from './users/Dashboard';
import DashBoard from './admin/DashBoard';
import BlogForm from './users/BlogForm';
import useGetAllPosts from '../hooks/useGetAllPosts'


const Body = () => {

  useGetAllPosts();

  return (
    <BrowserRouter>
    <div className="flex flex-col justify-between h-[100vh]">
        <Navbar/>
        <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/about" element={<About/>} />
            <Route  path="/contact" element={<Contact/>} />
            <Route  path="/blog" element = {<Blogs/>}/>
            <Route  path="/blog/:blogId" element={<Blog/>}/>
            <Route path='/register'  element = {<Register/>}/>
            <Route path="/login" element={ <Login/> } />
            <Route path="/dashboard" element={ <Dashboard /> } />
            <Route path="/admin" element = {<DashBoard/>} />
            <Route path="/blogform"  element={<BlogForm/>} />
        </Routes>
        <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default Body