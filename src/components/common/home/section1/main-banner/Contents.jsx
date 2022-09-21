import styled from 'styled-components';

import rightArrowIcon from '../../../../../images/icons/right.svg';

function Contents({ title = '제목 없음', url = '' }) {
  return (
    <div>
      <Title>{title}</Title>
      <MoreLink href={url}>자세히 보기</MoreLink>
    </div>
  );
}

export default Contents;

const Title = styled.h2`
  color: #222;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: -0.05rem;
  line-height: 4.5rem;
  white-space: pre-wrap;
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
`;
