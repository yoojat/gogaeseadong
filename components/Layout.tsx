import { NextComponentType } from 'next';
import Head from 'next/head';
import Footer from './Footer';
import HeadInfo from './HeadInfo';
import Navbar from './Navbar';

const Layout: NextComponentType = ({ children }) => (
  <>
    <HeadInfo />
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
