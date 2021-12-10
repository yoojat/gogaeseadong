import { NextComponentType } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

const NavContainer = styled.nav`
  margin-top: 86px;
  font-weight: 400;
  & ul {
    display: flex;
  }

  & li {
    color: #fff;
    border: 1px solid #fff;
    flex: 1;
    text-align: center;
    font-size: 13px;
    &:first-child {
      border-left: 0;
    }
    &:last-child {
      border-right: 0;
    }
    & div {
      transition: color 0.5s;
      &:hover {
        color: #444;
      }
    }
  }

  @media screen and (max-width: 768px) {
    // 모바일
    & div {
      padding: 13px;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 991px) {
    // 데스크탑
    & div {
      padding: 11px;
    }
  }

  // 데스크탑 큰화면
  @media screen and (min-width: 992px) {
    & div {
      padding: 11px;
    }

    & li {
      border: none;
      font-size: 14px;
      font-family: montserrat, Kakao, sans-serif;
    }
    margin-top: inherit;
    width: 36%;
    padding-top: 50px;
    margin-right: 40px;
    max-width: 400px;
  }
`;

const Navbar: NextComponentType = () => (
  <NavContainer>
    <ul>
      <li>
        <Link href='/'>
          <a>
            <div>프롤로그</div>
          </a>
        </Link>
      </li>
      <li>
        <Link href='/photos'>
          <a>
            <div>공간도</div>
          </a>
        </Link>
      </li>
      <li>
        <Link href='/photos'>
          <a>
            <div>즐길거리</div>
          </a>
        </Link>
      </li>
      <li>
        <Link href='/photos'>
          <a>
            <div>예약안내</div>
          </a>
        </Link>
      </li>
      <li>
        <Link href='/photos'>
          <a>
            <div>만든이</div>
          </a>
        </Link>
      </li>
    </ul>
  </NavContainer>
);

export default Navbar;
