import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems, getTechColor } from '@/data'
import type { GridItem } from '@/data'
import MagicButton from './MagicButton'
import { ProfileAvatar } from './ProfileAvatar'
import { FaLocationArrow, FaEarthAfrica, FaCheck } from 'react-icons/fa6'

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple/90">
    {children}
  </p>
)

const CardContent = ({ item }: { item: GridItem }) => {
  switch (item.variant) {
    case 'bio':
      return (
        <>
          <div className="flex items-center gap-4">
            <ProfileAvatar />
            <div>
              <p className="font-semibold text-white">Osikoya Olaoluwa</p>
              <p className="text-sm text-purple">Software Engineer</p>
            </div>
          </div>
          <h3 className="mt-6 text-xl font-bold leading-snug text-white md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-300">
            {item.description}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )

    case 'location':
      return (
        <>
          <FaEarthAfrica
            aria-hidden
            className="pointer-events-none absolute -bottom-8 -right-6 text-[8rem] text-white/[0.04]"
          />
          <Eyebrow>{item.eyebrow}</Eyebrow>
          <div className="mt-auto">
            <FaEarthAfrica className="mb-4 text-3xl text-purple" />
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">
              {item.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white-200">
              WAT · UTC+1
            </span>
          </div>
        </>
      )

    case 'stack':
      return (
        <>
          <Eyebrow>{item.eyebrow}</Eyebrow>
          <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-300">{item.description}</p>
          <div className="mt-auto flex flex-wrap gap-3 pt-5">
            {item.techIcons?.map((Icon, i) => (
              <div
                key={i}
                style={{ '--brand': getTechColor(Icon) } as React.CSSProperties}
                className="tech-chip flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xl text-white-200 hover:-translate-y-1"
              >
                <Icon />
              </div>
            ))}
          </div>
        </>
      )

    case 'philosophy':
      return (
        <>
          <Eyebrow>{item.eyebrow}</Eyebrow>
          <ul className="mt-auto space-y-4">
            {item.points?.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple/15 text-[10px] text-purple">
                  <FaCheck />
                </span>
                <span className="text-sm leading-snug text-neutral-200">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </>
      )

    case 'currently':
      return (
        <>
          <Eyebrow>{item.eyebrow}</Eyebrow>
          <div className="mt-auto">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Active
            </span>
            <h3 className="text-xl font-bold text-white md:text-2xl">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">
              {item.description}
            </p>
          </div>
        </>
      )

    case 'cta':
      return (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 [background:radial-gradient(60%_80%_at_100%_0%,rgba(203,172,249,0.14),transparent)]"
          />
          <Eyebrow>{item.eyebrow}</Eyebrow>
          <h3 className="mt-2 max-w-md text-2xl font-bold leading-snug text-white md:text-3xl">
            {item.title}
          </h3>
          <p className="mt-3 max-w-md text-sm text-neutral-300 md:text-base">
            {item.description}
          </p>
          <div className="mt-auto pt-5">
            <MagicButton
              title={item.cta?.label ?? 'Get in touch'}
              icon={<FaLocationArrow />}
              position="right"
              href={item.cta?.href ?? '#contact'}
            />
          </div>
        </>
      )

    default:
      return null
  }
}

const Grid = () => {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple">
          About me
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          The developer behind the work
        </h2>
        <p className="mt-4 text-sm text-neutral-400 md:text-base">
          A quick look at how I think, what I build with, and where I&apos;m headed.
        </p>
      </div>

      <BentoGrid>
        {gridItems.map((item, index) => (
          <BentoGridItem key={item.id} index={index} className={item.className}>
            <CardContent item={item} />
          </BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
