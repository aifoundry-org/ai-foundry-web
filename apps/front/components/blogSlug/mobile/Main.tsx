import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import Headline from './Headline';
import Content from './Content';
import Author from './Author';
import RelatedArticles from './RelatedArticles'

export default function BlogArticle({ article, className }: {
  article: StrapiArticle;
  className?: string;
}) {
  return (
    <div className='xs:hidden'>
      <div className={`w-full h-full mx-auto py-[5.5rem] px-[2.4rem] ${className}`}>
        <Headline article={article} />
        <Content paragraphs={article.paragraphs} contentNavigation={article.contentNavigation} />
        <Author author={article.authors[0]} />
      </div>
      <div className={`w-full h-full mx-auto bg-peach ${className}`}>
        <RelatedArticles articles={article.relatedArticles} />
      </div>
    </div>
  );
};
