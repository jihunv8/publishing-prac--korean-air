import styled from 'styled-components';

import rightArrowIcon from '../../../../../../images/icons/ico-right-white.svg';

function ETCLink({ children, ...props }) {
  return <ETCLinkWrapper {...props}>{children}</ETCLinkWrapper>;
}

export default ETCLink;

const ETCLinkWrapper = styled.a`
  background: url(${rightArrowIcon}) no-repeat right center;
  padding: 3px 24px 3px 0;
  display: block;
  color: #fff;
  line-height: 1.5;
  border-radius: 3px;

  &:hover {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #0064de;
  }
`;
