'use client'
import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { timeline } from '@/data'
import type { TimelineItem, TimelineKind } from '@/data'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6'

const kindStyles: Record<
  TimelineKind,
  { label: string; icon: typeof FaBriefcase; dot: string; chip: string }
> = {
  work: {
    label: 'Work',
    icon: FaBriefcase,
    dot: 'text-purple',
    chip: 'bg-purple/15 text-purple',
  },
  education: {
    label: 'Education',
    icon: FaGraduationCap,
    dot: 'text-sky-300',
    chip: 'bg-sky-400/15 text-sky-300',
  },
}

type Filter = 'all' | TimelineKind

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'work', label: 'Work' },
  { key: 'education', label: 'Education' },
]

const TimelineEntry = ({ item, index }: { item: TimelineItem; index: number }) => {
  const style = kindStyles[item.kind]
  const Icon = style.icon

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative ml-10"
    >
      {/* Timeline node */}
      <span
        className={`absolute -left-[3.15rem] flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black-200 ${style.dot}`}
      >
        <Icon className="text-sm" />
      </span>

      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black-200 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/25">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-1/2 h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(50%_60%_at_50%_100%,rgba(203,172,249,0.10),transparent)]"
        />
        <div className="relative z-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${style.chip}`}
              >
                <Icon className="text-[10px]" />
                {style.label}
              </span>
              <h3 className="mt-2.5 text-base font-bold text-white md:text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-400">{item.org}</p>
            </div>
            <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white-200">
              {item.duration}
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-neutral-300">{item.desc}</p>

          {item.skills && item.skills.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.li>
  )
}

const Experience = () => {
  const [filter, setFilter] = useState<Filter>('all')

  const items = useMemo(() => {
    const sorted = [...timeline].sort((a, b) => b.start - a.start || a.id - b.id)
    return filter === 'all' ? sorted : sorted.filter((item) => item.kind === filter)
  }, [filter])

  return (
    <section id="experience" className="py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple">
          Career journey
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Experience &amp; Education
        </h2>
        <p className="mt-4 text-sm text-neutral-400 md:text-base">
          The path so far the roles I&apos;ve grown in and where I built my
          foundations.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="mb-12 flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
          {filters.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === tab.key
                  ? 'bg-white/10 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl">
        <ol className="relative space-y-8 border-l border-white/10">
          {items.map((item, index) => (
            <TimelineEntry key={`${filter}-${item.id}`} item={item} index={index} />
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
