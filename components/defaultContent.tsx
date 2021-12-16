import styled from 'styled-components';

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
  top: 35vh;
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
  line-height: 30px;
  text-align: right;
  p {
    padding: 10px;
  }
`;

const ChildrenWrapper = styled.div``;

interface IDefaultContentProps {
  photoUrl: string;
  title: string;
  children: React.ReactNode;
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
      <Title
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />
    </Wrapper>
    <ChildrenWrapper>{children}</ChildrenWrapper>
  </>
);

export default DefaultContentLayout;
