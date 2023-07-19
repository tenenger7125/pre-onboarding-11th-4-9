import { styled } from 'styled-components';

import { Title } from '../index';

const Footer = () => {
  return (
    <SLayout>
      <SContainer>
        <div>
          <Title order={4}>(주)휴먼스케이프</Title>
          <div>서울특별시 강남구 봉은사로86길 6, 레베쌍트빌딩 601호 | 대표자: 장민후</div>
          <SCopyRight>© 2021 Humanscape, All rights reserved.</SCopyRight>
          <div>
            <img
              src="https://clinicaltrialskorea.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkids.00b60645.png&w=96&q=75"
              alt="한국의약품안전관리원 로고"
            />
          </div>
        </div>
        <div>
          <Title order={4}>개인정보처리방침</Title>
          <div>Living healthier by connecting better</div>
        </div>
      </SContainer>
    </SLayout>
  );
};

const SLayout = styled.footer`
  width: 100%;
  padding: 40px 20px;

  background-color: ${props => props.theme.colors['bg-lightBlack']};

  font-size: 14px;
  color: ${props => props.theme.colors['ft-lightGray']};
  line-height: 1.6;

  h4 {
    font-size: initial;
  }
`;

const SContainer = styled.div`
  max-width: 1040px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
`;

const SCopyRight = styled.div`
  margin-bottom: 16px;
`;

export default Footer;
