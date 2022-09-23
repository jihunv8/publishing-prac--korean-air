import styled from 'styled-components';

import passengerIcon from '../../../../../../images/icons/quickbooking__passenger.svg';

function NumOfPassengersButton({ ...props }) {
  return (
    <NumOfPassengersButtonWrapper {...props}>
      <Title>승객 수</Title>
      <Selected>성인 1명</Selected>
    </NumOfPassengersButtonWrapper>
  );
}

export default NumOfPassengersButton;

const NumOfPassengersButtonWrapper = styled.button`
  background-color: transparent;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: padding-right 0.2s;

  &:focus,
  &:hover {
    outline: solid 1px #0064de;
    padding-right: 4px;
    transition: padding-right 0.2s;
  }
`;

const Title = styled.span`
  color: #767676;
`;

const Selected = styled.span`
  display: flex;

  &::after {
    content: '';
    background: url(${passengerIcon});
    width: 24px;
    height: 24px;
    margin-left: 6px;
  }
`;
