import styled from 'styled-components';
import { layoutCSS } from '../../../util/layoutCSS';
import About from './About';
import FooterNav from './footer-nav/FooterNav';
import LanguageSelector from './LanguageSelector';

function Footer({ layoutCSS }) {
  return (
    <FooterWrapper layoutCSS={layoutCSS}>
      <FooterNav />
      <LanguageSelector />
      <About />
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  ${layoutCSS}
`;
