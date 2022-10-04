import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

const Coin = () => {
  const { coinId } = useParams();
  const props = useLocation();

  console.log(props);
  return (
    <Container>
      <h1>Coin: {coinId}</h1>
    </Container>
  );
};

export default Coin;
