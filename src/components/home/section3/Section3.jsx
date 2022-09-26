import styled from 'styled-components';
import { maxContentsArea } from '../../../global-style/mediaSize';

import Contents from './Contents';

import image from '../../../images/edocservice_pc_b.jpg';
import bgImage from '../../../images/bg/msgi__bg-pc.svg';
import { layoutCSS } from '../../../util/layoutCSS';

function Section3({ layoutCSS }) {
  return (
    <Section3Wrapper layoutCSS={layoutCSS}>
      <ContentsArea>
        <ImageContainer>
          <Image src={image} alt="이미지" />
        </ImageContainer>

        <Contents />
      </ContentsArea>
    </Section3Wrapper>
  );
}

export default Section3;

const Section3Wrapper = styled.section`
  padding: 0 20px;

  ${layoutCSS}
`;

const ContentsArea = styled.div`
  max-width: ${maxContentsArea};
  margin: 0 auto;
  display: flex;
`;

const ImageContainer = styled.div`
  margin-right: 137px;
  padding-bottom: 50px;
  position: relative;

  &::before {
    content: '';
    display: block;
    background: url(${bgImage});
    width: 996px;
    height: 284px;

    position: absolute;
    bottom: 0;
    right: -50px;
  }
`;

const Image = styled.img`
  height: 300px;
  display: block;
  position: relative;
`;
