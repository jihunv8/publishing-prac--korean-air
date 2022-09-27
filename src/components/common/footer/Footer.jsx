import styled from 'styled-components';
import { layoutCSS } from '../../../util/layoutCSS';
import FooterNav from './footer-nav/FooterNav';

function Footer({ layoutCSS }) {
  return (
    <FooterWrapper layoutCSS={layoutCSS}>
      <FooterNav />
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  ${layoutCSS}
`;
