import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 900px;
  font-weight: 600;

  transition: background-image 3s;
  @media screen and (min-width: 766px) {
    height: 90vh;
  }
`;

const ImageContainer = styled.div``;

const Img = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 100vh;
  max-height: 900px;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  transition: opacity 2s;
  position: absolute;
  @media screen and (min-width: 766px) {
    height: 90vh;
  }
`;

const Title = styled.div`
  z-index: 998;
  position: absolute;
  top: 200px;
  font-size: 13px;
  word-spacing: 3px;
  right: 2%;
  line-height: 20px;

  @media screen and (min-width: 992px) {
    right: 7%;
    font-size: 15px;
    word-spacing: 3px;
    letter-spacing: 4px;
    line-height: 30px;
  }

  color: rgb(255, 255, 255);
  text-align: right;
  p {
    padding: 10px;
  }
`;

const ChildrenWrapper = styled.div`
  font-weight: 600;
`;

interface IDefaultContentProps {
  photoUrl: string;
  title?: JSX.Element;
  children?: React.ReactNode;
}

const DefaultContentLayout = ({
  photoUrl,
  title,
  children,
}: IDefaultContentProps) => (
  <>
    <Wrapper>
      <ImageContainer>
        <Img imgUrl={photoUrl} />
      </ImageContainer>
      <Title>{title}</Title>
    </Wrapper>
    <ChildrenWrapper>{children}</ChildrenWrapper>
  </>
);

export default DefaultContentLayout;
