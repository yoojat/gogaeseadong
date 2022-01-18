import styled from 'styled-components';
import DefaultContentLayout from '../components/defaultContent';
import DefaultContent from '../components/defaultContent';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  transition: background-image 3s;
`;

const ImageContainer = styled.div``;

const Img = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  transition: opacity 2s;
  position: absolute;
`;

const Title = styled.div`
  z-index: 998;
  position: absolute;
  top: 33vh;
  font-size: 13px;
  word-spacing: 5px;
  right: 2%;

  @media screen and (min-width: 992px) {
    right: 7%;
    top: 35vh;
    font-size: 15px;
    word-spacing: 3px;
  }

  color: white;
  letter-spacing: 4px;
  line-height: 20px;
  text-align: right;
  p {
    padding: 10px;
  }
`;

const Prologue = () => {
  const TitleSrc = () => (
    <>
      <p>
        이 거리의 등불이 되어주세요.
        <br />
      </p>
      <p>
        아무도 지나치지 않는 이 거리.
        <br />
        켜진 등불이 어색한 동네가 되어가고 있습니다.
      </p>
      <p>
        빈집들과 고양이들
        <br />
        좁은 골목길을 지나면
        <br />
        빨간 대문을 만날 수 있습니다.
      </p>
      <p>
        온가족들과 이웃사촌이 한데모여,
        <br />
        울고 웃고 떠들며, 시끌벅쩍했던 이 자리가 그리웠습니다.
      </p>
      <p>
        이제는 아무도 찾지 않는 버려진 공간이지만,
        <br />
        이곳에서의 오붓한 시간들이 추억으로 이어지길
        <br />
        진심으로 바라는 마음으로 만들어 보았습니다.
      </p>
      <p>
        당신의 잊혀진 향수를 자극하며,
        <br />
        현재를 나누며,
        <br />
        추억되기를 바랍니다.
      </p>
    </>
  );
  return (
    <DefaultContentLayout
      title={<TitleSrc />}
      photoUrl='/mainPhotos/1.JPG'
      seoTitle='프롤로그'
    ></DefaultContentLayout>
  );
};

export default Prologue;
