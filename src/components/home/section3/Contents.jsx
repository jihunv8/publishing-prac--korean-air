import styled from 'styled-components';
import { maxWidthLarge } from '../../../global-style/mediaSize';

import arrowIcon from '../../../images/icons/msgi__link.svg';
import { layoutCSS } from '../../../util/layoutCSS';

function Contents({ layoutCSS }) {
  return (
    <ContentsWrapper layoutCSS={layoutCSS}>
      <Title>복잡한 여행을 Easy하게!</Title>
      <Subhead>전자서식을 작성하시면 여행이 한결 여유로워집니다.</Subhead>
      <MoreAnchor href="">자세히 보기</MoreAnchor>
    </ContentsWrapper>
  );
}

export default Contents;

const ContentsWrapper = styled.div`
  padding-top: 60px;
  padding-right: 25px;

  @media ${maxWidthLarge} {
    padding-top: 0;
    padding-right: 20px;
  }

  ${layoutCSS}
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1.5;

  @media ${maxWidthLarge} {
    font-size: 1.8rem;
  }
`;

const Subhead = styled.h3`
  margin-top: 16px;
  font-weight: normal;
  line-height: 1.58;

  @media ${maxWidthLarge} {
    margin-top: 14px;
    font-size: 1.4rem;
  }
`;

const MoreAnchor = styled.a`
  display: flex;
  margin-top: 34px;
  color: #00256c;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.5;

  &:hover {
    text-decoration: underline;
  }

  &::after {
    content: '';
    background: url(${arrowIcon}) no-repeat center / 32px;
    display: block;
    width: 32px;
    height: 32px;
    margin-left: 8px;
  }

  @media ${maxWidthLarge} {
    margin-top: 12px;
    font-size: 1.4rem;
  }
`;
