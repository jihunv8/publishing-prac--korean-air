import BUDImage from '../../../../images/trip-recomende-mock-data-images/BUD-list-pc.jpg';
import DXBImage from '../../../../images/trip-recomende-mock-data-images/DXB-list-pc.jpg';
import BCNImage from '../../../../images/trip-recomende-mock-data-images/BCN-list-pc.jpg';
import FCOImage from '../../../../images/trip-recomende-mock-data-images/FCO-list-pc.jpg';
import HKTImage from '../../../../images/trip-recomende-mock-data-images/HKT-list-pc.jpg';

const data = [
  {
    from: '서울/인천',
    to: '부다페스트',
    cabinClass: '일반석',
    type: '왕복',
    price: 1333000,
    image: BUDImage,
  },
  {
    from: '서울/인천',
    to: '두바이',
    cabinClass: '일반석',
    type: '왕복',
    price: 1151100,
    image: DXBImage,
  },
  {
    from: '서울/인천',
    to: '바르셀로나',
    cabinClass: '일반석',
    type: '왕복',
    price: 1515500,
    image: BCNImage,
  },
  {
    from: '서울/인천',
    to: '로마/레오나르도 다빈치',
    cabinClass: '일반석',
    type: '왕복',
    price: 1393300,
    image: FCOImage,
  },
  {
    from: '서울/인천',
    to: '푸켓',
    cabinClass: '일반석',
    type: '왕복',
    price: 655600,
    image: HKTImage,
  },
];

export default data;
