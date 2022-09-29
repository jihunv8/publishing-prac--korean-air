import styled from 'styled-components';
import { layoutCSS } from '../../../../util/layoutCSS';
import LinkList from './LinkList';

function LinkListContainer({ linkListData = [], layoutCSS }) {
  return (
    <LinkListContainerWrapper layoutCSS={layoutCSS}>
      {linkListData.map((data, i) => (
        <ListItem key={i}>
          <LinkList title={data.title} linkList={data.linkList} href={data.href} />
        </ListItem>
      ))}
    </LinkListContainerWrapper>
  );
}

export default LinkListContainer;

const LinkListContainerWrapper = styled.ul`
  padding: 30px 3.5% 50px;

  ${layoutCSS}
`;

const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 40px;
    margin-bottom: 8px;
  }
`;
