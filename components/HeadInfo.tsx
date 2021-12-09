import Head from 'next/head';

interface Props {
  title?: string;
  keyword?: string;
  contents?: string;
}

const HeadInfo = ({
  title = '고개서동',
  keyword = '공유공간',
  contents = '공간을 업사이클링하다',
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='keywords' content={keyword} />
      <meta content={contents} />
      <meta name='description' content={contents} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default HeadInfo;
