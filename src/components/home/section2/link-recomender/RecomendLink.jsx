import styled from 'styled-components';
import { layoutCSS } from '../../../../util/layoutCSS';

import arrowIcon from '../../../../images/icons/m2ba__link.svg';

function RecomendLink({ title = '제목 없음', subhead = '부제목 없음', href = '', layoutCSS }) {
  return (
    <RecomendLinkWrapper href={href} layoutCSS={layoutCSS}>
      <div>
        <Title>{title}</Title>
        <Subhead>{subhead}</Subhead>
      </div>
      <ArrowIcon />
    </RecomendLinkWrapper>
  );
}

export default RecomendLink;

const RecomendLinkWrapper = styled.a`
  background-color: #fefefe;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 20px 28px 40px;

  &:hover,
  &:focus {
    border-radius: 3px;
    outline: solid 1px #0064de;
  }

  ${layoutCSS}
`;

const Title = styled.h2`
  font-weight: bold;
  line-height: 1.5;
`;

const Subhead = styled.h3`
  margin-top: 10px;
  font-weight: normal;
  line-height: 1.57;
`;

const ArrowIcon = styled.div`
  background: url(${arrowIcon}) no-repeat center/ 24px;
  width: 24px;
  height: 24px;
`;
