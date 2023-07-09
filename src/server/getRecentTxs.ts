interface RecentTxItem {
  transaction_hash: string;
  block_timestamp: number;
  from_address: string;
  to_address: string;
  value: string;
}

export const getRecentTxs = async () => {
  const data = {
    query:
      'select transaction_hash, block_timestamp, from_address, to_address, value / 1000000000000000000 as value from ethereum.transactions\nwhere block_number in (\n    select number from ethereum.blocks order by number desc limit 1\n)\norder by transaction_index DESC\nlimit 10;',
  };

  const response = await fetch('https://api.chainbase.online/v1/dw/query', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'x-api-key': process.env.API_KEY || '',
    },
  });
  const result = await response.json();
  return result?.data?.result as RecentTxItem[];
};
