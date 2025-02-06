export interface InfiniteArticlesProps {
    search: string;
    tags: string[];
    initArticles: any[];
    featuredArticleId: number;
}
  
export const PAGINATION_LIMIT = 10;