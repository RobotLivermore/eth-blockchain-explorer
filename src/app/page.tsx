import Metrics from '@/components/Metrics';
import SearchBar from '@/components/SearchBar';
import { getRecentBlocks } from '@/server/getRecentBlocks';
import { getRecentTxs } from '@/server/getRecentTxs';
import Image from 'next/image';

const DATA_LIST_BLOCK_CLS =
  'bg-white border border-[#DEE4E9] rounded-[16px] px-6';

export default async function Home() {
  const blocks = await getRecentBlocks();
  const txs = await getRecentTxs();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* hero content */}
      <div
        className="w-full h-[544px] flex flex-col items-center pt-[68px]"
        style={{
          background:
            'linear-gradient(0deg, #15141F 0%, #15141F 100%), radial-gradient(219.18% 65.26% at 0% 0%, rgba(139, 255, 255, 0.76) 0%, rgba(222, 249, 255, 0.00) 100%), linear-gradient(150deg, #C7D2F5 0%, #FEF 100%)',
        }}
      >
        <Image width={96} height={56} src="/assets/logo.svg" alt="logo" />
        <h1 className="text-4xl font-medium text-white mt-8">
          The Ethereum Blockchain Explorer
        </h1>
        <div className="mt-16 w-full max-w-[1024px]">
          <SearchBar />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <Metrics
            icon={
              <Image
                width={36}
                height={36}
                src="/assets/block-rounded.svg"
                alt="block number"
              />
            }
            title="CURRETNT BLOCK"
            value={`#${blocks[0].number}`}
          />
          <Metrics
            icon={
              <Image
                width={36}
                height={36}
                src="/assets/eth-price-rounded.svg"
                alt="block number"
              />
            }
            title="ETH PRICE"
            value="$1941.42"
          />
          <Metrics
            icon={
              <Image
                width={36}
                height={36}
                src="/assets/gas-price-rounded.svg"
                alt="block number"
              />
            }
            title="GAS PRICE"
            value="42.46 Gwei"
          />
        </div>
      </div>
      {/* content */}
      <div className="grid grid-cols-5 w-full max-w-[1268px] gap-6 mt-12">
        {/* blocks */}
        <div
          className={`col-span-2 ${DATA_LIST_BLOCK_CLS} px-6 flex flex-col items-center`}
        >
          <div className="w-full flex items-center justify-between py-[18px]">
            <span className="font-semibold text-sm">Latest Blocks</span>
            <a
              href="/blocks"
              className="flex items-center h-7 rounded-full border border-[#DEE4E9] px-3 cursor-pointer"
            >
              <span>All</span>
              <Image
                className="ml-1"
                width={11}
                height={8}
                src="/assets/icons/right-arrow.svg"
                alt=""
              />
            </a>
          </div>
          <table className="w-full overflow-hidden border-collapse">
            <thead>
              <tr className="h-12 border-y border-[#DEE4E9]">
                <th className="font-normal text-[#8D9198]">#</th>
                <th className="font-normal text-[#8D9198]">Miner</th>
                <th className="font-normal text-[#8D9198]">Reward</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DEE4E9]">
              {blocks.map((item: any) => (
                <tr key={item.number} className="h-[80px] py-[1px] ">
                  <td>
                    <div className="flex items-center">
                      <Image
                        width={39}
                        height={39}
                        src="/assets/icons/block-rect.svg"
                        alt=""
                      />
                      <a
                        className="text-[#046CB9] ml-2"
                        href={`/block/${item.number}`}
                      >
                        {item.number}
                      </a>
                    </div>
                  </td>
                  <td className="px-2">
                    <a
                      className="text-[#046CB9]"
                      href={`/address/${item.miner}`}
                    >
                      <div className="w-full max-w-[160px] overflow-hidden text-ellipsis">
                        {item.miner}
                      </div>
                    </a>
                  </td>
                  <td>
                    <div className="flex justify-center items-center px-3 h-10 bg-[#F3F7F7] rounded-md">
                      {`${Number(item.block_reward).toFixed(5)} ETH`}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* txs */}
        <div className={`col-span-3 ${DATA_LIST_BLOCK_CLS}`}>
          <div className="w-full flex items-center justify-between py-[18px]">
            <span className="font-semibold text-sm">Latest Transactions</span>
            <a
              href="/txs"
              className="flex items-center h-7 rounded-full border border-[#DEE4E9] px-3 cursor-pointer"
            >
              <span>All</span>
              <Image
                className="ml-1"
                width={11}
                height={8}
                src="/assets/icons/right-arrow.svg"
                alt=""
              />
            </a>
          </div>
          <table className="w-full overflow-hidden border-collapse">
            <thead>
              <tr className="h-12 border-y border-[#DEE4E9]">
                <th className="font-normal text-[#8D9198]">Hash</th>
                <th className="font-normal text-[#8D9198]">From</th>
                <th className="font-normal text-[#8D9198]">To</th>
                <th className="font-normal text-[#8D9198]">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DEE4E9]">
              {txs.map((item) => (
                <tr key={item.transaction_hash} className="h-[80px] py-[1px] ">
                  <td>
                    <div className="flex items-center">
                      <Image
                        width={39}
                        height={39}
                        src="/assets/icons/tx-rect.svg"
                        alt=""
                      />
                      <a
                        className="text-[#046CB9] ml-2"
                        href={`/tx/${item.transaction_hash}`}
                      >
                        <div className="w-full max-w-[128px] overflow-hidden text-ellipsis">
                          {item.transaction_hash}
                        </div>
                      </a>
                    </div>
                  </td>
                  <td className="px-2">
                    <a
                      className="text-[#046CB9]"
                      href={`/address/${item.from_address}`}
                    >
                      <div className="w-full max-w-[100px] line-clamp-2 break-words">
                        {item.from_address}
                      </div>
                    </a>
                  </td>
                  <td className="px-2">
                    <a
                      className="text-[#046CB9]"
                      href={`/address/${item.to_address}`}
                    >
                      <div className="w-full max-w-[100px] line-clamp-2 break-words">
                        {item.from_address}
                      </div>
                    </a>
                  </td>
                  <td>
                    <div className="flex justify-center items-center px-3 h-10 bg-[#F3F7F7] rounded-md">
                      {`${Number(item.value).toFixed(5)} ETH`}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
