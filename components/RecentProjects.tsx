'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'motion/react'
import { projects } from '@/data'
import type { Project } from '@/data'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

const getDomain = (url?: string) => {
  if (!url || url === '#') return null
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return null
  }
}

const getInitials = (title: string) =>
  title
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]!.toUpperCase())
    .join('')

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [imgError, setImgError] = useState(false)
  const domain = getDomain(project.link)
  const hasLiveLink = Boolean(project.link && project.link !== '#')
  const showImage = Boolean(project.image) && !imgError

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-black-200 backdrop-blur-sm transition-colors duration-300 hover:border-white/25"
    >
      {/* Hover bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-1/2 h-full opacity-50 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(50%_60%_at_50%_100%,rgba(203,172,249,0.12),transparent)]"
      />

      {/* Browser-window preview */}
      <div className="relative z-10 m-3 flex h-52 flex-col overflow-hidden rounded-2xl border border-white/10 bg-black-100">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white/5 px-2 py-1 text-[11px] text-white-200">
            {domain ?? 'preview'}
          </span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          {showImage ? (
            <Image
              src={project.image as string}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="relative flex h-full items-center justify-center bg-black-100">
              <div className="absolute inset-0 [background-image:radial-gradient(#26263c_1px,transparent_1px)] [background-size:16px_16px]" />
              <span className="relative text-6xl font-black tracking-tight text-white/10">
                {getInitials(project.title)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col px-6 pb-6 pt-2">
        <h3 className="text-lg font-bold text-white md:text-xl">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-300">
          {project.des}
        </p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <div className="flex items-center gap-2">
            {project.techIcons.map((Icon, i) => (
              <span
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-sm text-white-200"
              >
                <Icon />
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code`}
                className="text-neutral-400 transition hover:text-white"
              >
                <FaGithub className="text-lg" />
              </a>
            )}
            {hasLiveLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-purple transition-all hover:gap-2.5"
              >
                Live
                <FaArrowUpRightFromSquare className="text-xs" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple">
          Selected work
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          A few things I&apos;ve built
        </h2>
        <p className="mt-4 text-sm text-neutral-400 md:text-base">
          Projects where I got to design, build, and ship from immersive UIs to
          web apps.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default RecentProjects
