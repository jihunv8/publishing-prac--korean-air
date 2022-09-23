import styled from 'styled-components';
import { layoutCSS } from '../../../../util/layoutCSS';

function FrequencyMenuLink({ children, iconUrl, layoutCSS, ...props }) {
  return (
    <FrequencyMenuLinkWrapper layoutCSS={layoutCSS}>
      <Anchor {...props}>
        <Icon iconUrl={iconUrl} />
        {children}{' '}
      </Anchor>
    </FrequencyMenuLinkWrapper>
  );
}

export default FrequencyMenuLink;

const FrequencyMenuLinkWrapper = styled.div`
  ${layoutCSS}
`;

const Icon = styled.span`
  background: url(${({ iconUrl }) => iconUrl}) no-repeat center;
  display: block;
  width: 48px;
  height: 48px;
`;

const Anchor = styled.a`
  display: flex;
  width: 348px;
  height: 48px;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.58;

  &:hover {
    text-decoration: underline;
  }
`;
