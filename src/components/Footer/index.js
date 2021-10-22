import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">
      {`© ${new Date().getFullYear()} Zach Cargill.`}
    </span>
    <Link secondary className="footer__link" href="https://github.com/HamishMW/portfolio" target="_self">
      Site made by Hamish Williams
    </Link>
  </footer>
);

export default Footer;
