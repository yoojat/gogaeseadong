import Image from 'next/image';
import styled from 'styled-components';

const ImageContainer = styled.div`
  background-image: url('/temp.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  return <ImageContainer></ImageContainer>;
};

export default Home;
