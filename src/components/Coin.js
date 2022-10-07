import { useQuery } from 'react-query';
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';
import { getCoin, getCoinPrice } from '../api';
import Chart from './Chart';
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
`;
const MainContainer = styled.div``;
const Block = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.textColor};
  padding: 15px;
  border-radius: 10px;
`;
const BlockItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    margin-bottom: 5px;
    text-transform: uppercase;
  }
`;
const Description = styled.p`
  margin-bottom: 30px;
  padding: 0 5px;7
`;
const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const Tab = styled.div`
  background-color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  width: 45%;
  height: 35px;
  border-radius: 10px;
  text-transform: uppercase;
  transition: 0.1s ease-in-out;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
    cursor: pointer;
  }
`;

const Coin = () => {
  const { coinId } = useParams();
  const priceMatch = useRouteMatch('/:coinId/price');
  const chartMatch = useRouteMatch('/:coinId/chart');

  const { isLoading: coinLoading, data: coin } = useQuery(
    ['coin', coinId],
    () => getCoin(coinId)
  );
  const { isLoading: coinPriceLoading, data: coinPrice } = useQuery(
    ['price', coinId],
    () => getCoinPrice(coinId),
    {
      refetchInterval: 86400,
    }
  );

  return (
    <Container>
      <Helmet>
        <title>Coin market: {coinId.toUpperCase()}</title>
      </Helmet>
      <Header>
        <Title>{coinId.toUpperCase()}</Title>
      </Header>
      {coinLoading && coinPriceLoading ? (
        <Loader />
      ) : (
        <MainContainer>
          <Block>
            <BlockItem>
              <span>Rank:</span>
              <span>{coin?.rank}</span>
            </BlockItem>
            <BlockItem>
              <span>Symbol:</span>
              <span>{coin?.symbol}</span>
            </BlockItem>
            <BlockItem>
              <span>Price:</span>
              <span>{coinPrice?.quotes.USD.price}</span>
            </BlockItem>
          </Block>
          <Description>{coin?.description}</Description>
          <Block>
            <BlockItem>
              <span>Total Supply:</span>
              <span>{coinPrice?.total_supply}</span>
            </BlockItem>
            <BlockItem>
              <span>Max Supply:</span>
              <span>{coinPrice?.max_supply}</span>
            </BlockItem>
          </Block>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>price</Link>
            </Tab>
          </Tabs>
          <Switch>
            <Route path={'/:coinId/price'}>
              <p>Price</p>
            </Route>
            <Route path={'/:coinId/chart'}>
              <Chart coinId={coinId} />
            </Route>
          </Switch>
        </MainContainer>
      )}
    </Container>
  );
};

export default Coin;
