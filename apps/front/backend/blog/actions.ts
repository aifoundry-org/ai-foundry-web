import { StrapiArticle, StrapiTag, StrapiBlogData } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import { fetchStrapi } from '@/libs/litebox-lib/utils/fetchStrapi';
import { getArticlesQueryParams, getBlogFeaturedArticleQueryParams } from './queries'

export const getArticles = async (search?: string, tags?: string[], offset = 0) => {
    const articlesQueryParams = getArticlesQueryParams(search, tags, offset);
    const articles = await fetchStrapi<StrapiArticle[]>(`/articles?${articlesQueryParams}`);
    return articles;
};

export const getTags = async () => {
    const strapiTags = await fetchStrapi<StrapiTag[]>(`/tags`);
    return strapiTags;
};

export const getBlogFeaturedArticle = async () => {
    try{
        const blogFeaturedArticleQueryParams = getBlogFeaturedArticleQueryParams();
        const blogFeaturedArticle = await fetchStrapi<StrapiBlogData>(`/blog?${blogFeaturedArticleQueryParams}`);
        return blogFeaturedArticle.data.featuredArticle.id
    } catch(error){
        // No featured article found
        return 0;
    }
}