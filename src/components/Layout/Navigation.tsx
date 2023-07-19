import { styled } from 'styled-components';

import Button from '../Button';

const Navigation = () => {
  return (
    <nav>
      <SNavigationList>
        {DUMMY_NAVIGATORS.map(navigator => (
          <SNavigationItem key={navigator}>
            <Button>{navigator}</Button>
          </SNavigationItem>
        ))}
      </SNavigationList>
    </nav>
  );
};

const DUMMY_NAVIGATORS = ['소개', '질문과 답변', '소식받기', '제휴/문의'];

const SNavigationList = styled.ul`
  display: flex;
  gap: 20px;

  padding: 0;
  margin: 0;

  list-style: none;
`;

const SNavigationItem = styled.li`
  flex-shrink: 0;
`;

export default Navigation;
