import styled, { css } from 'styled-components';

import Header from '../components/common/Header';
import Footer from '../components/common/footer/Footer';
import NoticeBanner from '../components/home/NoticeBanner';
import Section1 from '../components/home/section1/Section1';
import Section2 from '../components/home/section2/Section2';
import Section3 from '../components/home/section3/Section3';
import Section4 from '../components/home/section4/Section4';

import noticeBannerMockData from './noticeBannerMockData';
import { maxWidthLarge, maxWidthXLarge } from '../global-style/mediaSize';

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
      <Section3 layoutCSS={basicMargin} />
      <NoticeBanner
        title={notice2Data.title}
        subhead={notice2Data.subhead}
        href={notice2Data.subhead}
        bgImage={notice2Data.bgImage}
        layoutCSS={NoticeBannerLayoutCSS}
      />
      <Section4 layoutCSS={basicMargin} />
      <Footer layoutCSS={FooterLayoutCSS} />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div``;

const basicMargin = css`
  margin-top: 60px;

  @media ${maxWidthLarge} {
    margin-top: 40px;
  }
`;

const marginTop60px = css`
  margin-top: 60px;
`;

const FooterLayoutCSS = css`
  margin-top: 100px;

  @media ${maxWidthXLarge} {
    margin-top: 60px;
  }
`;

const NoticeBannerLayoutCSS = css`
  margin: 60px auto 0;
`;
