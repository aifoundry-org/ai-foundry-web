import { useState, useEffect, useMemo } from 'react';
import Button from '@/libs/litebox-lib/ui/Button/Button';
import Link from 'next/link';
import { InfinitePostsProps, PAGINATION_LIMIT } from '../universal/InfinitePostsType';

const InfinitePosts = ({
  search,
  tags,
  initPosts,
  featuredPostId
}: InfinitePostsProps) => {
    const [posts, setPosts] = useState(initPosts.slice(0, PAGINATION_LIMIT));
    const [visibleCount, setVisibleCount] = useState(PAGINATION_LIMIT);
    const [hasMorePosts, setHasMorePosts] = useState(true);

    const sortedPosts = useMemo(() => {
        return posts.sort((a, b) => {
            if (a.id === featuredPostId) return -1;
            if (b.id === featuredPostId) return 1;
            return 0;
        });
    }, [posts, featuredPostId]);

    const showMoreArticles = async () => {
        const newVisibleCount = visibleCount + PAGINATION_LIMIT;
        setPosts(initPosts.slice(0, newVisibleCount));
        setVisibleCount(newVisibleCount);
        setHasMorePosts(newVisibleCount < initPosts.length);
    };

    useEffect(() => {
        setPosts(initPosts.slice(0, PAGINATION_LIMIT));
        setVisibleCount(PAGINATION_LIMIT);
        setHasMorePosts(initPosts.length > PAGINATION_LIMIT);
    }, [search, tags, initPosts]);

  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20'>
            {sortedPosts.map(post => {
                const isFeaturedPost = post.id === featuredPostId;
                const { title, date, author, imageUrl, tags = [] } = post;

                return (
                    <div key={post.id} className={`flex flex-col w-full h-full ${isFeaturedPost ? 'sm:col-start-1 sm:col-end-3' : ''}`}>
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
                            <Button as={Link} href={post.link} target="_blank" variant='secondary' content='Read more' />
                        </div>
                    </div>
                );
            })}
        </div>
        {hasMorePosts && (
            <div className='flex flex-row justify-start mt-20'>
                <Button onClick={showMoreArticles} variant='secondary' content='Load more articles' />
            </div>
        )}
    </>
  );
};

export default InfinitePosts;
