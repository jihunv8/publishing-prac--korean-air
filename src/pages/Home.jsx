import styled from 'styled-components';
import Header from '../components/common/Header';
import Section1 from '../components/home/section1/Section1';

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Section1 />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div``;
