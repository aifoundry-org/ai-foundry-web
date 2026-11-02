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
            <div id='fosdem-mobile' className='scroll-mt-[18vw] xs:hidden flex flex-col mt-[8vw] relative w-full min-h-[400vw] overflow-hidden'>
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
                <div className='relative flex flex-col w-full px-[7.5vw] pt-[15vw]'>

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
                            <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>AI Plumbers DevRoom at FOSDEM&apos;27 is a celebration of Open Source Low-level AI projects of all types and sizes – the &quot;plumbing&quot; of the AI industry</p>
                            <h3 className='uppercase font-black font-dharma-gothic-e text-[8.6vw] leading-[7vw]'>We aspire for this DevRoom to become as important to the AI community as the Linux Plumbers Conference is to the Linux community.</h3>
                            <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>We are bringing together the developers working on the essential &quot;plumbing&quot; of the AI industry: hardware accelerators, compilers and math kernel libraries, model quantization techniques, inference runtimes and servers, fine-tuning and training engines, edge and physical AI, distributed and rack-scale computing, and more. Together, we will spend the day discussing core designs and collaborating to solve governance problems.</p>
                            <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>We are especially interested in recursive use of AI plumbing: if you build your AI plumbing project agentically, or work on open source agentic coding harnesses, we&apos;d love to hear from you! This year we are delighted to welcome new co-organizers from Hugging Face, Red Hat and Roofline AI, alongside the organizers from previous years.</p>
                        </div>
                    </FadeDown>

                    {/* 3. Projects dropdown block */}
                    <FadeDown delay={0.5} className='mb-[12vw]'>
                        <div className='bg-black text-sand p-[3vw] rounded-lg font-helvetica'>
                            <div className='relative pt-[4.65vw] pb-[1vw]'>
                                <div className='absolute -top-[4vw] left-0 w-[6.35vw] h-[6.35vw]'>
                                    <ImageWrapper src={IMGFoundryBadge.src} alt='' />
                                </div>
                                <div className='text-[3.4vw] mb-[3vw] font-normal leading-[4.4vw]'>
                                    If you&apos;re hacking on any of these projects<br/>and would like to share your experience,<br/>please submit a talk:
                                </div>
                                <div className='flex flex-col gap-[1.2vw]'>
                                    <div className='uppercase text-[2.8vw] font-bold'>
                                        <SVGProjectArrowDown className='inline-block w-[2.6vw] mr-[1.5vw]' />
                                        Projects
                                    </div>
                                    <div className='font-light ml-[0.55vw] text-[3.2vw] leading-[4.2vw]'>
                                        # Agentic coding harnesses (Shelley, Pi, OpenCode)
                                    </div>
                                    <div className='font-light ml-[0.55vw] text-[3.2vw] leading-[4.2vw]'>
                                        # Inference frameworks (ggml/llama.cpp, tinygrad, zml)
                                    </div>
                                    <div className='font-light ml-[0.55vw] text-[3.2vw] leading-[4.2vw]'>
                                        # AI compilers &amp; kernels (PyTorch, MLIR, Mojo, Triton)
                                    </div>
                                    <div className='font-light ml-[0.55vw] text-[3.2vw] leading-[4.2vw]'>
                                        # Bare metal &amp; edge AI (ExecuTorch, LiteRT, IREE)
                                    </div>
                                    <div className='font-light ml-[0.55vw] text-[3.2vw] leading-[4.2vw]'>
                                        # Physical AI (LeRobot, Dronecode, openpi)
                                    </div>
                                    <div className='font-light ml-[0.55vw] text-[3.2vw] leading-[4.2vw]'>
                                        # Inference servers (Dynamo, Docker Model Runner, ramalama)
                                    </div>
                                    <div className='font-light ml-[0.55vw] text-[3.2vw] leading-[4.2vw]'>
                                        # Open weights training (OLMo, Unsloth, Bielik)
                                    </div>
                                    <div className='font-light ml-[0.55vw] text-[3.2vw] leading-[4.2vw]'>
                                        # RISC-V open source AI accelerator hardware
                                    </div>
                                    <div className='font-light ml-[0.55vw] text-[3.2vw] leading-[4.2vw]'>
                                        # AIFoundry
                                    </div>
                                </div>
                                <div className='flex justify-center mt-[3vw]'>
                                    <Button target='_blank' as={Link} href='https://pretalx.fosdem.org/fosdem-2027/cfp' variant='secondary' content='Submit a talk' className='!font-dharma-gothic-e !font-bold !text-black !uppercase' />
                                </div>
                            </div>
                        </div>
                    </FadeDown>

                    {/* 4. KEY DATES AND LOGISTICS block */}
                    <FadeUp delay={0.6} className='mb-[12vw]'>
                        <div className='bg-black text-sand p-[3vw] rounded-lg font-helvetica'>
                            <div className='flex flex-col gap-[2vw] font-light'>
                                <div className='ml-[0.55vw] text-[3.2vw] border-b-[0.5px] border-sand p-[1vw] font-bold'>
                                    KEY DATES AND LOGISTICS
                                </div>
                                <div className='ml-[0.55vw] text-[3vw] border-b-[0.5px] border-sand p-[1vw]'>
                                    Conference dates: January 30 &amp; 31, 2027
                                </div>
                                <div className='ml-[0.55vw] text-[3vw] border-b-[0.5px] border-sand p-[1vw]'>
                                    AI Plumbers Devroom: Sunday, January 31, 2027 (whole day)
                                </div>
                                <div className='ml-[0.55vw] text-[3vw] border-b-[0.5px] border-sand p-[1vw]'>
                                    Submission deadline: November 30, 2026 (AoE)
                                </div>
                                <div className='ml-[0.55vw] text-[3vw] border-b-[0.5px] border-sand p-[1vw]'>
                                    Announcement of selected talks: December 5, 2026
                                </div>
                                <div className='ml-[0.55vw] text-[3vw] border-b-[0.5px] border-sand p-[1vw]'>
                                    Where: FOSDEM 2027, ULB Campus Solbosch, Brussels, Belgium
                                </div>
                                <div className='ml-[0.55vw] text-[3vw] p-[1vw]'>
                                    Format: In-person talks in English, 10, 20 or 40 minutes
                                </div>
                            </div>
                        </div>
                    </FadeUp>

                    {/* 5. ABOUT FOSDEM text block with 2 buttons */}
                    <FadeDown delay={0.7} className='mb-[8vw]'>
                        <div className='text-black space-y-[2.5vw]'>
                            <h3 className='uppercase font-black font-dharma-gothic-e text-[8.6vw] leading-[7vw]'>ABOUT FOSDEM</h3>
                            <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>FOSDEM is a non-commercial event organized by the community for the community. It will take place on the weekend of 30th &amp; 31st of January 2027, in Brussels, Belgium. Participation is free and open to everyone, with over 8,500 participants every year.</p>
                            <p className='font-host-grotesk text-[3.2vw] leading-[4.5vw] font-normal'>FOSDEM is free to attend. There is no registration. Just show up!</p>
                        </div>
                    </FadeDown>

                    <FadeIn delay={0.8} className='mb-[8vw]'>
                        <div className='flex flex-col items-center gap-[3vw]'>
                            <Button target='_blank' as={Link} href='https://fosdem.org/2027/' variant='secondary' content='FOSDEM 2027 website' />
                            <Button target='_blank' as={Link} href='https://github.com/aifoundry-org/fosdem/blob/main/CfP-2027.md' variant='secondary' content='More details' />
                        </div>
                    </FadeIn>

                </div>
            </div>
        </LazyMotion>
    )
}