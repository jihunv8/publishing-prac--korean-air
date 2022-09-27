import styled, { css } from 'styled-components';
import { maxContentsArea, maxWidthLarge } from '../../../../global-style/mediaSize';

import FrequencyMenuLink from './FrequencyMenuLink';

import bookingIcon from '../../../../images/icons/mfnb__booking.svg';
import checkinIcon from '../../../../images/icons/mfnb__checkin.svg';
import scheduleIcon from '../../../../images/icons/mfnb__schedule.svg';
import { layoutCSS } from '../../../../util/layoutCSS';

function FrequencyMenu({ layoutCSS }) {
  return (
    <FrequencyMenuWrapper layoutCSS={layoutCSS}>
      <ContentsArea>
        <FrequencyMenuLink href="" iconUrl={bookingIcon} layoutCSS={line}>
          예약 조회
        </FrequencyMenuLink>
        <FrequencyMenuLink href="" iconUrl={checkinIcon} layoutCSS={line}>
          체크인
        </FrequencyMenuLink>
        <FrequencyMenuLink href="" iconUrl={scheduleIcon}>
          항공편 현황
        </FrequencyMenuLink>
      </ContentsArea>
    </FrequencyMenuWrapper>
  );
}

export default FrequencyMenu;

const FrequencyMenuWrapper = styled.div`
  padding: 0 20px;

  ${layoutCSS}
`;

const ContentsArea = styled.div`
  max-width: ${maxContentsArea};
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const line = css`
  display: flex;
  align-items: center;

  &::after {
    content: '';
    background-color: #d9dbe1;
    display: block;
    width: 1px;
    height: 20px;

    @media ${maxWidthLarge} {
      display: none;
    }
  }
`;
