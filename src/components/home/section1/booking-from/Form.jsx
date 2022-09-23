import styled, { css } from 'styled-components';

import BookingTypeSelector from './booking-type-selector/BookingTypeSelector';
import AirlineSelector from './airline-selector/AirlineSelector';
import NumOfPassengersSelector from './num-of-passengers-selector/NumOfPassengersSelector';
import CabinClassSelector from './cabin-class-selector/CabinClassSelector';
import FormFooter from './form-footer/FormFooter';

function Form() {
  return (
    <FormWrapper>
      <BookingTypeSelector />
      <AirlineSelector layoutCSS={marginTop12px} />
      <NumOfPassengersSelector layoutCSS={marginTop8px} />
      <CabinClassSelector layoutCSS={marginTop8px} />
      <FormFooter layoutCSS={marginTop12px} />
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
`;

const marginTop12px = css`
  margin-top: 12px;
`;
const marginTop8px = css`
  margin-top: 8px;
`;
