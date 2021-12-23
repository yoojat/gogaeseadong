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
  font-weight: 300;
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
    <DefaultContentLayout title={<TitleSrc />} photoUrl='/mainPhotos/2.JPG'>
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
                가까운 서동시장에서 장을 볼수 있어요! 다른 동네보다 물가가 싸요!
                <br />
                시장에 없는것이라면 미리 배송을 통해, 보관도 가능해요(최대 2일)
                - 단, 냉장 보관은 힘들수도 있어요!
              </p>
              <p>
                서동 주변을 한번 걸어보세요.
                <br />
                골목이 너무 좁아 놀라지 말아요.
                <br />
                90년대의 좁은골목길을 느낄 수 있어요
              </p>
            </TextContentRow>
            <TextContentRow>
              <div>
                사랑하는 사람들과 직접 요리를 해 먹을 수 있어요!!
                <br />
                오븐과 믹싱기도 함께 있어, 빵과 쿠키를 직접 만들어 드실 수
                있어요!
              </div>
              <div>
                직접 만든 음식들과 함께 테이블에 앉아
                <br />
                와인 한잔 마셔 보는것도 좋을것 같아요!
              </div>
            </TextContentRow>
          </TextContentCol>
          <TextContentCol>
            <TextContentRow>
              <p>비치도구 / 조리도구</p>
              <p>
                기본 - 3구 인덕션, 전자렌지, 후라이팬(大,小), 냄비(大,小), 집게,
                가위, 국자, 주걱, 뒤집개, 감자칼, 채반, 칼, 도마, 스패출러,
                조리용 젓가락, 와인잔, 와인오프너
              </p>
              <p>
                베이킹 - 스메그 오븐(ALFA43K), 스메그 반죽기, 핸드믹서,
                전자저울, 오븐 온도계, 타이머, 각종 계량도구 베이킹 팬(원형/사각
                케잌팬(1,2호), 머핀팬 휘난시에 팬, 마들랜 팬), 베이킹 틀(타르트
                틀, 쉬폰틀, 식빵틀, 파운드틀), 무스링, 쿠키틀, 케이크 돌림판,
                베이킹 트레이, 깍지팁, 거품기, 앙금헤라, 스크래퍼, 실리콘붓,
                밀대, 제스터기, 각봉 등
              </p>
              <p>기본양념 소금, 설탕, 후추, 간장, 식용유, 첨기름, 식초</p>
              <p>제공 소모품 롤유산지, 짤주머니</p>
              <p>
                생일 초, 접착 포장 비닐(3종, 마카롱, 쿠키, 빵),
                케익상자(받침포함, 1호), 마카롱박스, 펄프사각용기
              </p>

              <TextContentRow>
                <p>
                  그리고 보드게임이 있어요. 함께 게임해봐요
                  <br />
                  울창한 식물들과 어울려 사진을 찍어보아도 좋을것 같아요!
                  <br />
                  감성적인 음악과 함께 와인 한잔 마시는 분위기를 연출해보세요!
                </p>
              </TextContentRow>
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
