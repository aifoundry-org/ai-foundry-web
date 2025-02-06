import Headline from './Headline';
import Content from './Content';
import Author from './Author';
import RelatedPosts from './RelatedArticles'

interface BlogArticleProps {
    article: any;
    relatedArticles?: any[];
    className?: string;
}

export default function BlogArticle({ article, relatedArticles, className }: BlogArticleProps) {
  return (
    <div className='xs:hidden'>
      <div className={`w-full h-full mx-auto py-[5.5rem] px-[2.4rem] ${className}`}>
        <Headline article={article} />
        <Content />
        <Author />
      </div>
      <div className={`w-full h-full mx-auto bg-peach ${className}`}>
        <RelatedPosts articles={relatedArticles} />
      </div>
    </div>
  );
};
