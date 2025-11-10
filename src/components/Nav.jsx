import React from 'react'
import { Link } from 'react-scroll'
import { assets } from '../assets/Assets'
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";


const Nav = () => {
  return (
    <nav className=" fixed top-0 left-0 w-full z-[9999] backdrop-blur-md bg-transparent/20 border-b border-white/20 shadow-sm sm:max-w-[100%] ">
      <div className='container mx-auto flex sm:justify-start justify-between items-center   py-2 px-auto'>

        <div className=" max-w-7xl mx-auto px-4 py-3 flex items-center justify-between ">
            {/* <Link to="/" className="text-2xl font-bold text-white">
              MyBrand
            </Link> */}

            <ul className="flex flex-grow lg:justify-center md:justify-center justify-start w-full space-x-8 m-auto text-2xl">

              <li className='font-bold lg:text-md '><Link to="home" smooth={true} duration={500} className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li className='font-bold lg:text-md '><Link to="about" smooth={true} duration={500}  className="hover:text-blue-600 transition-colors">About</Link></li>
              <li className='font-bold lg:text-md '><Link to="skills" smooth={true} duration={500} className="hover:text-blue-600 transition-colors">Skills</Link></li>
              <li className='font-bold lg:text-md '><Link to="projects" smooth={true} duration={500} className="hover:text-blue-600 transition-colors">Projects</Link></li>
              
            </ul>

            {/* <div className='flex gap-3 text-white'>
                <div className='bg-[#fff]'>
                    <img className='' src={assets.github} alt="" />
                </div>
                <div className="bg-[#fff]">
                    <img className='' src={assets.mail} alt="" />
                </div>
                <div className='bg-[#fff]'>
                    <img className='' src={assets.linkedin} alt="" />
                </div>
              
            </div> */}

       

        </div>

       <div className="   space-x-2 gap-2 hidden sm:flex">
					<NavBarIcon
						link="https://github.com/odainelly"
						icon={FaGithub}
						iconSize={20}
					/>
					<NavBarIcon
						link="mailto:nellyodai7@gmail.com"
						icon={CgMail}
					/>
					<NavBarIcon
						link="https://linkedin.com/"
						icon={CiLinkedin}
					/>
				</div>

      </div>
      
    </nav>
  )
}



const NavBarIcon = (props) => (
	<a
		href={props.link}
		target="_blank"
		rel="noopener noreferrer"
		className="navbar-icon text-rosePine-text"
	>
		<props.icon size={props.iconSize ?? 21} />
	</a>
);

export default Nav
