import Head from 'next/head';

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | 고개, 서동</title>
    </Head>
  );
}
