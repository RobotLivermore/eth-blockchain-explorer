export const getRecentBlocks = async () => {
  const data = {
    query:
      'WITH\n    latest_blocks as (\n        select\n            number,\n            miner,\n            base_fee_per_gas / 1000000000000000000 * gas_used as base_fee\n        from\n            ethereum.blocks\n        order by\n            number desc\n        limit\n            10\n    ),\n    block_fees as (\n        SELECT\n            block_number,\n            sum(gas_used * gas_price / 1000000000000000000) as fee\n        from\n            ethereum.transactions\n        where\n            block_number in (SELECT number from latest_blocks)\n        group by\n            block_number\n    )\nSELECT\n    number,\n    miner,\n    base_fee,\n    fee, \n    fee - base_fee as block_reward\nfrom\n    latest_blocks\n    left JOIN block_fees on latest_blocks.number = block_fees.block_number\n',
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
