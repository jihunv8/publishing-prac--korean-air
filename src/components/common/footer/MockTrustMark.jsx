import styled from 'styled-components';

function MockTrustMark() {
  return <MockTrustMarkWrapper href="">{'Mock\nTrust\nMark'}</MockTrustMarkWrapper>;
}

export default MockTrustMark;

const MockTrustMarkWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: 0 10px;
  border: solid 1px #555;
  border-radius: 100%;
  color: #555;
  font-size: 1rem;
  white-space: pre-wrap;
`;
