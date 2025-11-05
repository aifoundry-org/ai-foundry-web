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
            slug: 'https://blog.aifoundry.org/p/shaping-the-ai-landscape-hugging',
            title: 'Shaping the AI Landscape: Hugging Face on Community and Innovation',
            coverImage: {url: "https://blog.aifoundry.org/api/v1/video/upload/7521580c-34d9-456d-9d17-215c7045e689/preview.gif?height=320"} as StrapiMedia,
            authors: [{name: "VB"}] as StrapiAuthor[],
            date: '2025-06-15',
            tags: [{id:"tag0.0.id", name:"AI Plumbers"}, {id:"tag0.1.id", name:"Community"}, {id:"tag0.2.id", name:"HF"}] as StrapiTag[],
        },
        {
            id: 1,
            slug: 'https://blog.aifoundry.org/p/trends-with-physical-ai',
            title: 'Trends with Physical AI',
            coverImage: {url: "https://blog.aifoundry.org/api/v1/video/upload/7108ef43-5745-402e-925a-c87dd0707352/preview.gif?height=320"} as StrapiMedia,
            authors: [{name: "Dhruv Diddi"}] as StrapiAuthor[],
            date: '2025-10-25',
            tags: [{id:"tag0.0.id", name:"AI Plumbers"}, {id:"tag0.1.id", name:"ROBOTICS"}] as StrapiTag[],
        },
        {
            id: 2,
            slug: 'https://blog.aifoundry.org/p/overhauling-vision-support-in-llamacpp',
            title: 'Overhauling vision support in llama.cpp and llama-server',
            coverImage: {url: "https://blog.aifoundry.org/api/v1/video/upload/546fffec-0090-4cec-b4fa-8db3f57db273/preview.gif?height=320"} as StrapiMedia,
            authors: [{name: "Xuan-Song Nguyen"}] as StrapiAuthor[],
            date: '2025-06-15',
            tags: [{id:"tag0.0.id", name:"AI Plumbers"}, {id:"tag0.1.id", name:"LLM"}] as StrapiTag[],
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
