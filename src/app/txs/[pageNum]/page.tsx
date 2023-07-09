import HeaderBar from '@/components/HeaderBar';
import TransactionList from '@/components/TransactionList';
import { getTxsByPage } from '@/server/getTxsByPage';

export default async function Txs({ params }: { params: { pageNum: string } }) {
  const txs = await getTxsByPage(Number(params.pageNum));
  return (
    <div className="w-full flex flex-col items-center justify-center px-6">
      {/* top bar */}
      <div className="max-w-[1244px] w-full flex items-center justify-between my-8">
        <HeaderBar />
      </div>
      <h1 className="w-full max-w-[1244px] text-4xl leading-[1.2] font-semibold">
        Transactions
      </h1>
      <TransactionList txs={txs} title="Last 500k" totalAmount={50000} />
    </div>
  );
}
