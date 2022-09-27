import styled from 'styled-components';
import { layoutCSS } from '../../../../util/layoutCSS';

import youtubeIcon from '../../../../images/icons/sns__link--youtube.svg';
import instagramIcon from '../../../../images/icons/sns__link--instagram.svg';
import facebookIcon from '../../../../images/icons/sns__link--facebook.svg';
import twitterIcon from '../../../../images/icons/sns__link--twitter.svg';

import googleplayIcon from '../../../../images/icons/banner-googleplay.svg';
import appstore from '../../../../images/icons/banner-appstore.svg';
import { maxWidthLarge } from '../../../../global-style/mediaSize';

function OhterLink({ layoutCSS }) {
  return (
    <OhterLinkWrapper layoutCSS={layoutCSS}>
      <SNSLinkContainer>
        <SNSLink iconUrl={youtubeIcon} href="" />
        <SNSLink iconUrl={instagramIcon} href="" />
        <SNSLink iconUrl={facebookIcon} href="" />
        <SNSLink iconUrl={twitterIcon} href="" />
      </SNSLinkContainer>
      <AppLinkContainer>
        <AppLink iconUrl={googleplayIcon} href="" />
        <AppLink iconUrl={appstore} href="" />
      </AppLinkContainer>
    </OhterLinkWrapper>
  );
}

export default OhterLink;

const OhterLinkWrapper = styled.div`
  width: fit-content;
  ${layoutCSS}
`;

const SNSLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${maxWidthLarge} {
    justify-content: center;
  }
`;

const SNSLink = styled.a`
  background: url(${({ iconUrl }) => iconUrl}) no-repeat center / 44px;
  width: 44px;
  height: 44px;
  display: block;

  &:not(:first-child) {
    margin-left: 8px;
  }
`;

const AppLinkContainer = styled.div`
  margin-top: 12px;
  display: flex;
`;

const AppLink = styled.a`
  background: url(${({ iconUrl }) => iconUrl}) no-repeat center / 118px auto;
  width: 118px;
  height: 34px;
  display: block;

  &:last-child {
    margin-left: 16px;
  }
`;
