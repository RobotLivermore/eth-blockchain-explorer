import FeePrice from '@/components/DataDisplay/FeePrice';
import GasLimit from '@/components/DataDisplay/GasLimit';
import HeaderBar from '@/components/HeaderBar';
import Pagination from '@/components/Pagination';
import Image from 'next/image';

type BlockType = {
  base_price: number;
  gas_limit: string;
  hash: string;
  miner: string;
  number: string;
  parent_hash: string;
  transactions_count: string;
  timestamp: string;
};

interface BlockListViewProps {
  page?: string;
  blocks?: BlockType[];
}

export default async function BlockListView({
  page,
  blocks,
}: BlockListViewProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6">
      {/* top bar */}
      <div className="max-w-[1244px] w-full flex items-center justify-between my-8">
        <HeaderBar />
      </div>
      <h1 className="w-full max-w-[1244px] text-4xl leading-[1.2] font-semibold">
        Blocks
      </h1>
      <div className="mt-6 w-full max-w-[1244px] rounded-2xl bg-white border border-[#DEE4E9]">
        <header className="w-full h-16 flex items-center justify-between pl-6 pr-7">
          <div>
            <span>Total Blocks:</span>
            <span className="font-semibold ml-2">
              {blocks && blocks[0].number}
            </span>
          </div>
          <Pagination
            currentPage={1}
            totalPage={blocks ? Math.ceil(Number(blocks[0].number) / 20) : 1}
            baseUrl="/blocks"
          />
        </header>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-y border-[#DEE4E9] h-8 text-[#8D9198]">
              <th className="font-normal">#</th>
              <th className="font-normal">Txn</th>
              <th className="px-2 text-left font-normal">Hash</th>
              <th className="px-2 text-left font-normal">Timestamp</th>
              <th className="px-2 text-left font-normal">ParentHash</th>
              <th className="px-2 text-left font-normal">Miner</th>
              <th className="px-2 text-left font-normal">Gas Limit</th>
              <th className="px-2 text-left font-normal">Base Fee</th>
            </tr>
          </thead>
          <tbody>
            {blocks?.map((block) => (
              <tr key={block.number} className="h-14 border-b border-[#F3F7F7]">
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
                      href={`/block/${block.number}`}
                    >
                      {block.number}
                    </a>
                  </div>
                </td>
                <td className="px-2">{block.transactions_count}</td>
                <td className="px-2">
                  <div className="w-[128px] overflow-hidden text-ellipsis">
                    {block.hash}
                  </div>
                </td>
                <td className="px-2">
                  <div className="w-[180px]">{block.timestamp}</div>
                </td>
                <td className="px-2">
                  <div className="w-[128px] overflow-hidden text-ellipsis">
                    {block.parent_hash}
                  </div>
                </td>
                <td className="px-2">
                  <div className="w-[128px] overflow-hidden text-ellipsis">
                    {block.miner}
                  </div>
                </td>
                <td className="px-2">
                  <GasLimit value={block.gas_limit} />
                </td>
                <td className="px-2">
                  <FeePrice value={block.base_price} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <footer className="flex items-center justify-end h-16 pr-7">
          <Pagination
            currentPage={1}
            totalPage={blocks ? Math.ceil(Number(blocks[0].number) / 20) : 1}
            baseUrl="/blocks"
          />
        </footer>
      </div>
    </div>
  );
}
