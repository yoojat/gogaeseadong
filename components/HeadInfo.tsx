import Head from 'next/head';

interface Props {
  title?: string;
  keyword?: string;
  contents?: string;
}

const HeadInfo = ({
  title = '고개, 서동',
  keyword = '공유공간,  모임공간, 파티, 쿠킹클래스, 이벤트, 커플, 가족',
  contents = '공간을 업사이클링하다',
}: Props) => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <title>{title}</title>
      <meta name='keywords' content={keyword} />
      <meta name='Distribution' content='creplay' />
      <meta name='Copyright' content='creplay' />
      <meta name='robots' content='idnex,follow' />
      <meta content={contents} />
      <meta name='description' content={contents} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='고개, 서동' />
      <meta property='og:image' content='/logo_black.png' />
      <meta
        property='og:url'
        content='https://https://gogaeseodong.vercel.app/'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default HeadInfo;
