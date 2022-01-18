import styled from 'styled-components';
import DefaultContentLayout from '../components/defaultContent';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { useState } from 'react';
import useScroll from '../hooks/useScroll';
import Divider from '../components/Divider';

const ContentContainer = styled.div`
  max-width: 1280px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentItem = styled.div`
  text-align: center;
`;

const TextContainer = styled.div`
  margin-top: 10px;
  max-width: 1280px;
  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Space = styled.div`
  width: 100%;
  height: 100px;
`;

const PhotoSection = styled.div`
  display: flex;
  justify-content: right;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  width: 80%;
  min-width: 600px;
  @media screen and (max-width: 992px) {
    width: 100%;
    min-width: inherit;
  }
  max-width: 1100px;
  margin-bottom: 30px;
`;

const PhotoItem = styled.div<{ photoUrl: string; innerWidth: number }>`
  background-image: url(${(props) => props.photoUrl});
  width: 30%;
  height: 240px;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: ${(props) => (props.innerWidth * 6) / 10}px;
  }
  background-size: cover;
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 992px) {
    cursor: inherit;
    &:hover {
      opacity: inherit;
    }
  }
`;
const TextContentCol = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 600px;
  @media screen and (max-width: 992px) {
    max-width: inherit;
  }
`;

const TextContentRow = styled.div`
  /* background-color: #e27a68; */
  border: 2px solid white;
  border-top: 1px solid black;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 100px;
  line-height: 25px;
`;

// 992px

const images = [
  '/mainPhotos/1.JPG',
  '/mainPhotos/2.JPG',
  '/mainPhotos/3.JPG',
  '/mainPhotos/4.JPG',
  '/mainPhotos/5.JPG',
  '/mainPhotos/6.JPG',
];

const Yoohee = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isPhotoPopUp, setIsPhotoPopUp] = useState(false);
  const { innerWidth } = useScroll();
  const TitleSrc = () => (
    <div>
      사랑하는 사람들과
      <br />
      이야기를 만들어가는 공간
    </div>
  );

  return (
    <DefaultContentLayout
      title={<TitleSrc />}
      photoUrl='/mainPhotos/2.JPG'
      seoTitle='즐길거리'
    >
      <ContentContainer>
        <Space />
        <Divider />
        <ContentItem>공간도 이미지</ContentItem>
        <Divider />
        <Space />
        <ContentItem>
          <PhotoSection>
            <PhotoContainer>
              {images.map((image, index) => (
                <PhotoItem
                  key={index}
                  photoUrl={image}
                  innerWidth={innerWidth}
                  onClick={() => {
                    if (innerWidth > 992) {
                      setIsPhotoPopUp(true);
                      setPhotoIndex(index);
                    }
                  }}
                />
              ))}
            </PhotoContainer>
          </PhotoSection>
        </ContentItem>

        <TextContainer>
          <TextContentCol>
            <TextContentRow>
              <p>
                가까운 서동시장에서 장을 볼수 있어요! 다른 동네보다 신선하고
                저렴해요!
              </p>
              <p>
                시장에 없는것이라면 미리 배송을 통해, 보관도 가능해요(최대 2일)
                - 단, 냉장 보관은 힘들수도 있어요!
              </p>
              <p>서동 주변을 한번 걸어봐요.</p>
              <p>골목이 너무 좁아 놀라지 말아요.</p>
              <p>90년대의 좁은 골목길을 느낄 수 있어요.</p>
            </TextContentRow>
            <TextContentRow>
              <p>블루투스 스피커를 켜놓은채, 우리만의 시간을 가져보아요!</p>
              <p>사랑하는 사람들과 직접 요리를 만들어 먹을 수 있어요!</p>
              <p>빵과 쿠키를 직접 구울 수 있어요!</p>
              <div>테이블에 놓인 음식들과 함께, 좋은시간 보내요!</div>
              <p>식사 후, 보드게임을 즐겨봐요!</p>
              <p>울창한 식물들과 어울려 사진을 찍어보는 것도 좋을것 같아요!</p>
            </TextContentRow>
          </TextContentCol>
          <TextContentCol>
            <TextContentRow>
              <p>비치도구 / 조리도구</p>
              <p>
                기본 - 3구 인덕션, 전자렌지, 후라이팬(大,小), 냄비(大,小), 집게,
                가위, 국자, 주걱, 뒤집개, 감자칼, 채반, 칼, 도마, 스패출러,
                조리용 젓가락, 와인잔, 와인오프너, 전기커피포트
                <br />
                <br />
              </p>
              <p>
                베이킹 - 우녹스 오븐(베이커룩스 샵프로), 스파 반죽기(sp-800),
                핸드믹서, 전자저울, 그램저울, 자석타이머, 실리콘 주걱, 베이킹
                온도계, 각종 계량도구, 베이킹 팬(원형케잌팬 1,2,3호, 머핀팬,
                마들랜 팬, 타르트 틀, 쿠키 틀), 원형 무스링 2호, 베이킹 트레이,
                깍지팁, 전동 휘핑기, 앙금헤라, 스크래퍼, 각봉, 스파튤라 소형,
                스파튤라 대형, 케잌 돌림판 등
                <br />
                <br />
              </p>
              <p>
                기본양념 - 소금, 설탕, 후추, 간장, 식용유, 참기름, 식초
                <br />
                <br />
              </p>
              <p>
                제공 소모품 - 롤유산지, 짤주머니
                <br />
                <br />
              </p>
              <p>
                * 기타 소모품은 별도 준비하셔야 합니다.(추후 판매예정)
                <br />
                (생일초, 접착포장비닐, 케익상자 등)
              </p>
            </TextContentRow>
          </TextContentCol>
        </TextContainer>
        <TextContainer></TextContainer>
      </ContentContainer>
      {isPhotoPopUp && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsPhotoPopUp(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </DefaultContentLayout>
  );
};

export default Yoohee;
