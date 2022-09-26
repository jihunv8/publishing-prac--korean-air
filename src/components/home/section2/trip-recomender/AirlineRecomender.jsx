import styled, { css } from 'styled-components';
import { maxContentsArea } from '../../../../global-style/mediaSize';
import { layoutCSS } from '../../../../util/layoutCSS';
import AirlineList from './AirlineList';

function AirlineRecomender({ layoutCSS }) {
  return (
    <AirlineRecomenderWrapper layoutCSS={layoutCSS}>
      <ContentsArea>
        <Title>지금 떠나기 좋은 여행</Title>
        <AirlineList layoutCSS={marginTop20px} />
      </ContentsArea>
    </AirlineRecomenderWrapper>
  );
}

export default AirlineRecomender;

const AirlineRecomenderWrapper = styled.div`
  padding: 0 20px;

  ${layoutCSS}
`;

const ContentsArea = styled.div`
  max-width: ${maxContentsArea};
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #1a1a1a;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.67;
`;

const marginTop20px = css`
  margin-top: 20px;
`;
