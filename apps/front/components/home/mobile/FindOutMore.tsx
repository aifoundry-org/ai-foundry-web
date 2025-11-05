import Link from 'next/link'

import LazyMotion from '@/components/common/universal/LazyAnimation'
import FadeUp from '@/components/common/universal/FadeUp'
import FadeDown from '@/components/common/universal/FadeDown'
import FadeIn from '@/components/common/universal/FadeIn'
import Button from '@/libs/litebox-lib/ui/Button/Button'

import IMGFindOutMoreBackground from '@/public/imgs/home/findOutMore/backgroundMobile_new.webp'
import IMGCode from '@/public/imgs/home/findOutMore/codeMobile.webp'
import IMGFindOutMoreTopGraffiti from '@/public/imgs/home/findOutMore/topGraffitiMobile.webp'
import IMGFindOutMoreBottomGraffiti from '@/public/imgs/home/findOutMore/bottomGraffitiMobile.webp'
import IMGCursorDown from '@/public/imgs/home/findOutMore/cursorDownMobile.webp'
import IMGCursorUp from '@/public/imgs/home/findOutMore/cursorUpMobile.webp'
import IMGFoundryBadge from '@/public/imgs/home/findOutMore/badgeMobile.webp'

import SVGProjectArrowDown from '@/public/svgs/findOutMore/ProjectArrowDown'
import ImageWrapper from '@/components/common/universal/ImageWrapper'

