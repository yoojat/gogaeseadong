import { NextComponentType } from 'next';

const Footer: NextComponentType = () => {
  return (
    <footer>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        부산광역시 금정구 서동로 91번길 7 Powered by
        <span>로고</span>
      </a>
    </footer>
  );
};

export default Footer;
