import styled from 'styled-components';
import { maxWidthLarge } from '../../../../global-style/mediaSize';

function Menu({ title = '제목 없음', iconUrl = '', href = '' }) {
  return (
    <MenuWrapper href={href}>
      <Icon iconUrl={iconUrl} />
      <Title>{title}</Title>
    </MenuWrapper>
  );
}

export default Menu;

const MenuWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.div`
  background: url(${({ iconUrl }) => iconUrl}) no-repeat center / 48px;
  width: 48px;
  height: 48px;
`;

const Title = styled.h3`
  margin-top: 4px;
  font-weight: bold;
  line-height: 1.64;
  text-decoration: inherit;

  @media ${maxWidthLarge} {
    margin-top: 6px;
    font-size: 1.4rem;
    font-weight: normal;
    line-height: 1.58;
  }
`;
