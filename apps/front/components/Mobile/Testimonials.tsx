'use client'

import { useState } from 'react'
import Button from '@/litebox-lib/ui/Button/Button';
import IMGBackgroundTop from '@/public/pngs/testimonials/backgroundTopMobile.png'
import IMGBackgroundBottom from '@/public/pngs/testimonials/backgroundBottomMobile.png'
import IMGStarFull from '@/public/pngs/testimonials/starFull.png'
import IMGStarEmpty from '@/public/pngs/testimonials/starEmpty.png'
import IMGSliderCircleFull from '@/public/pngs/testimonials/sliderCircleFull.png'
import IMGSliderCircleEmpty from '@/public/pngs/testimonials/sliderCircleEmpty.png'

import IMGCompanyWebflow from '@/public/pngs/testimonials/companyWebflow.png'
import IMGCompanyMetacortex from '@/public/pngs/testimonials/companyMetacortex.png'
import IMGCompanyMatrix from '@/public/pngs/testimonials/companyMatrix.png'
import IMGDeveloper1 from '@/public/pngs/testimonials/developer1.png'
import IMGDeveloper2 from '@/public/pngs/testimonials/developer2.png'
import IMGDeveloper3 from '@/public/pngs/testimonials/developer3.png'

const cards = [{
    stars: 3,
    content: '"AI Foundry has been a game-changer for my development journey. The collaborative spirit and innovative projects inspire me every day."',
    author: 'Jordan Smith',
    avatar: IMGDeveloper1.src,
    position: 'Developer, TechCorp',
    companyLogo: IMGCompanyWebflow.src
},{
    stars: 5,
    content: 'This is an example with a short text',
    author: 'Thomas Anderson',
    avatar: IMGDeveloper2.src,
    position: 'Developer, Meta Cortex',
    companyLogo: IMGCompanyMetacortex.src
},{
    stars: 0,
    content: 'This is an example with a very long text that needs to be cut to avoid the component to take too much vertical space, so instead of showing the full text it is been truncate with "..." somewhere before the end',
    author: 'Agent Smith',
    avatar: IMGDeveloper3.src,
    position: 'Agent, Matrix',
    companyLogo: IMGCompanyMatrix.src
}]

export default function Testimonials() {
    const totalCards = cards.length;
    const [cardIndex, setCardIndex] = useState(0);

    const onClickLeft = () => {
        if(cardIndex-1 < 0){
            setCardIndex(totalCards-1)
        } else {
            setCardIndex(cardIndex-1);
        }
    }

    const onClickRight = () => {
        if(cardIndex+1 > totalCards-1){
            setCardIndex(0)
        } else {
            setCardIndex(cardIndex+1);
        }
    };

    const charLimit = 150;
    let processedContent = cards[cardIndex].content;
    if (processedContent && processedContent.length > charLimit){
        processedContent = processedContent.slice(0, charLimit)
		const lastSpaceIndex = processedContent.lastIndexOf(' ');
		if (lastSpaceIndex > -1) {
			processedContent = processedContent.slice(0, lastSpaceIndex) + "...";
		}
	}

    return (
        <div className='md:hidden flex flex-col pt-[18.35vw] pb-[7.7vw] relative w-full h-fit'>
            <div className='flex flex-col relative w-full bg-black text-sand rounded-[5.35vw] h-[162.7vw]'>
                <div className='absolute w-full h-fit -top-[6.75vw] left-0'>
                    <img src={IMGBackgroundTop.src} />
                </div>
                <div className='flex flex-col w-full h-full px-[6.4vw] pt-[14.95vw]'>
                    <div className='flex flex-row gap-[0.5vw]'>
                        {[...Array(5)].map((i, idx) => (
                            <img key={idx} width='13' height='13' src={idx <= cards[cardIndex].stars ? IMGStarFull.src : IMGStarEmpty.src} />
                        ))}
                    </div>
                    <div className='flex h-[85vw] items-center'>
                        <p className='font-dharma-gothic-e font-black text-[10vw] leading-[8.8vw] tracking-wide uppercase'>
                            {processedContent}
                        </p>
                    </div>
                    <div className='flex flex-row w-full gap-[5.35vw] mb-[10.7vw]'>
                        <div>
                            <img width='55' src={cards[cardIndex].avatar} />
                        </div>
                        <div className='flex flex-col font-host-grotesk w-full'>
                            <div className='font-bold text-[3.75vw] leading-[5.6vw] select-none'>{cards[cardIndex].author}</div>
                            <div className='font-normal text-[3.75vw] leading-[5.6vw] select-none'>{cards[cardIndex].position}</div>
                            <div className='w-[21.9vw] h-[8.6vw] select-none'>
                                <img src={cards[cardIndex].companyLogo} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row z-10'>
                        <div className='flex basis-[10%]'>
                            <Button className='ml-0' onClick={onClickLeft} variant='secondary' svg='scroll-left' resetContainerPadding noShadow/>
                        </div>
                        <div className='flex basis-[80%] justify-center items-center gap-[3.2vw]'>
                            {[...Array(totalCards)].map((i, idx) => (
                                <img key={idx} className='w-[13px]' src={idx == cardIndex ? IMGSliderCircleFull.src : IMGSliderCircleEmpty.src} />
                            ))}
                        </div>
                        <div className='flex basis-[10%]'>
                            <Button onClick={onClickRight} variant='secondary' svg='scroll-right' resetContainerPadding noShadow/>
                        </div>
                    </div>
                </div>
                <div className='absolute w-[83.2vw] -bottom-[31vw] right-0'>
                    <img src={IMGBackgroundBottom.src} />
                </div>
            </div>
        </div>
    )
}