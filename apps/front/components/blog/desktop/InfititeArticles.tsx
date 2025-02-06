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
        return articles.sort((a, b) => {
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
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20'>
            {sortedArticles.map(article => {
                const isFeaturedArticle = article.id === featuredArticleId;
                const { title, date, author, imageUrl, tags = [] } = article;

                return (
                    <div key={article.id} className={`flex flex-col w-full h-full ${isFeaturedArticle ? 'sm:col-start-1 sm:col-end-3' : ''}`}>
                        <div className={`flex flex-row items-center justify-between mb-[1.675vw] h-[21.4rem] overflow-hidden`}>
                            <img src={imageUrl} className='w-full h-full border-2 border-black rounded-lg object-cover object-top' />
                        </div>
                        <div className='flex flex-row items-center mb-[2vw] md:mb-[1.125vw] xl:mb-[1.125vw] 2xl:mb-[1.125vw] gap-x-[0.575vw]'>
                            {tags.map((el: any, idx: number) => (
                                <div key={idx} className='bg-orange rounded-md md:px-[1.2vw] md:py-[1.2vw] lg:px-[1vw] lg:py-[0.7vw] xl:px-[1vw] xl:py-[0.7vw] 2xl:px-[1vw] 2xl:py-[0.7vw]'>
                                    <p className='font-dharma-gothic-e font-bold md:text-[2.8vw] lg:text-[1.4vw] xl:text-[1.4vw] 2xl:text-[1.4vw] leading-[1.4vw] uppercase'>
                                        {el}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-row text-start mb-[2vw] md:mb-[1.25vw] lg:mb-[1.25vw] xl:mb-[1.25vw] 2xl:mb-[1.25vw]'>
                            <p className='font-dharma-gothic-e font-black text-[5vw] md:text-[4vw] lg:text-[2.778vw] xl:text-[2.778vw] 2xl:text-[2.778vw] leading-[4vw] md:leading-[4vw] lg:leading-[2.3vw] xl:leading-[2.3vw] 2xl:leading-[2.3vw] uppercase'>{title}</p>
                        </div>
                        <div className='flex flex-row font-normal text-[3vw] md:text-[2vw] lg:text-[1vw] xl:text-[1vw] 2xl:text-[1vw] leading-[1.5vw] font-host-grotesk'>
                            {author} | {date}
                        </div>
                        <div className='flex flex-row justify-start mt-8'>
                            <Button as={Link} href={`/blog/${article.slug}`} variant='secondary' content='Read more' />
                        </div>
                    </div>
                );
            })}
        </div>
        {hasMoreArticles && (
            <div className='flex flex-row justify-center my-32'>
                <Button onClick={showMoreArticles} variant='secondary' content='Load more articles' />
            </div>
        )}
    </>
  );
};

export default InfiniteArticles;
