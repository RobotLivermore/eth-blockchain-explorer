export const getBlocksByPage = async (page = 1) => {
  const offset = (page - 1) * 20;
  const data = {
    query: `select\n    number,\n    hash,\n    timestamp,\n    transactions_count,\n   parent_hash,\n    miner,\n    gas_limit,\n    base_fee_per_gas / 1000000000 as base_price\nfrom\n    ethereum.blocks\norder by\n    number DESC\nlimit\n    20\nOFFSET\n    ${offset}`,
  };

  const response = await fetch('https://api.chainbase.online/v1/dw/query', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'x-api-key': process.env.API_KEY || '',
    },
  });
  const result = await response.json();
  return result?.data?.result;
};
