import Image from 'next/image';

export default function HeaderSearchBar() {
  return (
    <div className="w-[400px] h-14 bg-white flex items-center border border-[#DEE4E9] rounded-lg px-2">
      <Image
        width={38}
        height={38}
        src="/assets/icons/search.svg"
        alt="search"
      />
      <input
        className="outline-none ml-2 flex-1"
        placeholder="Search Transaction,Address..."
      />
    </div>
  );
}
