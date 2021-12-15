import { NextComponentType } from 'next';

const Footer: NextComponentType = () => {
  return (
    <footer>
      <div
        style={{ paddingLeft: '15px' }}
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        <p style={{ fontSize: '14px' }}>
          부산광역시 금정구 서동로 91번길 7<span style={{ lineHeight: 2 }} />
        </p>
        <p style={{ fontSize: '14px' }}>
          <span style={{ lineHeight: 2 }}>로고</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
