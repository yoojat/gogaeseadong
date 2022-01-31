import Head from 'next/head';

interface IProps {
  title: string;
}

export default function Seo({ title }: IProps) {
  return (
    <Head>
      {title ? (
        <title>{title} | 고개서동</title>
      ) : (
        <title>
          부산 공유주방, 공간대여, 모임공간, 커뮤니티 공간 - 고개서동
        </title>
      )}
    </Head>
  );
}
