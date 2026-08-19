'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/utils/cn'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const Hero = () => {
  const words = 'I build modern web experiences with Next.js, React & TypeScript.'

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden pb-20 pt-16 md:pt-12"
    >
      {/* Spotlights */}
      <div aria-hidden className="pointer-events-none">
        <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white" />
        <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Dot grid with a soft radial fade toward the edges */}
      <div aria-hidden className="absolute inset-0 bg-black-100">
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:24px_24px]',
            '[background-image:radial-gradient(#404040_1px,transparent_1px)]',
          )}
        />
        <div className="absolute inset-0 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black_75%)]" />
      </div>

      {/* Ambient purple glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[min(90vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/20 blur-[130px]"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-[89vw] flex-col items-center text-center md:max-w-3xl lg:max-w-[62vw]"
      >
        {/* Availability badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white-100 backdrop-blur-sm md:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new opportunities
        </motion.div>

        {/* Name / kicker */}
        <motion.p
          variants={item}
          className="mt-7 text-sm uppercase tracking-[0.25em] text-white-200 md:text-base"
        >
          Hi, I&apos;m Osikoya Olaoluwa
        </motion.p>

        {/* Headline */}
        <motion.div variants={item} className="mt-5">
          <TextGenerateEffect
            words={words}
            className="text-center text-4xl md:text-5xl lg:text-5xl"
          />
        </motion.div>

        {/* Supporting line */}
        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-sm leading-relaxed text-white-200 md:text-lg"
        >
          A frontend-focused software engineer based in Nigeria (WAT). I turn ideas
          into fast, accessible, and reliable products people love to use.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex w-full max-w-sm flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:items-center"
        >
          <MagicButton
            title="Explore My Work"
            icon={<FaLocationArrow />}
            position="right"
            href="#projects"
            className="w-full sm:w-auto"
          />
          <a
            href="#contact"
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-7 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 sm:w-auto"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="mt-10 flex items-center gap-4">
          {socialMedia.map(({ id, name, icon: Icon, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white-200 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/30 hover:text-white"
            >
              <Icon className="text-lg" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to the about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-white/70"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}

export default Hero;
