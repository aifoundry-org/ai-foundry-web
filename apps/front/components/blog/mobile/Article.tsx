import { MouseEventHandler } from 'react';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import { StrapiData } from '@/libs/litebox-lib/types/strapi/strapi';
import Button from '@/libs/litebox-lib/ui/Button/Button';
import ArticleThumbnail from './ArticleThumbnail';

interface ArticleProp {
    sortedArticles: StrapiData<StrapiArticle[]>,
    hasMoreArticles: boolean,
    showMoreArticles: MouseEventHandler<HTMLButtonElement>,
}

const Article = ({ 
    sortedArticles, 
    hasMoreArticles, 
    showMoreArticles
}: ArticleProp) => {
    return (
        <>
            <div className='grid grid-cols-1 gap-6'>
                {sortedArticles.data.map(article => {
                    return ArticleThumbnail({article})
                })}
            </div>
            {hasMoreArticles && (
                <div className='flex flex-row basis-[80%] justify-start mt-2 pb-24'>
                    <Button onClick={showMoreArticles} variant='secondary' content='Load more articles' />
                </div>
            )}
        </>
    )
}

export default Article;