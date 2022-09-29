import bookingIcon from '../../../../images/icons/ico-booking.svg';
import reservationIcon from '../../../../images/icons/ico-reservation.svg';
import checkinIcon from '../../../../images/icons/ico-checkin.svg';
import scheduleIcon from '../../../../images/icons/ico-schedule.svg';
import dutyfreeIcon from '../../../../images/icons/ico-dutyfree.svg';
import businessIcon from '../../../../images/icons/ico-business.svg';
import eventIcon from '../../../../images/icons/ico-event.svg';

const headerDropdownData = {
  book: [
    [
      {
        title: '구매 안내',
        linkList: [
          { name: '국내선', href: '' },
          { name: '국제선', href: '' },
          { name: '사전 좌석 배정', href: '' },
          { name: '좌석 등급', href: '' },
          { name: '유료 부가상품', href: '' },
          { name: '온라인 결제 안내', href: '' },
        ],
      },
    ],
    [
      {
        title: '변경 및 환불 안내',
        linkList: [
          { name: '항공권 변경', href: '' },
          { name: '항공권 환불', href: '' },
          { name: '예약부도위약금', href: '' },
        ],
      },
      {
        title: '최저가 항공권',
        href: '',
        linkList: [],
      },
    ],
    [
      {
        title: '환승 상품',
        linkList: [
          { name: '환승 전용 내항기', href: '' },
          { name: 'Rail & Fly', href: '' },
        ],
      },
      {
        title: '공동운항 안내',
        href: '',
        linkList: [],
      },
      {
        title: '운항 노선도',
        href: '',
        linkList: [],
      },
    ],
  ],
  airport: [
    [
      {
        title: '수하물',
        linkList: [
          { name: '수하물 안내', href: '' },
          { name: '운송 제한 물품', href: '' },
          { name: '휴대 수하물', href: '' },
          { name: '위탁 수하물', href: '' },
          { name: '지연, 파손 및 유실물', href: '' },
        ],
      },
      {
        title: '탐승 절차',
        linkList: [
          { name: '탑승 절차 안내', href: '' },
          { name: 'SkyPriority', href: '' },
          { name: '출입국 규정 정보', href: '' },
        ],
      },
    ],
    [
      {
        title: '체크인',
        linkList: [
          { name: '사전 체크인', href: '' },
          { name: '공항 체크인', href: '' },
        ],
      },
      {
        title: '도움이 필요한 승객',
        linkList: [
          { name: '한가족 서비스', href: '' },
          { name: '유아 동반 승객', href: '' },
          { name: '혼자 여행하는 어린이', href: '' },
          { name: '몸이 불편한 승객', href: '' },
          { name: '임신중인 승객', href: '' },
          { name: '반려동물 동반 승객', href: '' },
        ],
      },
    ],
    [
      {
        title: '공항 이용 가이드',
        linkList: [
          { name: '인천국제공항', href: '' },
          { name: '취항지 공항 정보', href: '' },
        ],
      },
      {
        title: 'KAL 라운지',
        href: '',
        linkList: [],
      },
      {
        title: '엑설런트 프로그램',
        linkList: [
          { name: '엑설런트 보딩패스', href: '' },
          { name: '엑설런트 트랜짓 프로그램', href: '' },
        ],
      },
    ],
  ],
  inFlight: [
    [
      {
        title: '클래스별 서비스',
        linkList: [
          { name: '일등석', href: '' },
          { name: '프레스티지석', href: '' },
          { name: '일반석', href: '' },
        ],
      },
    ],
    [
      {
        title: '기내 서비스',
        linkList: [
          { name: '서비스 순서', href: '' },
          { name: '기내식', href: '' },
          { name: '기내 면세품', href: '' },
          { name: '기내 여행 가이드', href: '' },
        ],
      },
      {
        title: '기내 엔터테인먼트',
        href: '',
        linkList: [],
      },
    ],
    [
      {
        title: '항공기 안내',
        linkList: [
          { name: '보잉 787', href: '' },
          { name: '보인 777', href: '' },
          { name: '보잉 747', href: '' },
          { name: '보잉 737', href: '' },
          { name: '에어버스 A380', href: '' },
          { name: '에어버스 A330', href: '' },
          { name: '에어버스 A220', href: '' },
        ],
      },
    ],
  ],
  skypass: [
    [
      {
        title: '스카이패스 소개',
        linkList: [
          { name: '회원 혜택', href: '' },
          { name: '가족 마일리지', href: '' },
          { name: '제휴사 확인', href: '' },
          { name: '스카이팀 공동 혜택', href: '' },
        ],
      },
    ],
    [
      {
        title: '마일리지 적립',
        linkList: [
          { name: '대한항공', href: '' },
          { name: '신용카드', href: '' },
          { name: '여행과 라이프', href: '' },
          { name: '제휴 항공사', href: '' },
          { name: '탑승 후 적립 안내', href: '' },
        ],
      },
    ],
    [
      {
        title: '마일리지 사용',
        linkList: [
          { name: '대한항공 보너스', href: '' },
          { name: '제휴 항공사 보너스', href: '' },
          { name: '보너스 좌석 상황 보기', href: '' },
        ],
      },
      {
        title: '마일리지 사용',
        href: '',
        linkList: [],
      },
    ],
  ],
};

export default headerDropdownData;

export const quick = {
  title: '빠른 메뉴',
  linkList: [
    [
      { name: '항공권 예매', href: '', icon: bookingIcon },
      { name: '예약 조회', href: '', icon: reservationIcon },
      { name: '체크인', href: '', icon: checkinIcon },
      { name: '항공편 현황', href: '', icon: scheduleIcon },
    ],
    [
      { name: '기내 면세점', href: '', icon: dutyfreeIcon },
      { name: '기업 출장 여행', href: '', icon: businessIcon },
      { name: '이벤트', href: '', icon: eventIcon },
    ],
  ],
};
