'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/utils/cn'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
const Hero = () => {
    const words = "Transformative Web Experiences with Next.js and Tailwind CSS"
  return (
    <div className='pb-10 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
        </div>
          <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"/>
    </div>
    <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-blue-100 text-center'>
                Dynamic Web Magic with Nextjs
            </h2>

            <TextGenerateEffect
            className='text-[40px] md:text-5xl lg:text-6xl font-bold text-center mt-4'
                words={words}
            />
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-md lg:text-2xl'>
                Hi, I&apos;m Osikoya Olaoluwa, a Software Engineer based in Nigeria
            </p>

            <a href="#about">
                <MagicButton 
                    title='Explore My Work'
                    icon={<FaLocationArrow/>}
                    position = "right"
                />
            </a>
        </div>
    </div>
    </div>
  )
}

export default Hero;