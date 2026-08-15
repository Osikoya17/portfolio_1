import { workExperience } from '@/data'
import { FaBriefcase } from 'react-icons/fa6'

const Experience = () => {
  return (
    <section id='experience' className='py-20'>
        <h2 className='heading'>
            My <span className='text-purple'>work experience</span>
        </h2>

        <div className='max-w-3xl mx-auto mt-10 relative border-l border-neutral-200 dark:border-white/[0.2] ml-4 md:ml-0'>
            {workExperience.map((job) => (
                <div key={job.id} className='mb-10 ml-8 relative'>
                    <span className='absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-black-200 border border-neutral-200 dark:border-white/[0.2]'>
                        <FaBriefcase className='text-purple text-sm' />
                    </span>
                    <div className='rounded-2xl border border-neutral-200 bg-white p-5 dark:border-white/[0.2] dark:bg-black-200'>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-1'>
                            <h3 className='font-sans font-bold text-neutral-600 dark:text-neutral-200'>
                                {job.title} · {job.company}
                            </h3>
                            <span className='text-xs text-neutral-500 dark:text-neutral-400'>
                                {job.duration}
                            </span>
                        </div>
                        <p className='font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300 mt-2'>
                            {job.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Experience
