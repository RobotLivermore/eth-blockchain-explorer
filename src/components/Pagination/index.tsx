import Image from 'next/image';

export default function Pagination({
  baseUrl,
  currentPage,
  totalPage,
}: {
  currentPage: number;
  totalPage: number;
  baseUrl: string;
}) {
  return (
    <div className="flex">
      <a
        href={`${baseUrl}`}
        className="border-[#E8EDF0] border flex items-center justify-center rounded"
      >
        <Image
          width={24}
          height={24}
          src="/assets/icons/left-arrow.svg"
          alt="first"
        />
      </a>
      <a
        href={`${baseUrl}/${currentPage - 1 || 1}`}
        className="border-[#E8EDF0] border flex items-center justify-center rounded ml-1"
      >
        <Image
          width={24}
          height={24}
          src="/assets/icons/left.svg"
          alt="first"
        />
      </a>
      <div className="mx-4 flex items-center">
        Page
        <span className="mx-1 h-6 border border-[#E8EDF0] bg-[#F3F7F7] rounded px-2">
          {currentPage}
        </span>
        of
        <span className="ml-1">{totalPage}</span>
      </div>
      <a
        href={`${baseUrl}/${currentPage + 1}`}
        className="border-[#E8EDF0] border flex items-center justify-center rounded rotate-180 mr-1"
      >
        <Image
          width={24}
          height={24}
          src="/assets/icons/left.svg"
          alt="first"
        />
      </a>
      <a
        href={`${baseUrl}/${totalPage}`}
        className="border-[#E8EDF0] border flex items-center justify-center rounded rotate-180"
      >
        <Image
          width={24}
          height={24}
          src="/assets/icons/left-arrow.svg"
          alt="last"
        />
      </a>
    </div>
  );
}
