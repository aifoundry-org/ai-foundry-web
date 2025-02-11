import qs from 'qs';
import { PAGINATION_LIMIT } from '@/components/blog/universal/InfiniteArticlesType';

export const getArticlesQueryParams = (search?: string, tags?: string[], offset?: number) => {
    const config = {
        fields: ['slug', 'title', 'createdAt', 'updatedAt'],
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