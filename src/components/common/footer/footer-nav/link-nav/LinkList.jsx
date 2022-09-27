import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { maxWidthLarge } from '../../../../../global-style/mediaSize';

import arrowDownIcon from '../../../../../images/icons/snb__title.svg';
import arrowUpIcon from '../../../../../images/icons/snb__title--expand.svg';

function LinkList({ title = '제목 없음', linkList = [], isDropDown = false, toggleDropDown = () => {} }) {
  const isLargeSize = useMediaQuery({ maxWidth: 1060 });

  return (
    <LinkListWrapper>
      {isLargeSize ? (
        <TitleButton onClick={toggleDropDown} dropDown={isDropDown}>
          {title}
        </TitleButton>
      ) : (
        <Title>{title}</Title>
      )}
      <List dropDown={isDropDown}>
        {linkList.map((link, i) => (
          <li key={i}>
            <Anchor href={link.href} bold={link.bold}>
              {link.name}
            </Anchor>
          </li>
        ))}
      </List>
    </LinkListWrapper>
  );
}

export default LinkList;

const LinkListWrapper = styled.div`
  width: 25%;

  &:last-child {
    border-right: solid 1px #e7eaf0;
  }

  @media ${maxWidthLarge} {
    width: auto;
    border-bottom: solid 1px #e7eaf0;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  line-height: 1.5;
`;

const TitleButton = styled.button`
  width: 100%;
  background: transparent url(${({ dropDown }) => (dropDown ? arrowUpIcon : arrowDownIcon)}) no-repeat center right /
    17px;
  border: none;
  padding: 14px 50px 14px 10px;

  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.5;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.ul`
  margin-top: 11px;

  @media ${maxWidthLarge} {
    display: ${({ dropDown }) => (dropDown ? 'block' : 'none')};
    margin-top: 0;
  }
`;

const Anchor = styled.a`
  display: block;
  padding: 2px 0;
  color: #555;
  font-size: 1.4rem;
  line-height: 1.58;
  ${({ bold }) => bold && 'font-weight: bold'};

  &:hover {
    text-decoration: underline;
  }

  @media ${maxWidthLarge} {
    padding: 5px 10px;
  }
`;
