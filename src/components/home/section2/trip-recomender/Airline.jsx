import styled from 'styled-components';
import { parseMoney } from '../../../../util/money';

function Airline({
  from = '미지정',
  to = '미지정',
  cabinClass = '미지정',
  type = '미지정',
  price = -1,
  imageUrl = '',
}) {
  return (
    <AirlineWrapper imageUrl={imageUrl}>
      <FromTo>
        {from}
        {'  -  '}
        {to}
      </FromTo>
      <CabinClassAndType>
        {cabinClass} {type}
      </CabinClassAndType>
      <Price>KRW {parseMoney(price)} ~</Price>
    </AirlineWrapper>
  );
}

export default Airline;

const AirlineWrapper = styled.a`
  display: block;
  background: url(${({ imageUrl }) => imageUrl}) no-repeat center / cover;
  width: 232px;
  height: 295px;
  padding: 20px 22px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid #0064de;
  }
`;

const FromTo = styled.h3`
  font-weight: bold;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const CabinClassAndType = styled.div`
  margin-top: 8px;
  line-height: 1.5;
`;

const Price = styled.div`
  color: #11277b;
  font-weight: bold;
  line-height: 1.5;
`;
