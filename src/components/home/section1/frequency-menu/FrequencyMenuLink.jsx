import styled from 'styled-components';
import { maxWidthLarge } from '../../../../global-style/mediaSize';
import { layoutCSS } from '../../../../util/layoutCSS';

function FrequencyMenuLink({ children, iconUrl, layoutCSS, ...props }) {
  return (
    <FrequencyMenuLinkWrapper layoutCSS={layoutCSS}>
      <Anchor {...props}>
        <Icon iconUrl={iconUrl} />
        {children}
      </Anchor>
    </FrequencyMenuLinkWrapper>
  );
}

export default FrequencyMenuLink;

const FrequencyMenuLinkWrapper = styled.div`
  width: 100%;

  ${layoutCSS}
`;

const Icon = styled.span`
  background: url(${({ iconUrl }) => iconUrl}) no-repeat center / 48px;
  display: block;
  width: 48px;
  height: 48px;
`;

const Anchor = styled.a`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.58;

  &:hover {
    text-decoration: underline;
  }

  @media ${maxWidthLarge} {
    flex-direction: column;
    height: fit-content;
    font-size: 1.4rem;
  }
`;
