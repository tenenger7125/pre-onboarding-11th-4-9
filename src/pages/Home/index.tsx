import { styled } from 'styled-components';

import Search from './Search';
import { Title } from '../../components';
import { ReactComponent as CommunicatingPeople } from '../../assets/communicatingPeople.svg';
import { ReactComponent as ResearchingPerson } from '../../assets/researchingPerson.svg';
import { ReactComponent as DrawBoardPerson } from '../../assets/drawBoardPerson.svg';

const Home = () => {
  return (
    <SLayout>
      <SContainer>
        <Title order={2}>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </Title>
        <Search />
        <SResearchingPerson />
        <SCommunicatingPeople />
        <SDrawBoardPerson />
      </SContainer>
    </SLayout>
  );
};

const SLayout = styled.section`
  background-color: ${props => props.theme.colors['bg-lightBlue']};
`;

const SContainer = styled.section`
  max-width: 1000px;

  position: relative;

  padding: 80px 0px 160px;
  margin: 0 auto;

  text-align: center;
  line-height: 1.6;
`;

const SResearchingPerson = styled(ResearchingPerson)`
  width: 130px;

  position: absolute;
  right: 124px;
  top: 280px;
`;

const SCommunicatingPeople = styled(CommunicatingPeople)`
  width: 148px;

  position: absolute;
  left: 0;
  top: 200px;
`;

const SDrawBoardPerson = styled(DrawBoardPerson)`
  width: 116px;

  position: absolute;
  right: 20px;
  top: 188px;
`;

export default Home;
