import { Suspense } from 'react';

import MainDesktop from '@/components/blog/desktop/Main';
import MainMobile from '@/components/blog/mobile/Main';
import ArticlesGrid from '@/components/blog/desktop/ArticlesGrid'
import ArticlesGridMobile from '@/components/blog/mobile/ArticlesGrid'

export default function Home() {
  return (
    <main>
      <MainDesktop />
      <MainMobile />

      <Suspense>
        <ArticlesGrid />
        <ArticlesGridMobile />
      </Suspense>
    </main>
  );
}
