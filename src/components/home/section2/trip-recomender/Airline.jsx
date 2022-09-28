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
      <Image src={imageUrl} />
      <Content>
        <FromTo>
          {from}
          {'  -  '}
          {to}
        </FromTo>
        <CabinClassAndType>
          {cabinClass} {type}
        </CabinClassAndType>
        <Price>KRW {parseMoney(price)} ~</Price>
      </Content>
    </AirlineWrapper>
  );
}

export default Airline;

const AirlineWrapper = styled.a`
  display: block;
  width: 100%;
  border: 1px solid transparent;
  cursor: pointer;
  position: relative;

  &:hover,
  &:focus {
    border-color: #0064de;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Content = styled.div`
  padding: 20px 22px;
  position: absolute;
  top: 0;
  left: 0;
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
