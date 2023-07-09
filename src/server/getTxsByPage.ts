export const getTxsByPage = async (page = 1) => {
  const offset = (page - 1) * 20;
  const data = {
    query: `select\n    transaction_hash,\n    Left(input, 10) method,\n    block_number,\n    block_timestamp,\n    from_address,\n    to_address,\n    value / 1000000000000000000 as value,\n    gas_price * gas_used / 1000000000000000000 as fee\nfrom\n    ethereum.transactions\norder by\n    transaction_hash\nlimit\n    20\nOFFSET ${offset};`,
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
