import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { cn } from '@/utils/cn'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map((item) => (
                <BentoGridItem
                    id = {item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                    header={
                        item.techIcons ? (
                            <div className='flex flex-1 w-full h-full min-h-[6rem] items-center justify-center gap-4 flex-wrap'>
                                {item.techIcons.map((Icon, i) => (
                                    <Icon key={i} className='text-2xl md:text-3xl text-white-200' />
                                ))}
                            </div>
                        ) : item.cta ? (
                            <div className='flex flex-1 w-full h-full min-h-[6rem] items-center'>
                                <a href={item.cta.href}>
                                    <MagicButton
                                        title={item.cta.label}
                                        icon={<FaLocationArrow />}
                                        position='right'
                                    />
                                </a>
                            </div>
                        ) : (
                            <div
                                className={cn(
                                    'flex flex-1 w-full h-full min-h-[6rem] rounded-xl',
                                    '[background-size:16px_16px]',
                                    '[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]',
                                    'dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]',
                                )}
                            />
                        )
                    }
                />
            ))}
        </BentoGrid>


    </section>
  )
}

export default Grid
