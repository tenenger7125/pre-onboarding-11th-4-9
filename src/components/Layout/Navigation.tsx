import { styled } from 'styled-components';

import Button from '../Button';

const DUMMY_NAVIGATORS = ['소개', '질문과 답변', '소식받기', '제휴/문의'];

const Navigation = () => {
  return (
    <nav>
      <SContainer>
        {DUMMY_NAVIGATORS.map(navigator => (
          <li key={navigator}>
            <Button>{navigator}</Button>
          </li>
        ))}
      </SContainer>
    </nav>
  );
};

const SContainer = styled.ul`
  display: flex;
  gap: 20px;

  list-style: none;
`;

export default Navigation;
