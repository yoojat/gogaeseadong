import { NextComponentType } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

const ContainerFooter = styled.footer`
  padding: 15px;
`;

const FooterContentContainer = styled.div`
  font-size: 14px;
  display: flex;
  align-items: flex-end;
`;

const Footer: NextComponentType = () => {
  return (
    <ContainerFooter>
      <FooterContentContainer>
        <div style={{ position: 'relative', width: '80px', height: '50px' }}>
          <Image
            layout='fill'
            objectFit={'contain'}
            src={'/logo_brown.png'}
            alt={'logo'}
          />
        </div>
        <div style={{ paddingBottom: '5px' }}>
          부산광역시 금정구 서동로 91번길 7
        </div>
      </FooterContentContainer>
    </ContainerFooter>
  );
};

export default Footer;
