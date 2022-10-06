const URL = 'https://api.coinpaprika.com/v1';

export const getCoins = () => {
  return fetch(`${URL}/coins`).then((res) => res.json());
};

export const getCoin = (coin) => {
  return fetch(`${URL}/coins/${coin}`).then((res) => res.json());
};

export const getCoinPrice = (coin) => {
  return fetch(`${URL}/tickers/${coin}`).then((res) => res.json());
};
