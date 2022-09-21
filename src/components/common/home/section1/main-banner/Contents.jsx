import styled from 'styled-components';
import * as media from '../../../../../global-style/mediaSize';

import rightArrowIcon from '../../../../../images/icons/right.svg';
import { layoutCSS } from '../../../../../util/layoutCSS';

function Contents({ title = '제목 없음', url = '', bgImage = {}, layoutCSS }) {
  return (
    <ContentsBackground bgImage={bgImage} layoutCSS={layoutCSS}>
      <ContentsContainer>
        <Title>{title}</Title>
        <MoreLink href={url}>자세히 보기</MoreLink>
      </ContentsContainer>
    </ContentsBackground>
  );
}

export default Contents;

const ContentsBackground = styled.div`
  background: url(${({ bgImage }) => bgImage.pc}) no-repeat center 0 / cover;
  max-width: 1840px;

  @media ${media.maxWidthLarge} {
    background-image: url(${({ bgImage }) => bgImage.tablet});
  }

  @media ${media.maxWidthSmall} {
    background-image: url(${({ bgImage }) => bgImage.mobile});
  }

  ${layoutCSS}
`;

const ContentsContainer = styled.div`
  max-width: ${media.maxContentsArea};
  height: 480px;
  padding-top: 124px;
  margin: 0 auto;

  @media ${media.maxWidthXLarge} {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media ${media.maxWidthLarge} {
    height: 420px;
    padding: 60px 20px 0 24px;
  }
`;

const Title = styled.h2`
  color: #222;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: -0.05rem;
  line-height: 4.5rem;
  white-space: pre-wrap;

  @media ${media.maxWidthLarge} {
    font-size: 2.4rem;
    line-height: 3.6rem;
  }
`;

const MoreLink = styled.a`
  display: flex;
  margin-top: 40px;
  color: #222;
  font-size: 2rem;
  font-weight: bold;
  line-height: 3rem;

  &::after {
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    margin-left: 8px;
    background: url(${rightArrowIcon}) center;
  }

  @media ${media.maxWidthLarge} {
    margin-top: 20px;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;
