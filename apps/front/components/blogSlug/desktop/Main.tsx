/* eslint-disable */
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import Headline from './Headline';
import Content from './Content';
import Author from './Author';
import RelatedArticles from './RelatedArticles'

interface BlogArticleProps {
    article: StrapiArticle;
    className?: string;
}

export default function BlogArticle({ article, className }: BlogArticleProps) {
  return (
    <div className='hidden xs:block'>
      <div className={`max-w-[144rem] lg:max-w-[144rem] xl:max-w-[144rem] 2xl:max-w-[200rem] h-full mx-auto pt-[5.5rem] px-[8.5vw] ${className}`}>
        <Headline article={article} />
        <div className='flex flex-row flex-wrap lg:flex-nowrap gap-x-[8.82vw] mt-[7.2rem]'>
            <Content paragraphs={article.paragraphs} />
            <Author author={article.authors[0]} contentNavigation={article.contentNavigation} />
        </div>
      </div>
      <div className={`w-full h-full mx-auto bg-peach ${className}`}>
        <RelatedArticles articles={article.relatedArticles} />
      </div>
    </div>
  );
};
