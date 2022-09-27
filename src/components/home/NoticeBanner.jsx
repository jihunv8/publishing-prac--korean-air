import styled from 'styled-components';
import { maxContentsArea, maxWidthLarge } from '../../global-style/mediaSize';
import { layoutCSS } from '../../util/layoutCSS';

function NoticeBanner({ title = '제목 없음', subhead = '부제목 없음', href = '', bgImage = {}, layoutCSS }) {
  return (
    <NoticeBannerWrapper>
      <Anchor href={href} bgImage={bgImage} layoutCSS={layoutCSS}>
        <Title>{title}</Title>
        <Subhead>{subhead}</Subhead>
      </Anchor>
    </NoticeBannerWrapper>
  );
}

export default NoticeBanner;

const NoticeBannerWrapper = styled.div`
  padding: 0 20px;
`;

const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${({ bgImage }) => bgImage.pc}) no-repeat right center / cover;
  max-width: ${maxContentsArea};
  height: 120px;
  padding: 30px 320px 34px 40px;
  color: #00256c;

  &:hover {
    text-decoration: underline;
  }

  @media ${maxWidthLarge} {
    background-image: url(${({ bgImage }) => bgImage.mobile});
    padding: 22px 100px 22px 24px;
  }

  ${layoutCSS}
`;

const Title = styled.h2`
  color: inherit;
  font-size: 1.8rem;
  text-decoration: inherit;
`;

const Subhead = styled.h3`
  margin-top: 4px;
  color: inherit;
  font-weight: normal;
  text-decoration: inherit;
`;
