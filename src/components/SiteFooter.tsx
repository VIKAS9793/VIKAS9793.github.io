import { site } from '../content/site';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          &copy; {site.year} {site.name}
        </p>
        <p>
          {site.location} // Built with AI-assisted development //{' '}
          <a className="footer-link" href="#top">
            Back to top
          </a>
        </p>
      </div>
    </footer>
  );
}
