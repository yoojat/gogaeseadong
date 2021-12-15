import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
// import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  '/mainPhotos/1.JPG',
  '/mainPhotos/2.JPG',
  '/mainPhotos/3.JPG',
  '/mainPhotos/4.JPG',
  '/mainPhotos/5.JPG',
  '/mainPhotos/6.JPG',
  '/mainPhotos/7.JPG',
];
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
  opacity: 0;
`;

const PageContainer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  text-align: center;
  bottom: 20px;
  width: 100%;
  /* color: rgba(255, 255, 255, 1); */
  color: #444;
  opacity: 0.7;
  font-size: 14px;
  font-weight: 600;
  z-index: 998;
`;

const Page = styled.a<{ selected?: boolean }>`
  margin: 7px;
  color: ${(props) => (props.selected ? 'rgb(255,255,255,1)' : 'inherit')};
  opacity: ${(props) => (props.selected ? 1 : 'inherit')};
  cursor: pointer;
`;

const Home = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const imageContainerRefs = useRef<[HTMLDivElement | null | undefined]>([
    null,
  ]);
  useEffect(() => {
    const imgArr = Array.from(imageContainerRefs.current);
    imgArr.forEach((img, index) => {
      if (img) {
        if (selectedImageIndex === index) {
          img.style.opacity = '1';
        } else {
          img.style.opacity = '0';
        }
      }
    });
  }, [selectedImageIndex]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (selectedImageIndex === images.length - 1) {
        // 마지막 인덱스라면
        setSelectedImageIndex(0);
      } else {
        setSelectedImageIndex(selectedImageIndex + 1);
      }
    }, 3000);
    return () => clearTimeout(timerId);
  }, [selectedImageIndex]);

  return (
    <Wrapper>
      <ImageContainer>
        {images.map((image, index) => {
          return (
            <Img
              key={index}
              imgUrl={image}
              ref={(element) => {
                imageContainerRefs.current[index] = element;
              }}
            />
          );
        })}
      </ImageContainer>

      <PageContainer>
        {images.map((_, index) => (
          <Page
            selected={selectedImageIndex === index}
            onClick={() => setSelectedImageIndex(index)}
            key={index}
          >
            {index + 1}
          </Page>
        ))}
      </PageContainer>
    </Wrapper>
  );
};

export default Home;
