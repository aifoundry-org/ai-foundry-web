import { useState, useEffect, useMemo } from 'react';
import { getArticles } from '@/backend/blog/actions';
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
    const hasMoreArticles = useMemo(() => {
        const { start, limit, total } = initArticles.meta.pagination;
        return (start+limit) < total
    }, [articles]);

    const showMoreArticles = async () => {
        const offset = articles.length;
        const newArticles = await getArticles(search, tags, offset);

        setArticles(prevArticles => {
            const uniqueArticles = newArticles.data.filter(newArticle => !prevArticles.some(prevArticle => prevArticle.id === newArticle.id));
            return [...prevArticles, ...uniqueArticles];
        });
    };

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
                hasMoreArticle={hasMoreArticles}
                showMoreArticles={showMoreArticles}
                featuredArticleId={featuredArticleId} 
            />
    );
};

export default InfiniteArticlesContainer;
