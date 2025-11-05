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
            <div className='xs:hidden flex flex-col mt-[8vw] relative w-full min-h-[400vw] overflow-hidden'>
                {/* Background */}
                <div className='absolute left-0 top-0 w-full h-full bg-cover bg-bottom bg-no-repeat' style={{backgroundImage: `url(${IMGFindOutMoreBackground.src})`}} />

                {/* Code image */}
                <div className='absolute w-[61.1vw] right-0 top-0 z-10'>
                    <ImageWrapper src={IMGCode.src} alt='' />
                </div>

                {/* Graffiti decorations */}
                <div className='absolute w-[34vw] left-[21.5vw] top-[28vw] mix-blend-plus-lighter z-10'>
                    <ImageWrapper src={IMGFindOutMoreTopGraffiti.src} alt='' />
                </div>
                <div className='absolute w-[44.3vw] left-[52vw] top-[56vw] mix-blend-plus-lighter z-10'>
                    <ImageWrapper src={IMGFindOutMoreBottomGraffiti.src} alt='' />
                </div>

                {/* Sequential content blocks */}
                <div className='relative z-20 flex flex-col w-full px-[7.5vw] pt-[15vw]'>

                    {/* 1. Title: Join the "AI Plumbers" Dev Room */}
                    <FadeUp className='mb-[12vw]'>
                        <div className='text-center'>
                            <p className='uppercase font-dharma-gothic-e font-black text-[9vw] leading-[7vw] text-white mb-[4vw]'>
                                Join the &quot;AI Plumbers&quot; Dev Room
                            </p>
                            <div className='flex justify-between items-center px-[15vw]'>
                                <div className='w-[3.75vw]'>
                                    <ImageWrapper src={IMGCursorDown.src} alt='' />
                                </div>
                                <div className='w-[3.75vw]'>
                                    <ImageWrapper src={IMGCursorUp.src} alt='' />
                                </div>
                            </div>
                        </div>
                    </FadeUp>

                    {/* 2. This DevRoom is... text block */}
                    <FadeDown delay={0.3} className='mb-[12vw]'>
                        <div className='text-black space-y-[2.5vw]'>
                            <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>This DevRoom is a celebration of Open Source Low-level AI projects of all types and sizes – the &quot;plumbing&quot; of the AI industry</p>
                            <h3 className='uppercase font-black font-dharma-gothic-e text-[8.6vw] leading-[7vw]'>We aspire for this DevRoom to become as important to the AI community as the Linux Plumbers Conference is to the Linux community.</h3>
                            <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>We are bringing together the top developers working on the essential &quot;plumbing&quot; of the AI industry: hardware accelerators, math kernel libraries, model quantization techniques, low-level inference, fine-tuning engines, distributed and rack-scale computing, and more. Together, we will spend the day discussing core designs and collaborating to solve governance problems.</p>
                            <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>We are looking for low-level AI core open source project maintainers and committers (such as ggml, llama.cpp and tinygrad, zml, etc.), downstream projects building on top of these (for example, Triton and Dynamo Inference Servers and Docker model runner), as well as end-users of AI stacks to speak about their work and expertise.</p>
                        </div>
                    </FadeDown>

                    {/* 3. Projects dropdown block */}
                    <FadeDown delay={0.5} className='mb-[12vw]'>
                        <div className='bg-black text-sand p-[3vw] rounded-lg font-helvetica'>
                            <div className='relative pt-[4.65vw] pb-[1vw]'>
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
                        </div>
                    </FadeDown>

                    {/* 4. KEY DATES AND LOGISTICS block */}
                    <FadeUp delay={0.6} className='mb-[12vw]'>
                        <div className='bg-black text-sand p-[3vw] rounded-lg font-helvetica'>
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

                    {/* 5. ABOUT FOSDEM text block with 2 buttons */}
                    <FadeDown delay={0.7} className='mb-[8vw]'>
                        <div className='text-black space-y-[2.5vw]'>
                            <h3 className='uppercase font-black font-dharma-gothic-e text-[8.6vw] leading-[7vw]'>ABOUT FOSDEM</h3>
                            <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>FOSDEM is a non-commercial event organized by the community for the community. It will take place on the weekend of 31st of January & 1st of February 2026, in Brussels, Belgium. Participation is free and open to everyone. Last year, attendance exceeded 8,000 participants.</p>
                            <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>FOSDEM is free to attend. There is no registration.</p>
                        </div>
                    </FadeDown>

                    <FadeIn delay={0.8} className='mb-[8vw]'>
                        <div className='flex flex-col items-center gap-[3vw]'>
                            <Button target='_blank' as={Link} href='https://fosdem.org/2026/' variant='secondary' content='FOSDEM 2026 website' />
                            <Button target='_blank' as={Link} href='https://github.com/aifoundry-org/fosdem/blob/main/CfP-2026-long.md' variant='secondary' content='More details' />
                        </div>
                    </FadeIn>

                </div>
            </div>
        </LazyMotion>
    )
}