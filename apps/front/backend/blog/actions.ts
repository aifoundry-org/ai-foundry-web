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
            slug: 'https://aifoundryorg.substack.com/p/roman-shaposhnik-attention-transformers',
            title: 'llama.cpp is all you need?',
            coverImage: {url: "https://substackcdn.com/image/fetch/w_1100,h_618,c_fill,f_auto,q_auto:good,fl_progressive:steep/l_play_button_usfui2,w_144,e_colorize:0/https%3A%2F%2Fsubstack-video.s3.amazonaws.com%2Fvideo_upload%2Fpost%2F161295964%2Fb2c7213f-fb5b-4992-8846-de95e2dc7245%2Ftranscoded-1744972290.png"} as StrapiMedia,
            authors: [{name: "Roman Shaposhnik"}] as StrapiAuthor[],
            date: '2025-04-21',
            tags: [{id:"tag0.0.id", name:"AI Plumbers"}, {id:"tag0.1.id", name:"Community"}, {id:"tag0.2.id", name:"HW"}] as StrapiTag[],
        },
        {
            id: 1,
            slug: 'https://aifoundryorg.substack.com/p/felix-leclair-meeting-devs-where',
            title: 'Meeting devs where they are at: deep dive on Tenstorrent',
            coverImage: {url: "https://substackcdn.com/image/fetch/w_1100,h_618,c_fill,f_auto,q_auto:good,fl_progressive:steep/l_play_button_usfui2,w_144,e_colorize:0/https%3A%2F%2Fsubstack-video.s3.amazonaws.com%2Fvideo_upload%2Fpost%2F161297840%2Fdef4adda-4436-48d7-a2e7-ac95f03466ce%2Ftranscoded-1745232816.png"} as StrapiMedia,
            authors: [{name: "Felix LeClair"}] as StrapiAuthor[],
            date: '2025-04-21',
            tags: [{id:"tag0.0.id", name:"AI Plumbers"}, {id:"tag0.1.id", name:"HW"}] as StrapiTag[],
        },
        {
            id: 2,
            slug: 'https://aifoundryorg.substack.com/p/trevor-grant-with-presentation-chain',
            title: 'Chain of Thought Reasoning And Other LLM Tricks',
            coverImage: {url: "https://substackcdn.com/image/fetch/w_1100,h_618,c_fill,f_auto,q_auto:good,fl_progressive:steep/l_play_button_usfui2,w_144,e_colorize:0/https%3A%2F%2Fsubstack-video.s3.amazonaws.com%2Fvideo_upload%2Fpost%2F161304259%2F2d32b2f8-81e2-4a16-9ec0-73dbad828291%2Ftranscoded-1744972258.png"} as StrapiMedia,
            authors: [{name: "Trevor Grant"}] as StrapiAuthor[],
            date: '2025-04-21',
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
