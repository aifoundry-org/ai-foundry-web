import Link from 'next/link';

import LazyMotion from '@/components/common/universal/LazyAnimation'
import FadeUp from '@/components/common/universal/FadeUp'
import FadeDown from '@/components/common/universal/FadeDown'
import Button from '@/libs/litebox-lib/ui/Button/Button'

import IMGBackground from '@/public/imgs/home/findOutMore/background_new.webp';
import IMGCode from '@/public/imgs/home/findOutMore/code.webp'
import IMGCursorUp from '@/public/imgs/home/findOutMore/cursorUp.webp'
import ImageWrapper from '@/components/common/universal/ImageWrapper';

export default function FindOutMore() {
    return (
        <div id='fosdem' className='hidden xs:flex xs:flex-col xs:relative xs:w-full xs:h-[70vw] xs:pt-[4.95vw] overflow-hidden'>
            <LazyMotion>
                <div className='w-full h-full'>
                    <div className='w-full h-full bg-no-repeat bg-[length:100%_100%]' style={{backgroundImage: `url(${IMGBackground.src})`}} />
                </div>
                <div className='absolute w-[29.1vw] top-[1.5vw] right-0'>
                    <ImageWrapper src={IMGCode.src} alt='Code' />
                </div>
                <FadeUp className='absolute text-sand font-dharma-gothic-e uppercase top-[8vw] left-[7.6vw] text-[7vw] font-black'>
                    Join the &quot;AI Plumbers&quot; Dev Room
                    <div className='relative w-[1.95vw] left-[35.2vw] bottom-[3.5vw]'>
                        <ImageWrapper src={IMGCursorUp.src} alt='Cursor up' />
                    </div>
                </FadeUp>
                <FadeDown delay={0.3} className='absolute w-[84vw] top-[20vw] left-[7.6vw]'>
                    <div className='text-black space-y-[1vw]'>
                        <p className='font-host-grotesk text-[1.125vw] leading-[1.65vw] font-normal'>This DevRoom is a celebration of Open Source Low-level AI projects of all types and sizes – the &quot;plumbing&quot; of the AI industry</p>
                        <h3 className='uppercase font-black font-dharma-gothic-e text-[2.8vw] leading-[2.3vw]'>We aspire for this DevRoom to become as important to the AI community as the Linux Plumbers Conference is to the Linux community.</h3>
                        <p className='font-host-grotesk text-[1.125vw] leading-[1.65vw] font-normal'>We are bringing together the top developers working on the essential &quot;plumbing&quot; of the AI industry: hardware accelerators, math kernel libraries, model quantization techniques, low-level inference, fine-tuning engines, distributed and rack-scale computing, and more. Together, we will spend the day discussing core designs and collaborating to solve governance problems.</p>
                        <p className='font-host-grotesk text-[1.125vw] leading-[1.65vw] font-normal'>We are looking for low-level AI core open source project maintainers and committers (such as ggml, llama.cpp and tinygrad, zml, etc.), downstream projects building on top of these (for example, Triton and Dynamo Inference Servers and Docker model runner), as well as end-users of AI stacks to speak about their work and expertise.</p>
                    </div>
                </FadeDown>
                <FadeUp delay={0.5} className='absolute w-fit h-fit bg-black text-sand px-[0.5vw] py-[0.5vw] top-[42.5vw] left-[7.6vw] rounded-lg'>
                    <div className='relative font-helvetica'>
                        <div className='flex flex-col font-normal items-middle'>
                            <div className='flex text-[0.9vw] gap-x-[0.7vw] border-b-[0.5px] border-sand m-[1vw] pb-[0.5vw] pr-[0.5vw] font-bold'>
                                KEY DATES AND LOGISTICS
                            </div>
                            <div className='flex text-[0.8vw] gap-x-[0.7vw] border-b-[0.5px] border-sand m-[1vw] mt-0 pb-[0.5vw] pr-[0.5vw]'>
                                Conference dates: January 31 & February 1, 2026
                            </div>
                            <div className='flex text-[0.8vw] gap-x-[0.7vw] border-b-[0.5px] border-sand m-[1vw] mt-0 pb-[0.5vw] pr-[0.5vw]'>
                                AI Plumbers Devroom: January 31, 2026 (whole day)
                            </div>
                            <div className='flex text-[0.8vw] gap-x-[0.7vw] border-b-[0.5px] border-sand m-[1vw] mt-0 pb-[0.5vw] pr-[0.5vw]'>
                                Submission deadline: December 1, 2025
                            </div>
                            <div className='flex text-[0.8vw] gap-x-[0.7vw] border-b-[0.5px] border-sand m-[1vw] mt-0 pb-[0.5vw] pr-[0.5vw]'>
                                Announcement of selected talks: December 15, 2025
                            </div>
                            <div className='flex text-[0.8vw] gap-x-[0.7vw] border-b-[0.5px] border-sand m-[1vw] mt-0 pb-[0.5vw] pr-[0.5vw]'>
                                Where: FOSDEM 2026, ULB Campus Solbosch, Brussels, Belgium
                            </div>
                            <div className='flex text-[0.8vw] gap-x-[0.7vw] m-[1vw] pr-[0.5vw] mt-0'>
                                Format: Single track, 10&ndash;20 minute technical session
                            </div>
                        </div>
                    </div>
                </FadeUp>
                <FadeDown delay={0.6} className='absolute w-[50vw] top-[42.5vw] right-[7.6vw]'>
                    <div className='text-black space-y-[1vw]'>
                        <h3 className='uppercase font-black font-dharma-gothic-e text-[2.8vw] leading-[2.3vw]'>ABOUT FOSDEM</h3>
                        <p className='font-host-grotesk text-[1.125vw] leading-[1.65vw] font-normal'>FOSDEM is a non-commercial event organized by the community for the community. It will take place on the weekend of 31st of January & 1st of February 2026, in Brussels, Belgium. Participation is free and open to everyone. Last year, attendance exceeded 8,000 participants.</p>
                        <p className='font-host-grotesk text-[1.125vw] leading-[1.65vw] font-normal'>FOSDEM is free to attend. There is no registration.</p>
                    </div>
                </FadeDown>
                <FadeUp delay={0.7} className='absolute top-[55.5vw] right-[27.6vw]'>
                    <div className='relative flex flex-col items-center gap-[1vw]'>
                        <Button target='_blank' as={Link} href='https://fosdem.org/2026/' variant='secondary' content='FOSDEM 2026 website' />
                        <Button target='_blank' as={Link} href='https://github.com/aifoundry-org/fosdem/blob/main/CfP-2026-long.md' variant='secondary' content='More details' />
                    </div>
                </FadeUp>
            </LazyMotion>
        </div>
    )
}
