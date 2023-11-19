import React, {useState} from "react";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {FaBars,
     FaTimes,
  FaGithub,
    FaLinkedin,} from 'react-icons/fa';
import Logo from "../assets/logo3.png";
import { Link } from 'react-scroll';


function Navbar(){
    const[nav,setNav]= useState(false);
    function handleClick(){
        setNav(!nav);
    }
    return(
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300'>
<div><img src={Logo} alt="logo" style={{width:'50px'}}/></div>

{/* {menu} */}
<div >
    <ul className='hidden md:flex'>
        <li>
        <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>

        <li>  <Link to='about' smooth={true} duration={500}>
            About
          </Link>
          </li>

        <li>  <Link to='techstack' smooth={true} duration={500}>
            Techstack
          </Link>
          </li>

        <li>  <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
          </li>

        <li>  <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          </li>

    </ul>
</div>

{/* hamburger */}
<div onClick={handleClick} className="md:hidden z-10">
    {!nav?<FaBars/>:<FaTimes/>}
</div>

{/* mobile menu */}
<div className= {!nav?'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'}>
<ul>
        <li className='py-6 text-4xl'> 
        <Link  onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link></li>

        <li className='py-6 text-4xl'>
        <Link  onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link></li>

        <li className='py-6 text-4xl'> 
        <Link  onClick={handleClick} to='techstack' smooth={true} duration={500}>
            Techstack
          </Link></li>

        <li className='py-6 text-4xl'>
         <Link  onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link></li>

        <li className='py-6 text-4xl'>
        <Link  onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link></li>

    </ul>
</div>

{/* social icons */}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
    <ul>
    <li className='brightness-125 rounded-r-full w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/karthik-k-kutty-833926195/'
              target='_blank'
              rel='noreferrer noopener' 
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='brightness-125 rounded-r-full w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Karthik2056426'
              target='_blank'
              rel='noreferrer noopener' 
            >
            Github <FaGithub size={30} />
            </a>
          </li>
          <li className='brightness-125 rounded-r-full w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:karthikassasins@gmail.com'
             
            >
              E-mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='brightness-125 rounded-r-full w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1HdiLFsrM1Y4cRLjJHyY6zK58gEo6Vdhb/view?usp=sharing'
              target='_blank'
              rel='noreferrer noopener' 

            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
    </ul>
</div>
        </div>
    )
}

export default Navbar;