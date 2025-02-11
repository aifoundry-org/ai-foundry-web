import { Suspense } from 'react';

import MainDesktop from '@/components/blog/desktop/Main';
import MainMobile from '@/components/blog/mobile/Main';
import { getArticles, getTags } from '@/backend/blog/actions';
import ArticlesGridContainer from '@/components/blog/universal/ArticlesGridContainer';

export default async function Page({ searchParams }: { 
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const { search = '', tags = '' } = await searchParams;
  const selectedTags = tags === '' ? [] : tags.split(',');
  const articles = await getArticles(search, selectedTags);
  const allTags = await getTags();
  
  return (
    <main>
      <MainDesktop />
      <MainMobile />

      <Suspense>
        <ArticlesGridContainer articles={articles} search={search} tags={allTags.data} selectedTags={selectedTags} />
      </Suspense>
    </main>
  );
}
