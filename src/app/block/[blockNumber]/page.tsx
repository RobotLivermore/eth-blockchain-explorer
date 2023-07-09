import { getTxsByBlock } from '@/server/getTxsByBlock';
import TransactionList from '@/components/TransactionList';
import HeaderBar from '@/components/HeaderBar';
import BlockInfo from '@/components/BlockInfo';

export default async function BlockDetail({
  params,
}: {
  params: { blockNumber: string };
}) {
  if (Number(params.blockNumber) >= 0) {
    const txs = await getTxsByBlock(Number(params.blockNumber), 1);
    return (
      <div className="w-full max-w-[1244px] flex flex-col items-center justify-center px-6">
        <HeaderBar />
        <h1 className="w-full text-2xl font-semibold">
          Block#<span className="text-[#046CB9]">{params.blockNumber}</span>
        </h1>
        <div className="w-full mt-6">
          <BlockInfo blockNumber={Number(params.blockNumber)} />
        </div>
        <TransactionList
          txs={txs}
          title={
            <span className="text-sm">
              <span>Total Transactions:</span>
              <span className="font-medium ml-1">{txs[0].count}</span>
            </span>
          }
          totalAmount={txs[0].count}
        />
      </div>
    );
  }
  return <div>Invalid Block Number</div>;
}
