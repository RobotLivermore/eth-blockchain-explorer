interface TxItem {
  transaction_hash: string;
  method: string;
  block_number: string;
  block_timestamp: string;
  from_address: string;
  to_address: string;
  value: string;
  fee: string;
  gas_price: string;
}

export const getTxByHash = async (txHash: string) => {
  const data = {
    query: `select\n    transaction_hash,\n    Left(input, 12) method,\n    block_number,\n    block_timestamp,\n    from_address,\n    to_address,\n    value / 1000000000000000000 as value,\n    gas_price * gas_used / 1000000000000000000 as fee,\n    gas_price\nfrom\n    ethereum.transactions\nWHERE\n    transaction_hash = "${txHash}"`,
  };

  const response = await fetch('https://api.chainbase.online/v1/dw/query', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'x-api-key': process.env.API_KEY || '',
    },
  });
  const result = await response.json();
  return result?.data?.result[0] as TxItem;
};
