import styled from 'styled-components';
import { layoutCSS } from '../../../../util/layoutCSS';

function RecomendLink({ title = '제목 없음', subhead = '부제목 없음', href = '', layoutCSS }) {
  return (
    <RecomendLinkWrapper href={href} layoutCSS={layoutCSS}>
      <Title>{title}</Title>
      <Subhead>{subhead}</Subhead>
    </RecomendLinkWrapper>
  );
}

export default RecomendLink;

const RecomendLinkWrapper = styled.a`
  background-color: #fefefe;
  display: block;
  padding: 22px 20px 28px 30px;

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
