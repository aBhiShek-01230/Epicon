import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css";
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import { logout } from '../../firebase';
import { useNavigate } from 'react-router-dom';





const   Navbar = ({style}) => {

  const navRef = useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>100){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  // const [search,setSearch] = useState(false);

  // const handleSearch = () =>{
  //   setSearch(true);
  // }
  // console.log(search);
  const navigate = useNavigate();
  
  return (
    <div ref={navRef} className='navbar' style={style}>
      <div className="navbar-left">
        <img src={logo} alt="" onClick={() =>{navigate('/')}}/>
        <ul>
          <li>Home</li>
          <li >Tv Shows</li>
          <li >Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src = {search_icon} className='icons' onClick={()=>{navigate('/search')}}/>
        {/* <p>Children</p> */}
        <img src = {bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
        <img src = {profile_img} alt="" className='profile' />
        <img src={caret_icon} alt="" />
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign Out</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
