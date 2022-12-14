import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getCoins } from '../api';
import Loader from './Loader';
import Helmet from 'react-helmet';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 5px 10px;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  //   margin-right: 40px;
`;
const MainContainer = styled.div``;
const CoinList = styled.ul``;
const Coin = styled.li`
  background-color: ${(props) => props.theme.textColor};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  a {
    display: flex;
    align-items: center;
  }
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const Coins = () => {
  const { isLoading, data } = useQuery('coins', getCoins);

  return (
    <Container>
      <Helmet>
        <title>Coin market</title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
      </Header>
      <MainContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <CoinList>
            {data.slice(0, 50)?.map((coin, index) => (
              <Coin key={index}>
                <Link
                  to={{
                    pathname: `/${coin.id}`,
                  }}
                >
                  <Img
                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLocaleLowerCase()}`}
                    alt='Coin icon'
                  />
                  {coin.name.toUpperCase()} / {coin.id.toUpperCase()}
                </Link>
              </Coin>
            ))}
          </CoinList>
        )}
      </MainContainer>
    </Container>
  );
};

export default Coins;
