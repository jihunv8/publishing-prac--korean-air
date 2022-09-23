import styled from 'styled-components';
import { layoutCSS } from '../../../../util/layoutCSS';

import prevArrowIcon from '../../../../images/icons/carousel-icon-prev-ctrl.svg';
import nextArrowIcon from '../../../../images/icons/carousel-icon-next-ctrl.svg';

function SwipeButton({ currentPage = -1, maxPage = -1, setCurrentPage = () => {} }) {
  const swipeToPrevPage = () => {
    let prevPage = currentPage - 1;
    if (prevPage < 0) {
      prevPage = maxPage - 1;
    }

    setCurrentPage(prevPage);
  };

  const swipeToNextPage = () => {
    let nextPage = currentPage + 1;
    if (nextPage >= maxPage) {
      nextPage = 0;
    }

    setCurrentPage(nextPage);
  };

  return (
    <SwipeButtonWrapper layoutCSS={layoutCSS}>
      <PrevButton onClick={swipeToPrevPage} />
      <PageNumber>
        <span>{currentPage + 1}</span> / {maxPage}
      </PageNumber>
      <NextButton onClick={swipeToNextPage} />
    </SwipeButtonWrapper>
  );
}

export default SwipeButton;

const SwipeButtonWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  width: fit-content;
  padding: 2px 6px;
  display: flex;
  align-items: center;
`;

const PageNumber = styled.div`
  margin: 0 4px;
  color: #fff;
  font-size: 1.4rem;
  line-height: 2.1rem;

  > span {
    font-weight: bold;
  }
`;

const Button = styled.button`
  width: 28px;
  height: 28px;
  background-color: transparent;
  border: none;
  color: #fff;
`;

const PrevButton = styled(Button)`
  background: url(${prevArrowIcon}) no-repeat center;
`;

const NextButton = styled(Button)`
  background: url(${nextArrowIcon}) no-repeat center;
`;
