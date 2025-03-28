import { MouseEventHandler } from 'react';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import { StrapiData } from '@/libs/litebox-lib/types/strapi/strapi';
import Button from '@/libs/litebox-lib/ui/Button/Button';
import ArticleThumbnail from './ArticleThumbnail';
import FadeIn from '@/components/common/universal/FadeIn';
export interface ArticleProp {
    sortedArticles: StrapiData<StrapiArticle[]>,
    hasMoreArticles: boolean,
    showMoreArticles: MouseEventHandler<HTMLButtonElement>,
    featuredArticleId?: number
}

const Article = ({ 
    sortedArticles, 
    hasMoreArticles, 
    showMoreArticles, 
    featuredArticleId
}: ArticleProp) => {   
    return (
        <FadeIn duration={0.5} viewport={{once: true, amount: 0}}>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[2.4rem] gap-y-20 ${!hasMoreArticles && 'mb-[12rem]'}`}>
                {sortedArticles.data.map(article => {
                    const isFeaturedArticle = article.id === featuredArticleId;

                    return ArticleThumbnail({article, isFeaturedArticle})
                })}
            </div>
            {hasMoreArticles && (
                <div className='flex flex-row justify-center my-32'>
                    <Button onClick={showMoreArticles} variant='secondary' content='Load more articles' />
                </div>
            )}
        </FadeIn>
    )
}

export default Article;