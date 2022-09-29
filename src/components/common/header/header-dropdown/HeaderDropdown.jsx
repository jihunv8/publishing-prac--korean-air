import styled, { css } from 'styled-components';
import { maxContentsArea } from '../../../../global-style/mediaSize';
import { layoutCSS } from '../../../../util/layoutCSS';

import LinkListContainer from './LinkListContainer';
import QuickMenu from './QuickMenu';

import closeIcon from '../../../../images/icons/gnb__close.svg';

import headerDropdownData from './headerDropdownData';

const dropdownData = headerDropdownData;

function HeaderDropdown({ selectedMenu = 'book', closeDropdown = () => {}, layoutCSS }) {
  return (
    <HeaderDropdownWrapper layoutCSS={layoutCSS}>
      <ContentsArea>
        {dropdownData[selectedMenu].map((data, i) => (
          <LinkListContainer key={i} linkListData={data} layoutCSS={LinkListContainerLayoutCSS} />
        ))}
        <QuickMenu />
        <CloseButton onClick={closeDropdown} />
      </ContentsArea>
    </HeaderDropdownWrapper>
  );
}

export default HeaderDropdown;

const HeaderDropdownWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 0 20px;
  box-shadow: 0 6px 10px 0 rgb(39 40 44 / 10%);

  ${layoutCSS}
`;

const ContentsArea = styled.div`
  max-width: ${maxContentsArea};
  margin: 0 auto;
  display: flex;
  border-left: solid 1px #d9dbe1;
  border-right: solid 1px #d9dbe1;
  position: relative;
`;

const CloseButton = styled.button`
  background: transparent url(${closeIcon}) no-repeat center;
  width: 44px;
  height: 44px;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
`;

const LinkListContainerLayoutCSS = css`
  flex-basis: 25%;

  &:not(:first-child) {
    border-left: solid 1px #d9dbe1;
  }
`;
