import Button from '@/litebox-lib/ui/Button/Button';
import SVGIconArrowUpRight from '@/public/svgs/common/ArrowUpRight';
import Link from 'next/link';

export default function OpenSourceProjectsCard({title = '', subtitle = '', content = '', link = ''}) {
    return (
        <div className='flex flex-col w-full lg:w-[37.3rem] xl:w-[37.3rem] 2xl:w-[26vw] py-[5vw] md:py-0 xl:py-0 lg:py-0'>
            <div className='flex flex-row h-[5rem] md:h-[14.7rem] lg:h-[14.7rem] xl:h-[14.7rem] 2xl:h-[7vw] items-start justify-between border-b-2 border-black'>
                <p className='font-dharma-gothic-e font-black text-[4rem] 2xl:text-[2.6vw] leading-[3.3rem] uppercase'>{title}</p>
                <div className='inline-block'>
                    <SVGIconArrowUpRight />
                </div>
            </div>
            <div className='flex flex-col mt-[3vw] h-full border-b-2 border-black leading-[2.4rem]'>
                <div className={`font-host-grotesk font-bold text-[1.6rem] 2xl:text-[1.1vw] 2xl:leading-[1.2vw] ${content == '' && 'pb-[3vw] md:pb-0 xl:pb-0 lg:pb-0'}`}>{subtitle}</div>
                {content !== '' && <div dangerouslySetInnerHTML={{__html: content}} className='font-host-grotesk font-normal text-[1.4rem] 2xl:text-[1vw] 2xl:leading-[1.5vw] pt-[1.125vw] pb-[3.5vw] xl:pb-0 lg:pb-0' />}
            </div>
            <Button target="_blank" as={Link} href={link} className='mt-8' variant='secondary' content='View repo' svg='github' />
        </div>
        )
}
