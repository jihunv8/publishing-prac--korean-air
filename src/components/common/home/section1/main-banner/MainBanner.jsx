import styled, { css } from 'styled-components';
import { useState } from 'react';
import * as media from '../../../../../global-style/mediaSize';

import Contents from './Contents';
import SwipeButton from './SwipeButton';

import dummyData from './pagesDummyData';

function MainBanner() {
  const [currentPage, setCurrentPage] = useState(2);
  const [pages, setPages] = useState(dummyData);
  return (
    <MainBannerWrapper>
      {pages.map((page, i) => (
        <Contents
          key={i}
          title={page.title}
          moreHref={page.url}
          bgImage={page.bgImage}
          layoutCSS={i === currentPage ? ContentsLayoutCSS : ContentsDisplayNone}
        />
      ))}

      <SwipeButtonContainer>
        <SwipeButton currentPage={currentPage} maxPage={pages.length} setCurrentPage={setCurrentPage} />
      </SwipeButtonContainer>
    </MainBannerWrapper>
  );
}

export default MainBanner;

const MainBannerWrapper = styled.div`
  padding: 0 20px;
  position: relative;

  @media ${media.maxWidthLarge} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const ContentsLayoutCSS = css`
  margin: 0 auto;
  animation: fade-in 1s;

  @keyframes fade-in {
    from {
      opacity: 0.5;
    }

    to {
      opacity: 1;
    }
  }
`;

const ContentsDisplayNone = css`
  display: none;
`;

const SwipeButtonContainer = styled.div`
  max-width: ${media.maxContentsArea};
  margin: 0 auto;
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 40px;

  display: flex;

  @media ${media.maxWidthXLarge} {
    padding-left: 40px;
    padding-right: 40px;
    left: 0;
    right: 0;
  }

  @media ${media.maxWidthLarge} {
    padding-right: 20px;
    justify-content: flex-end;
    bottom: 150px;
  }
`;
