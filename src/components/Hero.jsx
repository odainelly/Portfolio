import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return ( 
    <div id='home' className='font-medium h-screen w-full '>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <Fade cascade damping={0.15} triggerOnce>
              <p className='text-4xl'>Hey it's</p>
            </Fade>
            <h1 className='font-bold text-4xl sm:text-7xl mt-3'>
                <span>
                    <ReactTyped 
                    strings={["Nelly here"]}
                    typeSpeed={70}
                    backDelay={20}
                    cursorChar='_'
                    />
                
                </span>
            </h1>
            <h3 className="font-medium text-2xl sm:text-5xl mt-3">
					<ReactTyped
          className=''
						strings={[
							"Student pursuing Computer and data science.",
						]}
						typeSpeed={35}
						backDelay={70}
						showCursor={false}
					/>
				</h3>
            </div>
    </div>
  )
}

export default Hero