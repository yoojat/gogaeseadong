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
        <title>고개서동 - 부산 공유주방</title>
      )}
    </Head>
  );
}
