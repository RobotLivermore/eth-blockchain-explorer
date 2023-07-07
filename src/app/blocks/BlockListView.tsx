import HeaderSearchBar from '@/components/SearchBar/HeaderSearchBar'
import Image from 'next/image'

interface BlockListViewProps {
  page?: string
}

export default function BlockListView({ page }: BlockListViewProps) {
  console.log(page)
  return (
    <div className="w-full flex flex-col items-center justify-center px-6">
      {/* top bar */}
      <div className='max-w-[1024px] w-full flex items-center justify-between my-8'>
        <button className="flex items-center h-8 border border-[#DEE4E9] rounded-full px-4 text-sm">
          <Image className='mr-2' width={16} height={16} src="/assets/icons/home.svg" alt="" />
          Home
        </button>
        <HeaderSearchBar />
      </div>
      <h1 className='w-full max-w-[1024px] text-4xl leading-[1.2] font-bold'>Blocks</h1>
      <div className='mt-6 w-full max-w-[1024px] rounded-2xl bg-white border border-[#DEE4E9]'>
      <header className='w-full h-16 flex items-center justify-between px-6 '>
      <div>
        <span>Total Blocks:</span>
      <span className='font-semibold'>17626799</span>
      </div>
      <div></div>
      </header>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='border-y border-[#DEE4E9] h-8'>
            <th>1</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-[#DEE4E9] h-14'>
            <td>22</td>
          </tr>
        </tbody>
      </table>
      <footer className='flex items-center h-16'>

      </footer>
      </div>
    </div>
  )
}
