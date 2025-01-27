import TermsMobile from '@/components/termsAndConditions/mobile/main';
import TermsDesktop from '@/components/termsAndConditions/desktop/main';

export default function Home() {
  return (
    <main>
      <TermsDesktop />
      <TermsMobile />
    </main>
  );
}
