import styled from 'styled-components';

import linkNavData from './linkNavData';

import LinkList from './LinkList';
import { maxWidthLarge } from '../../../../../global-style/mediaSize';
import { useState } from 'react';

function LinkNav() {
  const [dropDownIndex, setDropDownIndex] = useState(-1);

  const createToggleDropDown = (i) => () => {
    if (dropDownIndex === i) {
      setDropDownIndex(-1);
    } else {
      setDropDownIndex(i);
    }
  };

  return (
    <LinkNavWrapper>
      {linkNavData.map((data, i) => (
        <LinkList
          key={i}
          title={data.title}
          linkList={data.linkList}
          isDropDown={i === dropDownIndex}
          toggleDropDown={createToggleDropDown(i)}
        />
      ))}
    </LinkNavWrapper>
  );
}

export default LinkNav;

const LinkNavWrapper = styled.nav`
  padding-right: 26.57%;
  display: flex;
  justify-content: space-between;

  @media ${maxWidthLarge} {
    flex-direction: column;
    padding-right: 0;
  }
`;
