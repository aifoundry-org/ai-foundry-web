'use client'

import { useParams } from 'next/navigation'
import MainMobile from '@/components/blogSlug/mobile/Main';
import MainDesktop from '@/components/blogSlug/desktop/Main';

// TODO: Remove mock articles after implementing strapi
import articles from '@/mock/home/latestInsights/data'
// END TODO

export default function Page() {
    const params = useParams<{ slug: string }>()

    // TODO: Replace with strapi implementation
    const article = articles.find(article => article.slug == params.slug);
    const relatedArticles = [{...articles[0]},{...articles[1]},{...articles[2]}]
    // END TODO

    return (
        <main>
            <MainDesktop article={article} relatedArticles={relatedArticles} />
            <MainMobile article={article} relatedArticles={relatedArticles} />
        </main>
    );
}