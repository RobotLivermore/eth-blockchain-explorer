import FeePrice from '@/components/DataDisplay/FeePrice';
import GasLimit from '@/components/DataDisplay/GasLimit';
import Pagination from '@/components/Pagination';
import Image from 'next/image';

interface TxItem {
  transaction_hash: string;
  method: string;
  block_number: string;
  block_timestamp: string;
  from_address: string;
  to_address: string;
  value: string;
  fee: string;
}

interface TransactionListProps {
  title: React.ReactNode;
  txs: TxItem[];
  totalAmount: number;
  url?: string;
}

export default function TransactionList({
  txs,
  title,
  totalAmount,
  url,
}: TransactionListProps) {
  return (
    <div className="mt-6 w-full max-w-[1244px] rounded-2xl bg-white border border-[#DEE4E9]">
      <header className="w-full h-16 flex items-center justify-between pl-6 pr-7">
        <div>{title}</div>
        <Pagination
          currentPage={1}
          totalPage={txs ? Math.ceil(totalAmount / 20) : 1}
          baseUrl={url || '/txs'}
        />
      </header>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-y border-[#DEE4E9] h-8 text-[#8D9198]">
            <th className="font-normal">Hash</th>
            <th className="font-normal">Method</th>
            <th className="px-2 text-left font-normal">Block</th>
            <th className="px-2 text-left font-normal">Timestamp</th>
            <th className="px-2 text-left font-normal">From</th>
            <th className="px-2 text-left font-normal">To</th>
            <th className="px-2 text-left font-normal">Value</th>
            <th className="px-2 text-left font-normal">Tx Fee</th>
          </tr>
        </thead>
        <tbody>
          {txs?.map((tx) => (
            <tr
              key={tx.transaction_hash}
              className="h-14 border-b border-[#F3F7F7]"
            >
              <td className=" px-2">
                <div className="flex items-center">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/icons/block-rect.svg"
                    className="mr-2"
                    alt="block"
                  />
                  <a
                    className="text-[#046CB9]"
                    href={`/tx/${tx.transaction_hash}`}
                  >
                    <div className="w-full max-w-[128px] overflow-hidden text-ellipsis">
                      {tx.transaction_hash}
                    </div>
                  </a>
                </div>
              </td>
              <td className="px-2">{tx.method}</td>
              <td className="px-2">
                <a
                  href={`/block/${tx.block_number}`}
                  className="text-[#046CB9]"
                >
                  #{tx.block_number}
                </a>
              </td>
              <td className="px-2">{tx.block_timestamp}</td>
              <td className="px-2">
                <a
                  href={`/address/${tx.from_address}`}
                  className="text-[#046CB9]"
                >
                  <div className="w-[128px] overflow-hidden text-ellipsis">
                    {tx.from_address}
                  </div>
                </a>
              </td>
              <td className="px-2">
                <a
                  href={`/address/${tx.from_address}`}
                  className="text-[#046CB9]"
                >
                  <div className="w-[128px] overflow-hidden text-ellipsis">
                    {tx.to_address}
                  </div>
                </a>
              </td>
              <td className="px-2">
                <GasLimit value={tx.value} />
              </td>
              <td className="px-6">{Number(tx.fee).toFixed(9)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="flex items-center justify-end h-16 pr-7">
        <Pagination
          currentPage={1}
          totalPage={txs ? Math.ceil(totalAmount / 20) : 1}
          baseUrl="/blocks"
        />
      </footer>
    </div>
  );
}
