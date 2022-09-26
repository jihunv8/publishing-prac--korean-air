import styled, { css } from 'styled-components';
import { layoutCSS } from '../../../util/layoutCSS';
import LinkRecomender from './link-recomender/LinkRecomender';

import ArilineRecomender from './trip-recomender/AirlineRecomender';

function Section2({ layoutCSS }) {
  return (
    <Section2Wrapper layoutCSS={layoutCSS}>
      <ArilineRecomender layoutCSS={alignCenter} />
      <Background />
      <LinkRecomender />
    </Section2Wrapper>
  );
}

export default Section2;

const Section2Wrapper = styled.section`
  ${layoutCSS}
`;

const Background = styled.div`
  background-color: #f3f4f8;
  height: 238px;
  margin-top: -238px;
`;

const alignCenter = css`
  margin: 0 auto;
`;
