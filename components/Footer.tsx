import { socialMedia } from '@/data'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { cn } from '@/utils/cn'

const Footer = () => {
  return (
    <footer id='contact' className='relative py-20'>
        <div
            className={cn(
                'absolute inset-0 -z-10',
                '[background-size:20px_20px]',
                '[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]',
                'dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]',
                '[mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]',
            )}
        />

        <div className='flex flex-col items-center text-center max-w-2xl mx-auto'>
            <h2 className='heading'>
                Ready to take your <span className='text-purple'>digital presence</span> to the next level?
            </h2>
            <p className='text-sm md:text-base text-neutral-600 dark:text-neutral-300 mt-4'>
                Reach out and let&apos;s talk about how we can work together.
            </p>

            <a href='mailto:adeyinkaoluwatosin123@gmail.com' className='mt-6'>
                <MagicButton
                    title="Let's get in touch"
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
        </div>

        <div className='flex items-center justify-center gap-6 mt-14'>
            {socialMedia.map(({ id, name, icon: Icon, link }) => (
                <a
                    key={id}
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={name}
                    className='flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 transition hover:-translate-y-1 dark:border-white/[0.2] dark:bg-black-200 dark:text-neutral-300'
                >
                    <Icon className='text-lg' />
                </a>
            ))}
        </div>

        <p className='text-center text-xs text-neutral-500 dark:text-neutral-400 mt-10'>
            &copy; {new Date().getFullYear()} Olaoluwa David Osikoya. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer
