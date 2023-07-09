import Image from 'next/image';

export default function SearchBar() {
  return (
    <div className="w-full max-w-[1024px] h-16 bg-white flex items-center rounded-lg px-2">
      <span className="bg-[#F3F7F7] rounded-lg">
        <Image
          width={46}
          height={46}
          src="/assets/icons/search.svg"
          alt="search"
        />
      </span>
      <input
        className="outline-none ml-3 flex-1"
        placeholder="Search Transaction,Address..."
      />
    </div>
  );
}
