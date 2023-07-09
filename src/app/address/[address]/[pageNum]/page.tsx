import { getTxsByAddress } from '@/server/getTxsByAddress';
import TransactionList from '@/components/TransactionList';
import HeaderBar from '@/components/HeaderBar';
import BigNumber from 'bignumber.js';

export default async function AccountDetail({
  params,
}: {
  params: { address: string; pageNum: string };
}) {
  if (Number(params.address) >= 0) {
    const result = await getTxsByAddress(
      params.address,
      Number(params.pageNum)
    );
    return (
      <div className="w-full max-w-[1244px] flex flex-col items-center justify-center px-6">
        <HeaderBar />
        <h1 className="w-full text-2xl font-semibold">Account Details</h1>
        <div></div>
        <TransactionList
          txs={result.data.map((item: any) => ({
            transaction_hash: item.transaction_hash,
            method: item.input.slice(0, 10),
            block_number: item.block_number,
            block_timestamp: item.block_timestamp,
            from_address: item.from_address,
            to_address: item.to_address,
            value: new BigNumber(item.value).div('1000000000000000000'),
            fee: new BigNumber(item.gas_price)
              .multipliedBy(item.gas_used)
              .div('100000000000000000000'),
          }))}
          title={
            <span className="text-sm">
              <span>Total Transactions:</span>
              <span className="font-medium ml-1">{result.count}</span>
            </span>
          }
          totalAmount={result.count}
          url={`/address/${params.address}`}
        />
      </div>
    );
  }
  return <div>Invalid Block Number</div>;
}
