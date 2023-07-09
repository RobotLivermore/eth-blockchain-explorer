export const getTxsByAddress = async (address: string, page = 1) => {
  const response = await fetch(
    `https://api.chainbase.online/v1/account/txs?chain_id=1&address=${address}&page=${page}&limit=20`,
    {
      headers: {
        'x-api-key': process.env.API_KEY || '',
      },
    }
  );
  const result = await response.json();

  return result;
};
