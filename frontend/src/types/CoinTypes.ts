export type Coin = {
  item: {
    coin_id: number;
    name: string;
    symbol: string;
    data: {
      price: number;
      price_change_percentage_24h: {
        usd: number;
      };
      market_cap: string;
    };
  };
};

export type TrendingData = {
  categories: [];
  coins: Coin[];
  nfts: [];
};
