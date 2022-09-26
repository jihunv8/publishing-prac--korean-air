import styled, { css } from 'styled-components';
import { maxContentsArea, maxWidthLarge } from '../../../../global-style/mediaSize';
import RecomendLink from './RecomendLink';

function LinkRecomender() {
  return (
    <LinkRecomenderWrapper>
      <ContentsArea>
        <RecomendLink
          title="최저가 항공권 찾기"
          subhead="합리적인 가격의 항공권을 지도를 통해 편리하게 확인하세요."
          href=""
          layoutCSS={link1CSS}
        />
        <RecomendLink
          title="이벤트 확인하기"
          subhead="고객님을 위해 준비된 다채로운 혜택을 확인해보세요."
          href=""
          layoutCSS={link2CSS}
        />
      </ContentsArea>
    </LinkRecomenderWrapper>
  );
}

export default LinkRecomender;

const LinkRecomenderWrapper = styled.div`
  background-color: #f3f4f8;
  padding: 40px 20px;
`;

const ContentsArea = styled.div`
  max-width: ${maxContentsArea};
  margin: 0 auto;
  display: flex;

  @media ${maxWidthLarge} {
    flex-direction: column;
  }
`;

const flexBasis100Percen = css`
  flex-basis: 100%;
`;

const link1CSS = css`
  margin-right: 15px;
  ${flexBasis100Percen}

  @media ${maxWidthLarge} {
    margin-right: 0;
  }
`;

const link2CSS = css`
  margin-left: 15px;
  ${flexBasis100Percen}

  @media ${maxWidthLarge} {
    margin-top: 12px;
    margin-left: 0;
  }
`;
