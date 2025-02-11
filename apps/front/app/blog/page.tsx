import { Suspense } from 'react';

import MainDesktop from '@/components/blog/desktop/Main';
import MainMobile from '@/components/blog/mobile/Main';
import ArticlesGridDesktop from '@/components/blog/desktop/ArticlesGrid'
import ArticlesGridMobile from '@/components/blog/mobile/ArticlesGrid'
import { getArticles, getTags } from '@/backend/blog/actions';

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
        <ArticlesGridDesktop articles={articles} search={search} tags={allTags.data} selectedTags={selectedTags} />
        <ArticlesGridMobile articles={articles} search={search} tags={allTags.data} selectedTags={selectedTags}/>
      </Suspense>
    </main>
  );
}
