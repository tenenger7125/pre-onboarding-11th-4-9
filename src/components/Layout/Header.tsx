import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import Navigation from './Navigation';
import { Title } from '../index';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { PATH } from '../../constants';

const Header = () => {
  return (
    <SLayout>
      <SContainer>
        <Link to={PATH.HOME}>
          <Logo height={24} />
          <Title order={1} srOnly>
            한국임상정보
          </Title>
        </Link>
        <Navigation />
      </SContainer>
    </SLayout>
  );
};

const SLayout = styled.header`
  width: 100%;

  background-color: ${props => props.theme.colors['bg-white']};
`;

const SContainer = styled.div`
  max-width: 1040px;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;

  padding: 15px 10px;
  margin: 0 auto;
`;

export default Header;
