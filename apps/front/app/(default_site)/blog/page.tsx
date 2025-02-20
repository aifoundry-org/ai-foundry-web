import { Suspense } from 'react';

import MainDesktop from '@/components/blog/desktop/Main';
import MainMobile from '@/components/blog/mobile/Main';
import { getArticles, getTags, getBlogFeaturedArticle } from '@/backend/blog/actions';
import ArticlesMainContainer from '@/components/blog/universal/ArticlesMainContainer';

export default async function Page({ searchParams }: { 
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const { search = '', tags = '' } = await searchParams;
  const selectedTags = tags === '' ? [] : tags.split(',');
  const articles = await getArticles(search, selectedTags);
  const allTags = await getTags();
  const featuredArticleId = await getBlogFeaturedArticle();

  return (
    <main>
      <MainDesktop />
      <MainMobile />

      <Suspense>
        <ArticlesMainContainer articles={articles} featuredArticleId={featuredArticleId} search={search} tags={allTags.data} selectedTags={selectedTags} />
      </Suspense>
    </main>
  );
}
