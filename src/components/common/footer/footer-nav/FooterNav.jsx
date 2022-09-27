import styled, { css } from 'styled-components';
import { maxContentsArea, maxWidthLarge } from '../../../../global-style/mediaSize';

import LinkNav from './link-nav/LinkNav';
import OhterLink from './OhterLink';

function FooterNav() {
  return (
    <FooterNavWrapper>
      <ContentsArea>
        <LinkNav />
        <OhterLink layoutCSS={OhterLinkLayoutCSS} />
      </ContentsArea>
    </FooterNavWrapper>
  );
}

export default FooterNav;

const FooterNavWrapper = styled.div`
  padding: 40px 20px 35px;
  background-color: #f3f4f8;
  border: solid 1px #d9dbe1;

  @media ${maxWidthLarge} {
    padding: 6px 20px 23px;
  }
`;

const ContentsArea = styled.nav`
  max-width: ${maxContentsArea};
  margin: 0 auto;
  position: relative;
`;

const OhterLinkLayoutCSS = css`
  position: absolute;
  top: 0;
  right: 0;

  @media ${maxWidthLarge} {
    position: static;
    margin: 25px auto 0;
  }
`;
