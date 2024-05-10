import { Coin, TrendingData } from "../types/CoinTypes";
import useFetch from "../hooks/useFetch";

const TRENDING_COINS_URL = "https://api.coingecko.com/api/v3/search/trending";

const TrendingCoins = () => {
  const { responseJSON, loading, error } = useFetch(TRENDING_COINS_URL);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error</p>;
  }

  const { coins } = responseJSON as TrendingData;

  return (
    <div>
      <h2>Trending Coins</h2>
      <table className="trending-coins-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Today</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin: Coin) => {
            return (
              <tr key={coin.item.coin_id}>
                <td>{coin.item.name}</td>
                <td>{coin.item.symbol}</td>
                <td>{coin.item.data.price.toFixed(2)}</td>
                <td>
                  {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}
                </td>
                <td>{coin.item.data.market_cap}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TrendingCoins;
