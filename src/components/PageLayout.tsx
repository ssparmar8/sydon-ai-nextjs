import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import '@/styles/landing.css';
import '@/styles/pages.css';

export default function PageLayout(props: { children: React.ReactNode }) {
  return (
    <div className="landing">
      <SiteNav />
      <main className="page-main">{props.children}</main>
      <SiteFooter />
    </div>
  );
}
