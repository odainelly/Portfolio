import React from 'react'
import { FaCss3 } from "react-icons/fa";
import {
	SiTailwindcss,
	SiJavascript,
	SiPython,
	SiC,
	SiLinux,
	SiTypescript,
	SiReact,
	SiHtml5,
} from "react-icons/si";

const Skills = () => {
  return (
    <div id='skills' className='w-full min-h-screen '>
        <div className='flex  justify-center items-center gap-2'>
                <h3 className='text-3xl hover:text-blue-600 transition-colors'>Skills</h3>
                <p className='w-8 md:w-11 h-[2px] bg-[#fff] '></p>
            </div>
       <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
					<Icon IconName={"Tailwind"} IconType={SiTailwindcss} />
					<Icon IconName={"Javascript"} IconType={SiJavascript} />
					<Icon IconName={"Typescript"} IconType={SiTypescript} />
					<Icon IconName={"C/C++"} IconType={SiC} />
					<Icon IconName={"Python"} IconType={SiPython} />
					<Icon IconName={"React"} IconType={SiReact} />
					<Icon IconName={"Css3"} IconType={FaCss3} />
					<Icon IconName={"Linux"} IconType={SiLinux} />
					<Icon IconName={"HTML5"} IconType={SiHtml5} />
				</div>
    </div>
  )
}


const Icon = ({ IconType, IconName }) => {
	return (
		<div className=" hover:scale-110 duration-500" onClick={() => void 0}>
			<IconType className="w-20 mx-auto text-[4rem]" />
			<p className="my-4">{IconName}</p>
		</div>
	);
};

export default Skills