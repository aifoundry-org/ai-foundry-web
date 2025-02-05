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
        <div className='grid grid-cols-1 gap-6'>
            {sortedPosts.map(post => {
                const { title, date, author, imageUrl, tags = [] } = post;

                return (
                    <div key={post.id} className='flex flex-col w-full h-full'>
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
                            {author} {post.id} | {date}
                        </div>
                        <div className='flex flex-row basis-[80%] justify-start mt-7 mb-9'>
                            <Button as={Link} href={post.link} target="_blank" variant='secondary' content='Read more' />
                        </div>
                    </div>
                );
            })}
        </div>
        {hasMorePosts && (
            <div className='flex flex-row basis-[80%] justify-start mt-2'>
                <Button onClick={showMoreArticles} variant='secondary' content='Load more articles' />
            </div>
        )}
    </>
  );
};

export default InfinitePosts;