export default function FindOutMore() {
    return (
        <LazyMotion>
            <div className='xs:hidden flex flex-col mt-[8vw] relative w-full h-[290vw] overflow-hidden'>
                <div className='absolute left-0 bottom-0 w-full h-full bg-cover bg-bottom bg-no-repeat' style={{backgroundImage: `url(${IMGFindOutMoreBackground.src})`}} />
                <div className='absolute w-[61.1vw] right-0 top-0'>
                    <ImageWrapper src={IMGCode.src} alt='' />
                </div>
                <div className='relative w-full h-full -top-[9vw]'>
                    <div className='absolute w-[34vw] left-[21.5vw] top-[37.5vw] mix-blend-plus-lighter'>
                        <ImageWrapper src={IMGFindOutMoreTopGraffiti.src} alt='' />
                    </div>
                    <div className='absolute w-[44.3vw] left-[52vw] top-[65vw] mix-blend-plus-lighter'>
                        <ImageWrapper src={IMGFindOutMoreBottomGraffiti.src} alt='' />
                    </div>
                </div>
                <FadeUp className='absolute w-full h-full -top-[12vw]'>
                    <p className='relative uppercase left-1/2 -translate-x-1/2 top-[25vw] text-center font-dharma-gothic-e font-black text-[9vw] leading-[7vw] text-white'>
                        Join the &quot;AI Plumbers&quot; Dev Room
                    </p>
                    <div className='relative w-[3.75vw] left-[27vw] -top-[7vw]'>
                        <ImageWrapper src={IMGCursorDown.src} alt='' />
                    </div>
                    <div className='relative w-[3.75vw] left-[61vw] top-[17vw]'>
                        <ImageWrapper src={IMGCursorUp.src} alt='' />
                    </div>
                </FadeUp>
                <FadeDown delay={0.3} className='absolute w-[85vw] top-[45vw] left-[7.5vw]'>
                    <div className='text-black space-y-[2.5vw]'>
                        <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>This DevRoom is a celebration of Open Source Low-level AI projects of all types and sizes – the &quot;plumbing&quot; of the AI industry</p>
                        <h3 className='uppercase font-black font-dharma-gothic-e text-[8.6vw] leading-[7vw]'>We aspire for this DevRoom to become as important to the AI community as the Linux Plumbers Conference is to the Linux community.</h3>
                        <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>We are bringing together the top developers working on the essential &quot;plumbing&quot; of the AI industry: hardware accelerators, math kernel libraries, model quantization techniques, low-level inference, fine-tuning engines, distributed and rack-scale computing, and more. Together, we will spend the day discussing core designs and collaborating to solve governance problems.</p>
                        <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>We are looking for low-level AI core open source project maintainers and committers (such as ggml, llama.cpp and tinygrad, zml, etc.), downstream projects building on top of these (for example, Triton and Dynamo Inference Servers and Docker model runner), as well as end-users of AI stacks to speak about their work and expertise.</p>
                    </div>
                </FadeDown>
                <FadeDown delay={0.6} className='absolute w-[85vw] top-[130vw] left-[7.5vw]'>
                    <div className='text-black space-y-[2.5vw]'>
                        <h3 className='uppercase font-black font-dharma-gothic-e text-[8.6vw] leading-[7vw]'>ABOUT FOSDEM</h3>
                        <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>FOSDEM is a non-commercial event organized by the community for the community. It will take place on the weekend of 31st of January & 1st of February 2026, in Brussels, Belgium. Participation is free and open to everyone. Last year, attendance exceeded 8,000 participants.</p>
                        <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>FOSDEM is free to attend. There is no registration.</p>
                    </div>
                </FadeDown>
                <FadeIn delay={0.7} className='absolute bottom-[35vw] w-full'>
                    <div className='relative w-full flex flex-col items-center gap-[3vw]'>
                        <Button target='_blank' as={Link} href='https://fosdem.org/2026/' variant='secondary' content='FOSDEM 2026 website' />
                        <Button target='_blank' as={Link} href='https://github.com/aifoundry-org/fosdem/blob/main/CfP-2026-long.md' variant='secondary' content='More details' />
                    </div>
                </FadeIn>
                <FadeDown delay={0.5} className='absolute bg-black text-sand p-[1.5vw] top-[120vw] left-[9.5vw] rounded-lg'>
                    <div className='relative font-helvetica px-[2vw] pt-[4.65vw] pb-[1vw]'>
                        <div className='absolute -top-[4vw] left-0 w-[6.35vw] h-[6.35vw]'>
                            <ImageWrapper src={IMGFoundryBadge.src} alt='' />
                        </div>
                        <div className='text-[2vw] mb-[2vw] font-normal leading-[2.5vw]'>
                            If you&apos;re hacking on any of these project<br/>and would like to share your experience,<br/>please submit a talk:
                        </div>
                        <div className='flex flex-col gap-[1.2vw]'>
                            <div className='uppercase text-[1.65vw] font-bold'>
                                <SVGProjectArrowDown className='inline-block w-[2vw] mr-[1vw]' />
                                Projects
                            </div>
                            <div className='font-light ml-[0.55vw] text-[1.9vw]'>
                                # ggml/llama.cpp
                            </div>
                            <div className='font-light ml-[0.55vw] text-[1.9vw]'>
                                # tinygrad
                            </div>
                            <div className='font-light ml-[0.55vw] text-[1.9vw]'>
                                # zml
                            </div>
                            <div className='font-light ml-[0.55vw] text-[1.9vw]'>
                                # Apache Airflow
                            </div>
                            <div className='font-light ml-[0.55vw] text-[1.9vw]'>
                                # RISC-V based open source AI accelerator hardware
                            </div>
                            <div className='font-light ml-[0.55vw] text-[1.9vw]'>
                                # Inference Servers (Triton, Docker model runner)
                            </div>
                            <div className='font-light ml-[0.55vw] text-[1.9vw]'>
                                # Hugging Face
                            </div>
                            <div className='font-light ml-[0.55vw] text-[1.9vw]'>
                                # Bielik Project
                            </div>
                            <div className='font-light ml-[0.55vw] text-[1.9vw]'>
                                # AIFoundry
                            </div>
                        </div>
                        <div className='flex justify-center mt-[3vw]'>
                            <Button target='_blank' as={Link} href='https://pretalx.fosdem.org/fosdem-2026/cfp' variant='secondary' content='Submit a talk' className='!font-dharma-gothic-e !font-bold !text-black !uppercase' />
                        </div>
                    </div>
                </FadeDown>
                <FadeUp delay={0.5} className='absolute w-fit h-fit bg-black text-sand p-[1.5vw] top-[190vw] left-[7.5vw] rounded-lg'>
                    <div className='relative font-helvetica p-[1vw]'>
                        <div className='flex flex-col gap-[2vw] font-light'>
                            <div className='ml-[0.55vw] text-[1.8vw] border-b-[0.5px] border-sand p-[1vw] font-bold'>
                                KEY DATES AND LOGISTICS
                            </div>
                            <div className='ml-[0.55vw] text-[1.6vw] border-b-[0.5px] border-sand p-[1vw]'>
                                Conference dates: 31st of January & 1st of February 2026
                            </div>
                            <div className='ml-[0.55vw] text-[1.6vw] border-b-[0.5px] border-sand p-[1vw]'>
                                AI Plumbers Devroom: Saturday January 31st, 2026 (whole day)
                            </div>
                            <div className='ml-[0.55vw] text-[1.6vw] border-b-[0.5px] border-sand p-[1vw]'>
                                Submission deadline: December 1st, 2025
                            </div>
                            <div className='ml-[0.55vw] text-[1.6vw] border-b-[0.5px] border-sand p-[1vw]'>
                                Announcement of selected talks: December, 15th 2025
                            </div>
                            <div className='ml-[0.55vw] text-[1.6vw] border-b-[0.5px] border-sand p-[1vw]'>
                                Where: FOSDEM 2025, ULB Campus Solbosch, Brussels, Belgium
                            </div>
                            <div className='ml-[0.55vw] text-[1.6vw] p-[1vw]'>
                                Format: Single track, 10 - 20 minute technical session
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </LazyMotion>
    )
}