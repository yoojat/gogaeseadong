import { NextComponentType } from 'next';
import Head from 'next/head';
import Footer from './Footer';
import HeadInfo from './HeadInfo';
import Navbar from './Navbar';
import TopBar from './TopBar';

const Layout: NextComponentType = ({ children }) => (
  <>
    <HeadInfo />
    <TopBar />
    {children}
    <Footer />
  </>
);

export default Layout;
