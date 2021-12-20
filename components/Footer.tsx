import { NextComponentType } from 'next';
import styled from 'styled-components';

const ContainerFooter = styled.footer`
  div {
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const Footer: NextComponentType = () => {
  return (
    <ContainerFooter>
      <div>
        <p style={{ fontSize: '14px' }}>
          부산광역시 금정구 서동로 91번길 7<span style={{ lineHeight: 2 }} />
        </p>
        <p style={{ fontSize: '14px' }}>
          <span style={{ lineHeight: 2 }}>로고</span>
        </p>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
