import qs from 'qs';
import { PAGINATION_LIMIT } from '@/components/blog/universal/InfiniteArticlesContainerType';

export const getArticlesQueryParams = (search?: string, tags?: string[], offset?: number) => {
    const config = {
        fields: ['slug', 'title', 'date', 'createdAt', 'updatedAt'],
        filters: {
            ...(search && {
                title: {
                    $containsi: search,
                }
            }),
            ...(tags && tags.length && {
                tags: {
                $in: tags,
                },
            }),
        },
        populate: {
            coverImage: true,
            seo: true,
            tags: true,
            authors: {
                fields: ['name'],
            },
        },
        sort: ['updatedAt:desc'],
        pagination: {
            start: offset,
            limit: PAGINATION_LIMIT,
        },
    }

    return qs.stringify(config);
};

export const getArticleQueryParams = (slug: string) => {
    const config = {
        filters: {
            ...(slug && {
                slug: {
                    $containsi: slug,
                }
            })
        },
        populate: {
            coverImage: true,
            seo: true,
            tags: true,
            authors: true,
            paragraphs: true,
            contentNavigation: true
        }
    }

    return qs.stringify(config);
}

export const getBlogFeaturedArticleQueryParams = () => {
    const config = {
        populate: {
            featuredArticle: true,
        }
    }

    return qs.stringify(config);
};