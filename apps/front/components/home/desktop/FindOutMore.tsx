import Link from 'next/link';

import LazyMotion from '@/components/common/universal/LazyAnimation'
import FadeUp from '@/components/common/universal/FadeUp'
import FadeDown from '@/components/common/universal/FadeDown'
import Button from '@/libs/litebox-lib/ui/Button/Button'

import IMGBackground from '@/public/imgs/home/findOutMore/background_new.webp';
import IMGFoundryBadge from '@/public/imgs/home/findOutMore/badge.webp'
import IMGCode from '@/public/imgs/home/findOutMore/code.webp'
import IMGCursorUp from '@/public/imgs/home/findOutMore/cursorUp.webp'

import SVGProjectArrowDown from '@/public/svgs/findOutMore/ProjectArrowDown'
import ImageWrapper from '@/components/common/universal/ImageWrapper';

export default function FindOutMore() {
    return (
        <div id='fosdem' className='scroll-mt-[3vw] hidden xs:flex xs:flex-col xs:relative xs:w-full xs:h-[90vw] xs:pt-[4.95vw] overflow-hidden'>
            <LazyMotion>
                <div className='w-full h-full'>
                    <div className='w-full h-full bg-cover bg-bottom bg-no-repeat' style={{backgroundImage: `url(${IMGBackground.src})`}} />
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
                <FadeDown delay={0.3} className='absolute w-[45vw] top-[20vw] left-[7.6vw]'>
                    <div className='text-black space-y-[1vw]'>
                        <p className='font-host-grotesk text-[1.125vw] leading-[1.65vw] font-normal'>This DevRoom is a celebration of Open Source Low-level AI projects of all types and sizes – the &quot;plumbing&quot; of the AI industry</p>
                        <h3 className='uppercase font-black font-dharma-gothic-e text-[2.8vw] leading-[2.3vw]'>We aspire for this DevRoom to become as important to the AI community as the Linux Plumbers Conference is to the Linux community.</h3>
                        <p className='font-host-grotesk text-[1.125vw] leading-[1.65vw] font-normal'>We are bringing together the developers working on the essential &quot;plumbing&quot; of the AI industry: hardware accelerators, compilers and math kernel libraries, model quantization techniques, inference runtimes and servers, fine-tuning and training engines, edge and physical AI, distributed and rack-scale computing, and more. Together, we will spend the day discussing core designs and collaborating to solve governance problems.</p>
                        <p className='font-host-grotesk text-[1.125vw] leading-[1.65vw] font-normal'>We are especially interested in recursive use of AI plumbing: if you build your AI plumbing project agentically, or work on open source agentic coding harnesses, we&apos;d love to hear from you! This year we are delighted to welcome new co-organizers from Hugging Face, Red Hat and Roofline AI, alongside the organizers from previous years.</p>
                    </div>
                </FadeDown>
                <FadeDown delay={0.5} className='absolute w-fit h-fit bg-black text-sand p-[1.3vw] top-[20vw] right-[7.6vw] rounded-lg'>
                    <div className='relative font-helvetica px-[0.5vw] pt-[2vw] pb-[0.5vw]'>
                        <div className='absolute -top-[2.8vw] left-0 w-[3.4vw] h-[3.4vw]'>
                            <ImageWrapper src={IMGFoundryBadge.src} alt='AIFoundry badge' />
                        </div>
                        <div className='text-[1vw] mb-[1vw] font-normal leading-[1.3vw]'>
                            If you&apos;re hacking on any of these projects<br/>and would like to share your experience,<br/>please submit a talk:
                        </div>
                        <div className='flex flex-col gap-[0.4vw]'>
                            <div className='uppercase flex align-middle text-[0.91vw] font-bold'>
                                <SVGProjectArrowDown className='inline-block w-[0.7vw] mr-[0.5vw]' />
                                Projects
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.05vw]'>
                                # Agentic coding harnesses (Shelley, Pi, OpenCode)
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.05vw]'>
                                # Inference frameworks (ggml/llama.cpp, tinygrad, zml)
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.05vw]'>
                                # AI compilers &amp; kernels (PyTorch, MLIR, Mojo, Triton)
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.05vw]'>
                                # Bare metal &amp; edge AI (ExecuTorch, LiteRT, IREE)
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.05vw]'>
                                # Physical AI (LeRobot, Dronecode, openpi)
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.05vw]'>
                                # Inference servers (Dynamo, Docker Model Runner, ramalama)
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.05vw]'>
                                # Open weights training (OLMo, Unsloth, Bielik)
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.05vw]'>
                                # RISC-V open source AI accelerator hardware
                            </div>
                            <div className='font-normal ml-[0.1vw] text-[1.05vw]'>
                                # AIFoundry
                            </div>
                        </div>
                        <div className='flex justify-center mt-[1.5vw]'>
                            <Button target='_blank' as={Link} href='https://pretalx.fosdem.org/fosdem-2027/cfp' variant='secondary' content='Submit a talk' className='!font-dharma-gothic-e !font-bold !text-black !uppercase' />
                        </div>
                    </div>
                </FadeDown>
                <FadeUp delay={0.5} className='absolute w-fit h-fit bg-black text-sand px-[0.5vw] py-[0.5vw] top-[60vw] left-[7.6vw] rounded-lg'>
                    <div className='relative font-helvetica'>
                        <div className='flex flex-col font-normal items-middle'>
                            <div className='flex text-[0.9vw] gap-x-[0.7vw] border-b-[0.5px] border-sand m-[1vw] pb-[0.5vw] pr-[0.5vw] font-bold'>
                                KEY DATES AND LOGISTICS
                            </div>
                            <div className='flex text-[0.8vw] gap-x-[0.7vw] border-b-[0.5px] border-sand m-[1vw] mt-0 pb-[0.5vw] pr-[0.5vw]'>
                                Conference dates: January 30 &amp; 31, 2027
                            </div>
                            <div className='flex text-[0.8vw] gap-x-[0.7vw] border-b-[0.5px] border-sand m-[1vw] mt-0 pb-[0.5vw] pr-[0.5vw]'>
                                AI Plumbers Devroom: Sunday, January 31, 2027 (whole day)
                            </div>
                            <div className='flex text-[0.8vw] gap-x-[0.7vw] border-b-[0.5px] border-sand m-[1vw] mt-0 pb-[0.5vw] pr-[0.5vw]'>
                                Submission deadline: November 30, 2026 (AoE)
                            </div>
                            <div className='flex text-[0.8vw] gap-x-[0.7vw] border-b-[0.5px] border-sand m-[1vw] mt-0 pb-[0.5vw] pr-[0.5vw]'>
                                Announcement of selected talks: December 5, 2026
                            </div>
                            <div className='flex text-[0.8vw] gap-x-[0.7vw] border-b-[0.5px] border-sand m-[1vw] mt-0 pb-[0.5vw] pr-[0.5vw]'>
                                Where: FOSDEM 2027, ULB Campus Solbosch, Brussels, Belgium
                            </div>
                            <div className='flex text-[0.8vw] gap-x-[0.7vw] m-[1vw] pr-[0.5vw] mt-0'>
                                Format: In-person talks in English, 10, 20 or 40 minutes
                            </div>
                        </div>
                    </div>
                </FadeUp>
                <FadeDown delay={0.6} className='absolute w-[40vw] top-[60vw] right-[7.6vw]'>
                    <div className='text-black space-y-[1vw]'>
                        <h3 className='uppercase font-black font-dharma-gothic-e text-[2.8vw] leading-[2.3vw]'>ABOUT FOSDEM</h3>
                        <p className='font-host-grotesk text-[1.125vw] leading-[1.65vw] font-normal'>FOSDEM is a non-commercial event organized by the community for the community. It will take place on the weekend of 30th &amp; 31st of January 2027, in Brussels, Belgium. Participation is free and open to everyone, with over 8,500 participants every year.</p>
                        <p className='font-host-grotesk text-[1.125vw] leading-[1.65vw] font-normal'>FOSDEM is free to attend. There is no registration. Just show up!</p>
                    </div>
                </FadeDown>
                <FadeUp delay={0.7} className='absolute top-[73vw] right-[27.6vw]'>
                    <div className='relative flex flex-col items-center gap-[1vw]'>
                        <Button target='_blank' as={Link} href='https://fosdem.org/2027/' variant='secondary' content='FOSDEM 2027 website' />
                        <Button target='_blank' as={Link} href='https://github.com/aifoundry-org/fosdem/blob/main/CfP-2027.md' variant='secondary' content='More details' />
                    </div>
                </FadeUp>
            </LazyMotion>
        </div>
    )
}
