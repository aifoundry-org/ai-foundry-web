import { useState, useEffect, useMemo } from 'react';
import { getArticles } from '@/backend/blog/actions';
import { PAGINATION_LIMIT, InfiniteArticlesProps } from './InfiniteArticlesType';
import Spinner from '@/components/common/universal/Spinner';

const InfiniteArticles = ({
  search,
  tags,
  initArticles,
  featuredArticleId,
  InfiniteArticleComponent
}: InfiniteArticlesProps) => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState(initArticles);
    const [hasMoreArticles, setHasMoreArticles] = useState(false);

    const showMoreArticles = async () => {
        const offset = articles.length;
        const newArticles = await getArticles(search, tags, offset);

        setHasMoreArticles(newArticles.data.length === PAGINATION_LIMIT);

        setArticles(prevArticles => {
            const uniqueArticles = newArticles.data.filter(newArticle => !prevArticles.some(prevArticle => prevArticle.id === newArticle.id));

            return [...prevArticles, ...uniqueArticles];
        });
    };

    useEffect(() => {
        setLoading(true)
        setArticles(initArticles);

        // TODO: add logic to show the "load more articles" button
        // setHasMoreArticles(true);
        // END TODO

        setLoading(false)
    }, [search, tags, initArticles]);

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

    return (
        loading ? <Spinner /> : <InfiniteArticleComponent sortedArticles={sortedArticles} hasMoreArticle={hasMoreArticles} showMoreArticles={showMoreArticles} featuredArticleId={featuredArticleId} />
    );
};

export default InfiniteArticles;
