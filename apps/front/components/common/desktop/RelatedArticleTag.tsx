import { StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';

interface ArticleTagProps {
    el: StrapiTag
}

export default function ArticleTag({el}: ArticleTagProps) {
    return (
        <div key={el.id} className='bg-orange rounded-md px-[2.5vw] md:px-[1vw] lg:px-[1vw] xl:px-[1vw] 2xl:px-[0.5vw] py-[4vw] md:py-[1.5vw] lg:py-[0.75vw] xl:py-[0.75vw] 2xl:py-[0.5vw]'>
            <p className='font-dharma-gothic-e font-bold text-[6vw] md:text-[3vw] lg:text-[1.4vw] xl:text-[1.4vw] 2xl:text-[1.4vw] leading-[1.4vw] uppercase'>
                {el.name}
            </p>
        </div>
    )
}