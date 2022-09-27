import Head from 'next/head';

interface Props {
  title?: string;
  keyword?: string;
  contents?: string;
}

const HeadInfo = ({
  title = '서동부엌 - 부산공유주방',
  keyword = '부산공유주방, 부산모임공간, 부산베이킹공방, 부산공간대여, 부산파티룸, 부산장소대여, 부산대공유주방, 부산대장소대여, 부산대모임공간',
  contents = '사랑하는 사람들과 오붓한 식사시간을 가지는 부산공유주방입니다. 부산베이킹공방과 부산모임공간을 병행하고 있습니다.',
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
      <meta property='og:site_name' content='서동부엌' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={contents} />
      <meta property='og:image' content='/mainPhotos/2.JPG' />
      <meta property='og:url' content='https://gogaeseodong.vercel.app/' />
      <meta property='al:ios:url' content='applinks://docs' />
      <meta property='al:ios:app_store_id' content='12345' />
      <meta property='al:ios:app_name' content='App Links' />
      <meta property='al:android:url' content='applinks://docs' />
      <meta property='al:android:app_name' content='App Links' />
      <meta property='al:android:package' content='org.applinks' />
      <link rel='canonical' href='https://gogaeseodong.vercel.app/' />

      <meta
        property='al:web:url'
        content='http://applinks.org/documentation'
      ></meta>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default HeadInfo;
