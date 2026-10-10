import { site } from '../content/site';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p>{site.location} // Built with AI-assisted development</p>
      </div>
    </footer>
  );
}
