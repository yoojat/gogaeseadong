import { NextComponentType } from 'next';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Navbar: NextComponentType = () => (
  <nav className={navStyles.nav}>
    <ul>
      <li>
        <Link href='/'>프롤로그</Link>
      </li>
      <li>
        <Link href='/photos'>가격</Link>
      </li>
      <li>즐길거리</li>
      <li>예약안내</li>
      <li>만든이</li>
    </ul>
  </nav>
);

export default Navbar;
