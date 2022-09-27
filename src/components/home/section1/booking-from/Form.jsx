import styled, { css } from 'styled-components';

import BookingTypeSelector from './booking-type-selector/BookingTypeSelector';
import AirlineSelector from './airline-selector/AirlineSelector';
import NumOfPassengersSelector from './num-of-passengers-selector/NumOfPassengersSelector';
import CabinClassSelector from './cabin-class-selector/CabinClassSelector';
import FormFooter from './form-footer/FormFooter';
import { maxWidthLarge } from '../../../../global-style/mediaSize';

function Form() {
  return (
    <FormWrapper>
      <BookingTypeSelector />
      <AirlineSelector layoutCSS={marginTop12px} />
      <NumOfPassengersSelector layoutCSS={marginTop8px} />
      <CabinClassSelector layoutCSS={marginTop8px} />
      <FormFooter layoutCSS={FormFooterLayoutCSS} />
      <SearchButton>항공편 검색</SearchButton>
    </FormWrapper>
  );
}

export default Form;

const FormWrapper = styled.form`
  background: rgba(5, 22, 96, 0.85);
  width: 400px;
  padding: 20px 10px 14px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${maxWidthLarge} {
    width: 100%;
    padding-bottom: 40px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: transparent;
  }
`;

const SearchButton = styled.button`
  background-color: #0064de;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  border: none;
  border-radius: 8px;

  color: #fff;
  font-weight: bold;

  @media ${maxWidthLarge} {
    height: 57px;
    border-radius: 12px;
    margin-top: 16px;
  }
`;

const marginTop12px = css`
  margin-top: 12px;
`;
const marginTop8px = css`
  margin-top: 8px;
`;

const FormFooterLayoutCSS = css`
  margin-top: 12px;

  @media ${maxWidthLarge} {
    margin-top: 15px;
  }
`;
