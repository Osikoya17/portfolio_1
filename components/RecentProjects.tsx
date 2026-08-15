import { projects } from '@/data'
import { FaLocationArrow } from 'react-icons/fa6'

const gradients = [
    'from-purple to-color-blue-100',
    'from-blue-500 to-purple',
    'from-color-blue-100 to-purple',
    'from-purple to-blue-500',
]

const RecentProjects = () => {
  return (
    <section id='projects' className='py-20'>
        <h2 className='heading'>
            A small selection of <span className='text-purple'>recent projects</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
            {projects.map((project, idx) => (
                <div
                    key={project.id}
                    className='group/project relative flex flex-col justify-between space-y-4 rounded-3xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black-200 dark:shadow-none'
                >
                    <div
                        className={`w-full h-40 rounded-2xl bg-gradient-to-br ${gradients[idx % gradients.length]} flex items-center justify-center`}
                    >
                        <p className='text-white font-bold text-xl text-center px-4 drop-shadow'>
                            {project.title}
                        </p>
                    </div>

                    <div className='px-1'>
                        <h3 className='font-sans font-bold text-neutral-600 dark:text-neutral-200 text-lg'>
                            {project.title}
                        </h3>
                        <p className='font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300 mt-2'>
                            {project.des}
                        </p>
                    </div>

                    <div className='flex items-center justify-between px-1 pb-1'>
                        <div className='flex items-center gap-3'>
                            {project.techIcons.map((Icon, i) => (
                                <Icon key={i} className='text-lg text-white-200' />
                            ))}
                        </div>

                        {project.link && (
                            <a
                                href={project.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 text-sm text-purple hover:underline'
                            >
                                Check live site
                                <FaLocationArrow className='text-xs' />
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default RecentProjects
