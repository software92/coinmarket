import { Link } from 'react-router-dom';
import styled from 'styled-components';

const coins = [
  {
    id: 'btc-bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'eth-ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    rank: 2,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'usdt-tether',
    name: 'Tether',
    symbol: 'USDT',
    rank: 3,
    is_new: false,
    is_active: true,
    type: 'token',
  },
];

const Container = styled.div`
  margin: 5px 10px;
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
// const NavBtn = styled.span`
//   font-size: 15px;
// `;
const MainContainer = styled.div``;
const CoinList = styled.ul``;
const Coin = styled.li`
  background-color: ${(props) => props.theme.textColor};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  font-weight: bold;
  a {
    display: block;
  }
`;

const Coins = () => {
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
        {/* <NavBtn>
          <Link to={'/'}>To list</Link>
        </NavBtn> */}
      </Header>
      <MainContainer>
        <CoinList>
          {coins.map((coin, index) => (
            <Coin key={index}>
              <Link to={`/${coin.id}`}>
                {coin.name.toUpperCase()} / {coin.id}
              </Link>
            </Coin>
          ))}
        </CoinList>
      </MainContainer>
    </Container>
  );
};

export default Coins;
