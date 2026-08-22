'use client'
import { motion } from 'motion/react'
import { certifications } from '@/data'
import type { Certification } from '@/data'
import { FaCircleCheck, FaArrowUpRightFromSquare } from 'react-icons/fa6'

const CertCard = ({ cert, index }: { cert: Certification; index: number }) => {
  const Icon = cert.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-black-200 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/25"
    >
      {/* Hover bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-1/2 h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(50%_60%_at_50%_100%,rgba(203,172,249,0.12),transparent)]"
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          {/* Brand-tinted credential icon (glows on hover) */}
          <span
            style={{ '--brand': cert.color } as React.CSSProperties}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-2xl transition-shadow duration-300 group-hover:[box-shadow:0_0_24px_-4px_var(--brand)]"
          >
            <Icon style={{ color: cert.color }} />
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple/15 px-2.5 py-1 text-[11px] font-medium text-purple">
            <FaCircleCheck className="text-[10px]" />
            Verified
          </span>
        </div>

        <h3 className="mt-5 text-lg font-bold text-white md:text-xl">{cert.name}</h3>
        <p className="text-sm text-neutral-400">{cert.issuer}</p>

        <p className="mt-3 text-sm leading-relaxed text-neutral-300">{cert.description}</p>

        {cert.skills && cert.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white-200"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Verify ${cert.name} on Credly`}
          className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-purple transition-all hover:gap-2.5"
        >
          Verify on Credly
          <FaArrowUpRightFromSquare className="text-xs" />
        </a>
      </div>
    </motion.article>
  )
}

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple">
          Credentials
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Certifications
        </h2>
        <p className="mt-4 text-sm text-neutral-400 md:text-base">
          Industry certifications backing my networking and IT foundations each
          one is verifiable on Credly.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <CertCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Certifications
