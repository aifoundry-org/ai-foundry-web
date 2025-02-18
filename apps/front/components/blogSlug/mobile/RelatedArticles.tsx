/* eslint-disable */
import Link from 'next/link';
import { StrapiArticle, StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import IMGBackground from '@/public/pngs/blogSlug/backgroundRelatedPostsMobile.png'
import IMGGraffiti from '@/public/pngs/blogSlug/graffitiMobile.png'
import IMGError from '@/public/pngs/blogSlug/errorMobile.png'
import Button from '@/libs/litebox-lib/ui/Button/Button';

interface BlogArticleProps {
    articles?: StrapiArticle[];
}

export default function RelatedArticles({ articles }: BlogArticleProps) {
  return (
    <div className='bg-peach mt-[20vw] px-[2.4rem] relative'>
        <img className='flex w-full absolute -top-[21vw] left-0 -z-[1]' src={IMGBackground.src} />
        <div className='flex flex-col mb-[10vw]'>
            <p className='font-black text-[4.8rem] leading-[4rem] uppercase'>Related posts</p>
        </div>
        <div className='flex flex-col gap-y-[10vw]'>
            {articles && articles.map((article: any) => {
                const { id, title, date, authors, coverImage, tags, slug } = article;

                return (
                    <div key={id} className='flex flex-col w-full h-full'>
                        <div className='flex flex-row items-center justify-between mb-[7vw]'>
                            {coverImage ? 
                                <img src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${coverImage.url}`} className='border-2 border-black rounded-lg' /> : 
                                <div className='flex w-full h-[49.1vw] border-2 border-black rounded-lg text-center justify-center items-center text-[8vw] uppercase'>No cover image</div>
                            }
                        </div>
                        <div className='flex flex-row items-center mb-[4.275vw] gap-x-[2.15vw]'>
                            {tags.map((el: StrapiTag) => (
                                <div key={el.id} className='bg-orange rounded-md px-[3.2vw] py-[2.2vw]'>
                                    <p className='font-dharma-gothic-e font-bold text-[4.8vw] leading-[4.8vw] uppercase'>
                                        {el.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-row items-center justify-between mb-[4.275vw]'>
                            <p className='font-dharma-gothic-e text-left font-black text-[8.6vw] leading-[7vw] uppercase'>{title}</p>
                        </div>
                        <div className='flex flex-row font-normal text-[3.2vw] leading-[5.6vw] font-host-grotesk'>
                            {authors && authors.length > 0 && `${authors[0].name} | `}{date && new Date(date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </div>
                        <div className='flex flex-row basis-[80%] justify-start mt-7 mb-9'>
                            <Button as={Link} href={`/blog/${slug}`} variant='secondary' content='Read more' />
                        </div>
                    </div>
                );
            })}
            <div className='flex w-full justify-start mb-[25vw] -mt-[6vw]'>
                <Button as={Link} href='/blog/' variant='primary' content='View all blog posts' />
            </div>
        </div>
        <img className='flex w-[60vw] absolute -bottom-[7.5vw] right-0 mix-blend-overlay' src={IMGGraffiti.src} />
        <img className='flex w-[44.6vw] absolute bottom-0 right-0' src={IMGError.src} />
    </div>
  );
};