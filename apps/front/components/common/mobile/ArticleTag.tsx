import { StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';

interface ArticleTagProps {
    el: StrapiTag;
    onClick?: () => void;
    className?: string;
}

export default function ArticleTag({el, onClick, className}: ArticleTagProps) {
    return (
        <div onClick={onClick} key={el.id} className={`bg-orange text-nowrap rounded-md px-[3.2vw] py-[3.2vw] md:px-[3vw] md:py-[3vw] ${className}`}>
            <p className='font-dharma-gothic-e tracking-[0.045rem] font-bold text-[4.8vw] md:text-[4vw] leading-[1.4vw] uppercase'>
                {el.name}
            </p>
        </div>
    )
}