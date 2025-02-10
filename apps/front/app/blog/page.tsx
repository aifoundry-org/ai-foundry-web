import { Suspense } from 'react';

import MainDesktop from '@/components/blog/desktop/Main';
import MainMobile from '@/components/blog/mobile/Main';
import ArticlesGridDesktop from '@/components/blog/desktop/ArticlesGrid'
import ArticlesGridMobile from '@/components/blog/mobile/ArticlesGrid'
import { getArticles } from '@/backend/blog/actions';

const Page = async () => {
  const allArticles = await getArticles();
  console.log(allArticles)

  return (
    <main>
      <MainDesktop />
      <MainMobile />

      <Suspense>
        <ArticlesGridDesktop />
        <ArticlesGridMobile />
      </Suspense>
    </main>
  );
}

export default Page;
