import Head from 'next/head';

interface IProps {
  title: string;
}

export default function Seo({ title }: IProps) {
  return (
    <Head>
      {title ? (
        <title>{title} | 서동부엌</title>
      ) : (
        <title>서동부엌 - 부산 공유주방</title>
      )}
    </Head>
  );
}
