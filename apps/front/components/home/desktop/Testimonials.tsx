'use client'

import { useState } from 'react'
import Button from '@/litebox-lib/ui/Button/Button';
import IMGBackgroundTop from '@/public/pngs/testimonials/backgroundTop.png'
import IMGBackgroundBottom from '@/public/pngs/testimonials/backgroundBottom.png'
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
        <div className='hidden md:flex md:flex-col md:pt-[6vw] md:pb-[7.7vw] md:relative md:w-full md:h-full'>
            <div className='flex flex-col relative w-full h-[55vw] bg-black text-sand rounded-[1.4vw]'>
                <div className='absolute w-full h-fit -top-[3.45vw] left-0'>
                    <img src={IMGBackgroundTop.src} />
                </div>
                <div className='flex flex-row w-full h-full px-[6.4vw] items-center'>
                    <div className='flex basis-[10%]'>
                        <Button className='!w-[3.34vw] !h-[3.34vw]' containerProps='!px-[0.75vw]' onClick={onClickLeft} variant='secondary' svg='scroll-left' noShadow/>
                    </div>
                    <div className='flex flex-col basis-[80%] px-[6vw] items-center'>
                        <div className='flex flex-row w-full justify-start pb-[2.225vw] gap-[0.15vw]'>
                            {[...Array(5)].map((i, idx) => (
                                <img key={idx} width='19' src={idx <= cards[cardIndex].stars ? IMGStarFull.src : IMGStarEmpty.src} />
                            ))}
                        </div>
                        <div className='flex h-[22vw] items-center'>
                            <p className='font-dharma-gothic-e font-black text-[4.45vw] leading-[4.45vw] tracking-wide uppercase'>
                                {processedContent}
                            </p>
                        </div>
                        <div className='flex flex-row mt-[2.223vw] w-full h-[4.17vw] justify-start items-center'>
                            <div className='w-[3.84vw]'>
                                <img width='55' src={cards[cardIndex].avatar} />
                            </div>
                            <div className='flex flex-col px-[1.5vw] font-host-grotesk border-r-[1px]'>
                                <div className='font-bold text-[1.115vw] leading-[1.67vw]'>{cards[cardIndex].author}</div>
                                <div className='font-normal text-[1.115vw] leading-[1.67vw]'>{cards[cardIndex].position}</div>
                            </div>
                            <div className='w-[21.9vw] pl-[1.5vw]'>
                                <img src={cards[cardIndex].companyLogo} />
                            </div>
                        </div>
                        <div className='flex w-full justify-center items-center mt-[4.515vw] gap-[0.905vw]'>
                            {[...Array(totalCards)].map((i, idx) => (
                                <img key={idx} className='w-[13px]' src={idx == cardIndex ? IMGSliderCircleFull.src : IMGSliderCircleEmpty.src} />
                            ))}
                        </div>
                    </div>
                    <div className='flex basis-[10%]'>
                        <Button className='!w-[3.34vw] !h-[3.34vw]' containerProps='!px-[0.75vw]' onClick={onClickRight} variant='secondary' svg='scroll-right' noShadow/>
                    </div>
                </div>
                <div className='absolute w-[25.91vw] -bottom-[10.75vw] right-[4.45vw]'>
                    <img src={IMGBackgroundBottom.src} />
                </div>
            </div>
        </div>
    )
}