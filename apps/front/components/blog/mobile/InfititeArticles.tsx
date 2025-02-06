import { useState, useEffect, useMemo } from 'react';
import Button from '@/libs/litebox-lib/ui/Button/Button';
import Link from 'next/link';
import { InfiniteArticlesProps, PAGINATION_LIMIT } from '../universal/InfiniteArticlesType';

const InfiniteArticles = ({
  search,
  tags,
  initArticles,
  featuredArticleId
}: InfiniteArticlesProps) => {
    const [articles, setArticles] = useState(initArticles.slice(0, PAGINATION_LIMIT));
    const [visibleCount, setVisibleCount] = useState(PAGINATION_LIMIT);
    const [hasMoreArticles, setHasMoreArticles] = useState(true);

    const sortedArticles = useMemo(() => {
        return articles.sort((a:any, b:any) => {
            if (a.id === featuredArticleId) return -1;
            if (b.id === featuredArticleId) return 1;
            return 0;
        });
    }, [articles, featuredArticleId]);

    const showMoreArticles = async () => {
        const newVisibleCount = visibleCount + PAGINATION_LIMIT;
        setArticles(initArticles.slice(0, newVisibleCount));
        setVisibleCount(newVisibleCount);
        setHasMoreArticles(newVisibleCount < initArticles.length);
    };

    useEffect(() => {
        setArticles(initArticles.slice(0, PAGINATION_LIMIT));
        setVisibleCount(PAGINATION_LIMIT);
        setHasMoreArticles(initArticles.length > PAGINATION_LIMIT);
    }, [search, tags, initArticles]);

  return (
    <>
        <div className='grid grid-cols-1 gap-6'>
            {sortedArticles.map((article: any) => {
                const { id, title, date, author, imageUrl, tags = [], slug } = article;

                return (
                    <div key={id} className='flex flex-col w-full h-full'>
                        <div className='flex flex-row items-center justify-between mb-[7vw]'>
                            <img src={imageUrl} className='border-2 border-black rounded-lg' />
                        </div>
                        <div className='flex flex-row items-center mb-[4.275vw] gap-x-[2.15vw]'>
                            {tags.map((el: any, idx: number) => (
                                <div key={idx} className='bg-orange rounded-md px-[3.2vw] py-[2.2vw]'>
                                    <p className='font-dharma-gothic-e font-bold text-[4.8vw] leading-[4.8vw] uppercase'>
                                        {el}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-row items-center justify-between mb-[4.275vw]'>
                            <p className='font-dharma-gothic-e text-left font-black text-[8.6vw] leading-[7vw] uppercase'>{title}</p>
                        </div>
                        <div className='flex flex-row font-normal text-[3.2vw] leading-[5.6vw] font-host-grotesk'>
                            {author} {id} | {date}
                        </div>
                        <div className='flex flex-row basis-[80%] justify-start mt-7 mb-9'>
                            <Button as={Link} href={`/blog/${slug}`} variant='secondary' content='Read more' />
                        </div>
                    </div>
                );
            })}
        </div>
        {hasMoreArticles && (
            <div className='flex flex-row basis-[80%] justify-start mt-2 pb-24'>
                <Button onClick={showMoreArticles} variant='secondary' content='Load more articles' />
            </div>
        )}
    </>
  );
};

export default InfiniteArticles;
