import Head from 'next/head';

interface Props {
  title?: string;
  keyword?: string;
  contents?: string;
}

const HeadInfo = ({
  title = '부산 공유주방, 공간대여, 모임공간, 커뮤니티 공간 - 고개서동',
  keyword = '부산공유주방, 금정구 공유주방, 부산모임공간, 금정구 모임공간, 부산공간대여, 금정구 공간대여, 부산베이킹공방, 금정구 베이킹공방, 부상쿠킹공방, 금정구 쿠킹공방, 부산키친공간대여, 부산키친공간, 금정구 키친공간대여, 부산파티룸, 금정구 파티룸, 부산전시공간, 금정구 전시공간',
  contents = '부산 금정구 서동에 위치한 공유주방 겸 모임공간입니다. 사랑하는 이들과 함께 음식을 해먹으며, 소소한 추억을 나누시기 바랍니다.',
}: Props) => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='keywords' content={keyword} />
      <meta name='Distribution' content='creplay' />
      <meta name='Copyright' content='creplay' />
      <meta name='robots' content='idnex,follow' />
      <meta content={contents} />
      <meta name='description' content={contents} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='공유주방 고개서동' />
      <meta property='og:image' content='/mainPhotos/2.JPG' />
      <meta property='og:url' content='https://gogaeseodong.vercel.app/' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default HeadInfo;
