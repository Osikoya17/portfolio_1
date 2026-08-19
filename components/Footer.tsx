import { socialMedia } from '@/data'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { cn } from '@/utils/cn'

const Footer = () => {
  return (
    <footer id='contact' className='relative py-20'>
        <div
            aria-hidden
            className={cn(
                'absolute inset-0 -z-10',
                '[background-size:20px_20px]',
                '[background-image:radial-gradient(#404040_1px,transparent_1px)]',
                '[mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]',
            )}
        />

        <div className='mx-auto flex max-w-5xl flex-col items-center text-center'>
            <h2 className='heading text-white'>
                Get <span className='text-purple'>in</span> touch
            </h2>
            <p className='mt-4 text-sm text-neutral-300 md:text-base'>
                For enquiries, collaboration requests or job opportunities
            </p>

            {/* <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position='right'
                href='mailto:olaoluwaosikoya2021@gmail.com'
                className='mt-6'
            /> */}
        </div>

        <div className='mt-5 flex items-center justify-center gap-6'>
            {socialMedia.map(({ id, name, icon: Icon, link }) => (
                <a
                    key={id}
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={name}
                    className='flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white-200 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/30 hover:text-white'
                >
                    <Icon className='text-lg' />
                </a>
            ))}
        </div>

        <p className='mt-10 text-center text-xs text-neutral-400'>
            &copy; {new Date().getFullYear()} Olaoluwa David Osikoya. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer
