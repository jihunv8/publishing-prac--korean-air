import styled, { css } from 'styled-components';
import Header from '../components/common/Header';
import NoticeBanner from '../components/home/NoticeBanner';
import Section1 from '../components/home/section1/Section1';

import noticeBannerMockData from './noticeBannerMockData';

const [notice1Data, notice2Data] = noticeBannerMockData;

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Section1 />
      <NoticeBanner
        title={notice1Data.title}
        subhead={notice1Data.subhead}
        href={notice1Data.subhead}
        bgImage={notice1Data.bgImage}
        layoutCSS={NoticeBannerLayoutCSS}
      />
      <NoticeBanner
        title={notice2Data.title}
        subhead={notice2Data.subhead}
        href={notice2Data.subhead}
        bgImage={notice2Data.bgImage}
        layoutCSS={NoticeBannerLayoutCSS}
      />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div``;

const NoticeBannerLayoutCSS = css`
  margin: 60px auto 0;
`;
