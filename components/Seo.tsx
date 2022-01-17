import Head from 'next/head';

interface IProps {
  title: string;
}

export default function Seo({ title }: IProps) {
  return (
    <Head>
      {title ? <title>{title} | 고개 서동</title> : <title>고개 서동</title>}
    </Head>
  );
}
