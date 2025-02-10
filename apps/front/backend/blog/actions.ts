import { StrapiAttributes } from '@/libs/litebox-lib/types/strapi/strapi';
import { StrapiArticle } from '@/libs/litebox-lib/types/strapi/strapiBlog';
import { fetchStrapi } from '@/libs/litebox-lib/utils/fetchStrapi';
import { getArticlesQueryParams } from './queries'

export const getArticles = async (search?: string, tags?: string[], offset = 0) => {
    const articlessQueryParams = getArticlesQueryParams(search, tags, offset);
    const articles = await fetchStrapi<StrapiAttributes<StrapiArticle>[]>(`/articles?${articlessQueryParams}`, {
        method: 'GET'
    });
    return articles;
};