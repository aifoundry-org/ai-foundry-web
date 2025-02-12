import Link from 'next/link';
import { StrapiArticle, StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import IMGBackground from '@/public/pngs/blogSlug/backgroundRelatedPosts.png'
import IMGBackgroundDecorations from '@/public/pngs/blogSlug/backgroundDecorations.png'
import IMGGraffiti from '@/public/pngs/blogSlug/graffiti.png'
import IMGError from '@/public/pngs/blogSlug/error.png'
import Button from '@/libs/litebox-lib/ui/Button/Button';

interface BlogArticleProps {
    articles?: StrapiArticle[];
}

export default function RelatedArticles({ articles }: BlogArticleProps) {
  return (
    <div className='bg-peach mt-[28vw] relative w-full'>
        <img className='flex w-[45vw] absolute -top-[20.75vw] right-0' src={IMGBackgroundDecorations.src} />
        <img className='flex w-full absolute -top-[17vw] left-0 -z-[1]' src={IMGBackground.src} />
        <div className='flex flex-col px-[8.5vw] mx-auto max-w-[144rem] lg:max-w-[144rem] xl:max-w-[144rem] 2xl:max-w-[200rem] relative -top-[8vw]'>
            <div className='flex w-full flex-row justify-between mb-[4vw]'>
                <p className='font-black text-[4rem] md:text-[6.4rem] lg:text-[6.4rem] xl:text-[6.4rem] 2xl:text-[6.4rem] justify-start leading-[5.3rem] uppercase'>Related posts</p>
                <div className='flex justify-end'>
                    <Button as={Link} href='/blog/' variant='primary' content='View all blog posts' />
                </div>
            </div>
            <div className='flex flex-row flex-wrap lg:flex-nowrap w-full gap-x-[2.4rem] gap-y-[5rem]'>
                {articles && articles.map((article: any) => {
                    const { id, title, date, authors, coverImage, tags, slug } = article;

                    return (
                        <div key={id} className='flex flex-col w-full h-full'>
                            <div className='flex flex-row items-center mb-[3vw] lg:mb-[1.675vw] xl:mb-[1.675vw] 2xl:mb-[1.675vw]'>
                                <img src={`${process.env.STRAPI_BASE_URL}${coverImage.url}`} className='border-2 border-black rounded-lg w-full' />
                            </div>
                            <div className='flex flex-row items-center text-nowrap mb-[5vw] md:mb-[1vw] lg:mb-[1.125vw] xl:mb-[1.125vw] 2xl:mb-[1.125vw] gap-x-[0.575vw]'>
                                {tags.map((el: StrapiTag) => (
                                    <div key={el.id} className='bg-orange rounded-md px-[2.5vw] md:px-[1vw] lg:px-[1vw] xl:px-[1vw] 2xl:px-[0.5vw] py-[4vw] md:py-[1.5vw] lg:py-[0.75vw] xl:py-[0.75vw] 2xl:py-[0.5vw]'>
                                        <p className='font-dharma-gothic-e font-bold text-[6vw] md:text-[3vw] lg:text-[1.4vw] xl:text-[1.4vw] 2xl:text-[1.4vw] leading-[1.4vw] uppercase'>
                                            {el.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-row items-center mb-[2vw] md:mb-0 lg:mb-[1.25vw] xl:mb-[1.25vw] 2xl:mb-[1.25vw]'>
                                <p className='font-dharma-gothic-e font-black text-[8vw] md:text-[4vw] lg:text-[2.778vw] xl:text-[2.778vw] 2xl:text-[2.3vw] leading-[7vw] lg:leading-[2.3vw] xl:leading-[2.3vw] 2xl:leading-[2.1vw] uppercase'>{title}</p>
                            </div>
                            <div className='flex flex-row font-normal text-[5vw] md:text-[3vw] lg:text-[1vw] xl:text-[1vw] 2xl:text-[1vw] leading-[6vw] lg:leading-[1.5vw] xl:leading-[1.5vw] 2xl:leading-[1.5vw] font-host-grotesk'>
                                {authors[0].name} | {new Date(date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                            <div className='flex flex-row basis-[80%] justify-start mt-8'>
                                <Button as={Link} href={`/blog/${slug}`} variant='secondary' content='Read more' />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        <img className='flex w-[32.45vw] absolute -bottom-[16vw] left-[3.5vw] mix-blend-overlay z-[1]' src={IMGGraffiti.src} />
        <img className='flex w-[20.92vw] absolute -bottom-[2.5vw] left-[5vw] z-[2]' src={IMGError.src} />
    </div>
  );
};