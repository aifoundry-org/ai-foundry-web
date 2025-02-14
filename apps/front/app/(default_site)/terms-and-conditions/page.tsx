import TermsMobile from '@/components/termsAndConditions/mobile/Main';
import TermsDesktop from '@/components/termsAndConditions/desktop/Main';

export default function Home() {
  return (
    <main>
      <TermsDesktop />
      <TermsMobile />
    </main>
  );
}
