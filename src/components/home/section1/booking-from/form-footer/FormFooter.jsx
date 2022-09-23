import styled from 'styled-components';
import { layoutCSS } from '../../../../../util/layoutCSS';

import ETCLink from './ETCLink';
import FlexibleDatesCheckBox from './FlexibleDatesCheckBox';

function FormFooter({ layoutCSS }) {
  return (
    <FormFooterWrapper layoutCSS={layoutCSS}>
      <FlexibleDatesCheckBox />
      <ETC>
        <ETCLink href="">구매와 동시 승급</ETCLink>
        <ETCLink href="">다구간</ETCLink>
      </ETC>
    </FormFooterWrapper>
  );
}

export default FormFooter;

const FormFooterWrapper = styled.div`
  width: 100%;

  ${layoutCSS}
`;

const ETC = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`;
