import { Suspense } from 'react';
import MainMobile from '@/components/blogSlug/mobile/Main';
import MainDesktop from '@/components/blogSlug/desktop/Main';
import { getArticle } from '@/backend/blog/actions';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const article = await getArticle(slug);

    return (
        <main>
            <Suspense>
                <MainDesktop article={article} relatedArticles={[]} />
                <MainMobile article={article} relatedArticles={[]} />
            </Suspense>
        </main>
    );
}