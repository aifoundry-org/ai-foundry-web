import { useState, useEffect, useMemo } from 'react';
import { InfiniteArticlesContainerProps } from './InfiniteArticlesContainerType';
import Spinner from '@/components/common/universal/Spinner';

const InfiniteArticlesContainer = ({
  search,
  tags,
  initArticles,
  featuredArticleId,
  InfiniteArticleComponent
}: InfiniteArticlesContainerProps) => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState(initArticles.data);

    const sortedArticles = useMemo(() => {
        if(featuredArticleId){
            return articles.sort((a, b) => {
                if (a.id === featuredArticleId) return -1;
                if (b.id === featuredArticleId) return 1;
                return 0;
            });
        }
        return articles;
    }, [articles, featuredArticleId]);

    useEffect(() => {
        setLoading(true)
        setArticles(initArticles.data);
        setLoading(false)
    }, [search, tags, initArticles]);

    return (
        loading ? 
            <Spinner /> : 
            <InfiniteArticleComponent 
                sortedArticles={sortedArticles}
                featuredArticleId={featuredArticleId} 
            />
    );
};

export default InfiniteArticlesContainer;
