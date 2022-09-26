import styled, { css } from 'styled-components';
import { maxContentsArea, maxWidthLarge } from '../../../global-style/mediaSize';
import { layoutCSS } from '../../../util/layoutCSS';
import UsefulMenu from './useful-menu/UsefulMenu';

function Section4({ layoutCSS }) {
  return (
    <Section4Wrapper layoutCSS={layoutCSS}>
      <ContentsArea>
        <Title>여행의 완성을 위한 경험</Title>
        <UsefulMenu layoutCSS={UsefulMenulayoutCSS} />
      </ContentsArea>
    </Section4Wrapper>
  );
}

export default Section4;

const Section4Wrapper = styled.section`
  ${layoutCSS}
`;

const ContentsArea = styled.div`
  max-width: ${maxContentsArea};
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.53;
`;

const UsefulMenulayoutCSS = css`
  margin-top: 20px;

  @media ${maxWidthLarge} {
    margin-top: 30px;
  }
`;
