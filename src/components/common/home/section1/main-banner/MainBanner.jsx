import styled, { css } from 'styled-components';
import { useState } from 'react';
import * as media from '../../../../../global-style/mediaSize';

import Contents from './Contents';
import SwipeButton from './SwipeButton';

import bannerImage1 from '../../../../../images/bg/map_pc.jpg';
import bannerImage2 from '../../../../../images/bg/keyvisual_pc_sherpa.jpg';
import bannerImage3 from '../../../../../images/bg/H_PLCC_pc.jpg';

const dummyData = [
  {
    title: '지금 갈 수 있는 여행지는 어디? 얼마?',
    url: '',
    image: bannerImage1,
  },
  {
    title: '여행지별 입국 요건, \n이제 지도에서도 확인하실 수 있습니다.',
    url: '',
    image: bannerImage2,
  },
  {
    title: '알고보면 더 매력적인, 대한항공카드 가이드!',
    url: '',
    image: bannerImage3,
  },
];

function MainBanner() {
  const [currentPage, setCurrentPage] = useState(2);
  const [pages, setPages] = useState(dummyData);

  return (
    <MainBannerWrapper>
      <BackgroundArea image={pages[currentPage].image}>
        <ContentsArea>
          <Contents layoutCSS={ContentsLayoutCSS} title={pages[currentPage].title} moreHref={pages[currentPage].url} />
          <SwipeButton currentPage={currentPage} maxPage={pages.length} setCurrentPage={setCurrentPage} />
        </ContentsArea>
      </BackgroundArea>
    </MainBannerWrapper>
  );
}

export default MainBanner;

const MainBannerWrapper = styled.div`
  padding: 0 20px;
`;

const BackgroundArea = styled.div`
  background: url(${({ image }) => image}) no-repeat center / cover;
  max-width: 1840px;
  margin: 0 auto;
`;

const ContentsArea = styled.div`
  width: ${media.maxContentsArea};
  height: 480px;
  padding: 124px 0 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${media.maxWidthXLarge} {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const ContentsLayoutCSS = css`
  margin: 0 auto;
`;
