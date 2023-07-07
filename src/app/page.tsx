import Metrics from '@/components/Metrics'
import SearchBar from '@/components/SearchBar'
import Image from 'next/image'

const DATA_LIST_BLOCK_CLS = "bg-white border border-[#DEE4E9] rounded-[16px] px-6"

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* hero content */}
      <div
        className='w-full h-[544px] flex flex-col items-center pt-[68px]'
        style={{
          background: 'linear-gradient(0deg, #15141F 0%, #15141F 100%), radial-gradient(219.18% 65.26% at 0% 0%, rgba(139, 255, 255, 0.76) 0%, rgba(222, 249, 255, 0.00) 100%), linear-gradient(150deg, #C7D2F5 0%, #FEF 100%)',
        }}>
        <Image width={96} height={56} src="/assets/logo.svg" alt="logo" />
        <h1 className="text-4xl font-medium text-white mt-8">The Ethereum Blockchain Explorer</h1>
        <div className='mt-16 w-full max-w-[1024px]'>
          <SearchBar />
        </div>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <Metrics icon={<Image width={36} height={36} src="/assets/block-rounded.svg" alt="block number" />} title='CURRETNT BLOCK' value='#17624863' />
          <Metrics icon={<Image width={36} height={36} src="/assets/block-rounded.svg" alt="block number" />} title='CURRETNT BLOCK' value='' />
          <Metrics icon={<Image width={36} height={36} src="/assets/block-rounded.svg" alt="block number" />} title='CURRETNT BLOCK' value='' />
        </div>
      </div>
      {/* content */}
      <div className='grid grid-cols-5 w-full max-w-[1244px] gap-6'>
      <div className={`col-span-2 h-[100px] ${DATA_LIST_BLOCK_CLS}`}>
        1
      </div>

        <div className={`col-span-3 h-[100px] ${DATA_LIST_BLOCK_CLS}`}>
        1
        </div>

      </div>
    </div>
  )
}
