import { StrapiArticle, StrapiTag, StrapiBlogData, StrapiSeoComponent, StrapiParagraph, StrapiContentNavigation, StrapiAuthor } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import { fetchStrapi } from '@/libs/litebox-lib/utils/fetchStrapi';
import { getArticlesQueryParams, getArticleQueryParams, getBlogFeaturedArticleQueryParams, getArticlesExcludingSlugQueryParams } from './queries'
import { StrapiMedia } from '@/libs/litebox-lib/types/strapi/strapi';

export const getArticles = async (search?: string, tags?: string[], offset = 0) => {
    try{
        const articlesQueryParams = getArticlesQueryParams(search, tags, offset);
        const articles = await fetchStrapi<StrapiArticle[]>(`/articles?${articlesQueryParams}`);
        return articles;
    } catch(error){
        return {
            data: [] as StrapiArticle[],
            meta: {
                pagination: {
                    start: 0,
                    limit: 0,
                    total: 0
                }
            }
        };
    }
};

export const getLastArticles2 = async (limit = 3) => {
    try{
        const articlesQueryParams = getArticlesQueryParams(undefined, undefined, 0, limit);
        const articles = await fetchStrapi<StrapiArticle[]>(`/articles?${articlesQueryParams}`);
        return articles;
    } catch(error){
        return {
            data: [] as StrapiArticle[]
        };
    }
};

export const getLastArticles = async (limit = 3) => {
    return {
        data: [
        {
            id: 0,
            slug: 'https://aifoundryorg.substack.com/p/productionizing-ai-three-layers-of',
            title: 'Three Layers of Models Production Stack',
            coverImage: {url: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fafe6b616-21d2-42af-8b27-6853fdeee1bd_1260x900.heic"} as StrapiMedia,
            authors: [{name: "Avi Deitcher"}] as StrapiAuthor[],
            date: '2025-01-12',
            tags: [{id:"tag0.0.id", name:"AI Plumbers"}, {id:"tag0.1.id", name:"Open Source"}] as StrapiTag[],
        },
        {
            id: 1,
            slug: 'https://aifoundryorg.substack.com/p/productionizing-ai-three-layers-of',
            title: 'Three Layers of Models Production Stack',
            coverImage: {url: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fafe6b616-21d2-42af-8b27-6853fdeee1bd_1260x900.heic"} as StrapiMedia,
            authors: [{name: "Avi Deitcher"}] as StrapiAuthor[],
            date: '2025-01-12',
            tags: [{id:"tag0.0.id", name:"FOSDEM"}, {id:"tag0.1.id", name:"QUANTIZATION"}] as StrapiTag[],
        },
        {
            id: 2,
            slug: 'https://aifoundryorg.substack.com/p/productionizing-ai-three-layers-of',
            title: 'Three Layers of Models Production Stack',
            coverImage: {url: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fafe6b616-21d2-42af-8b27-6853fdeee1bd_1260x900.heic"} as StrapiMedia,
            authors: [{name: "Avi Deitcher"}] as StrapiAuthor[],
            date: '2025-01-12',
            tags: [{id:"tag0.0.id", name:"HEROES"}] as StrapiTag[],
        }
        ] as StrapiArticle[]
    };
};

export const getArticle = async (slug: string) => {
    try{
        const articleQueryParams = getArticleQueryParams(slug);
        const article = await fetchStrapi<StrapiArticle[]>(`/articles?${articleQueryParams}`);
        const relatedArticlesQueryParams = getArticlesExcludingSlugQueryParams(slug, 3);
        const relatedArticles = await fetchStrapi<StrapiArticle[]>(`/articles?${relatedArticlesQueryParams}`);
        const output = {
            ...article?.data?.[0], 
            relatedArticles: relatedArticles.data
        };
        return output
    } catch(error){
        return {
            id: 0,
            slug: '',
            title: '',
            coverImage: {} as StrapiMedia,
            seo: {} as StrapiSeoComponent,
            authors: [] as StrapiAuthor[],
            date: '',
            paragraphs: [] as StrapiParagraph[],
            contentNavigation: [] as StrapiContentNavigation[],
            tags: [] as StrapiTag[],
            relatedArticles: [] as StrapiArticle[],
            createdAt: '',
            publishedAt: '',
            updatedAt: ''
        }
    }
};

export const getTags = async () => {
    try{
        const strapiTags = await fetchStrapi<StrapiTag[]>(`/tags`);
        return strapiTags;
    } catch(error) {
        return {
            data: [] as StrapiTag[]
        };
    }
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
