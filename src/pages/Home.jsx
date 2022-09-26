import styled, { css } from 'styled-components';
import Header from '../components/common/Header';
import NoticeBanner from '../components/home/NoticeBanner';
import Section1 from '../components/home/section1/Section1';
import Section2 from '../components/home/section2/Section2';
import Section3 from '../components/home/section3/Section3';

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
      <Section2 layoutCSS={marginTop60px} />
      <Section3 layoutCSS={marginTop60px} />
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

const marginTop60px = css`
  margin-top: 60px;
`;

const NoticeBannerLayoutCSS = css`
  margin: 60px auto 0;
`;
