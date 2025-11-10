import React from 'react'
import { RiExpandLeftRightLine } from "react-icons/ri";
import { MdWeb } from "react-icons/md";
import { FcEngineering } from "react-icons/fc";
import { SiLinux } from "react-icons/si";
import { CiMicrochip } from "react-icons/ci";
import { Slide } from 'react-awesome-reveal';



const About = () => {
  return (
    <div id="about">
        <div  className=' bg-black min-h-screen w-full text-white pt-[100px] pb-[100px]'>
            {/* this div is just for styling the about */}
            <div className='flex  justify-center items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#fff] '></p>
                <h3 className='text-3xl hover:text-blue-600 transition-colors'>About</h3>
            </div>
{/* this is for the about section contents */}
        <div className='flex items-center justify-center mt-10'>
            <div className='grid w-full max-w-[1000px] gap-8 px-4 sm:grid-cols-2 text-center mt-5'>
                <div className="text-4xl font-bold sm:text-right">
                   <Slide direction='left' duration={2000} triggerOnce><p>Computer science student and a software developer.</p> </Slide>
                </div>
                <div className='text-4xl font-bold'>
                   <Slide direction='right' triggerOnce duration={2000} ><p> I am passionate about building software that improves the lives of those around me. 
                    I specialize in contributing and creating open source software.</p></Slide>
                </div>
            </div>
        </div>
         <div className='flex flex-cols items-center justify-center gap-4 mt-16 font-bold text-xl'>
                <p>Some Areas of interest:</p>
        </div>
                    <div className="m-auto mt-16 grid h-auto max-w-full list-inside list-none grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-2">
						{/* listing would not work if i am using icons? might as well hardcode it??
                                InterestedAreas.map((key) => {
                                    return <Cards icon={key.icon} title={key.title} />;
                                })
                                <div className="m-auto grid h-auto max-w-full list-inside list-none grid-flow-col grid-cols-4 justify-items-center gap-0.5">
                                */}
                                <Card icon={MdWeb} title={"Web/Mobile development"} />
                                <Card
                                    icon={SiLinux}
                                    title={"Linux/Unix operating system"}
                                />
                                <Card
                                    icon={CiMicrochip}
                                    title={"Systems Programming"}
                                    extraStyle={"hover:animate-pulse"}
                                />
                                <Card
                                    icon={FcEngineering}
                                    title={"Reverse Engineering"}
                                    extraStyle={"hover:animate-spin"}
                                />
					</div>
            

        </div>
    </div>
  )
}




const Card = (props) => {
	const iconStyle = `m-auto h-[100px] text-[4rem] mb-4 ${props.extraStyle ?? ""}`;
	return (
		<div className="m-2 h-auto max-h-[300px] min-h-[200px] w-auto min-w-[200px] max-w-[250px] rounded-lg text-white hover:scale-110">
			<div className="p-3 text-center">
				<props.icon className={iconStyle} />
				<p>{props.title}</p>
			</div>
		</div>
	);
};
export default About;