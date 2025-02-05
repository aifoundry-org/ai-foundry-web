export interface InfinitePostsProps {
    search: string;
    tags: string[];
    initPosts: any[];
    featuredPostId: number;
}
  
export const PAGINATION_LIMIT = 10;