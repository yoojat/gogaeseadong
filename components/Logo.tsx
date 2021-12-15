import Navbar from './Navbar';
import styled from 'styled-components';
import Image from 'next/image';
import useScroll from '../hooks/useScroll';
import Link from 'next/link';

const LogoContainer = styled.div<{ scrollY: number; innerWidth: number }>`
  background-color: ${(props) =>
    props.scrollY > 10 && props.innerWidth < 993 ? '#fff' : 'inherit'};
  position: fixed;
  width: 100%;
  @media screen and (min-width: 992px) {
    width: auto;
    position: relative;
    background-color: inherit;
  }
  /* display: none; */
`;
const ImageConainer = styled.div`
  width: 98px;

  // 데스크탑 큰화면
  @media screen and (min-width: 992px) {
     {
      width: 164px;
      margin-left: 15px;
    }

    margin-top: 0;
    & li {
      border: none;
    }
  }
  margin-left: auto;
  margin-right: auto;
`;

const Logo = () => {
  const { scrollY, innerWidth } = useScroll();

  return (
    <LogoContainer scrollY={scrollY} innerWidth={innerWidth}>
      <Link href='/'>
        <a>
          <ImageConainer>
            <Image
              src={
                innerWidth >= 993
                  ? '/logo_white.png'
                  : scrollY > 0
                  ? '/logo_black.png'
                  : '/logo_white.png'
              }
              alt='logo'
              layout='responsive'
              objectFit='contain'
              width={98}
              height={80}
            />
          </ImageConainer>
        </a>
      </Link>
    </LogoContainer>
  );
};

export default Logo;