import { Suspense } from 'react';

import MainDesktop from '@/components/blog/desktop/Main';
import MainMobile from '@/components/blog/mobile/Main';
import ArticlesGridDesktop from '@/components/blog/desktop/ArticlesGrid'
import ArticlesGridMobile from '@/components/blog/mobile/ArticlesGrid'

export default function Page() {
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
