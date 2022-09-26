import notice1BgPC from '../images/notice-banner-mock-data-images/tibb__bg-pc-03.png';
import notice1BgM from '../images/notice-banner-mock-data-images/tibb__bg-m-03.png';

import notice2BgPC from '../images/notice-banner-mock-data-images/tibb__bg-pc_blue.png';
import notice2BgM from '../images/notice-banner-mock-data-images/tibb__bg-m_blue.png';

const data = [
  {
    title: '코로나19 업데이트 센터',
    subhead: '전 세계 출입국 규정, 항공편 운항 등 코로나19와 관련된 최신 정보를 확인하실 수 있습니다.',
    href: '',
    bgImage: {
      pc: notice1BgPC,
      mobile: notice1BgM,
    },
  },
  {
    title: 'NEW SKYPASS',
    subhead: '새롭게 개편된 스카이패스가 2023년 4월 시작됩니다.',
    href: '',
    bgImage: {
      pc: notice2BgPC,
      mobile: notice2BgM,
    },
  },
];

export default data;
