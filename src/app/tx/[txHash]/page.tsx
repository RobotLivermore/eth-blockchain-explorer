import HeaderBar from '@/components/HeaderBar';
import { getTxByHash } from '@/server/getTxByHash';
import { useCallback, useEffect, useState } from 'react';

interface InfoItem {
  label: string;
  value: React.ReactNode;
}

const Record = ({ label, value }: InfoItem) => {
  return (
    <div className="flex h-7 items-center">
      <span className="w-[148px] text-[#8D9198] text-sm">{label}:</span>
      <span className="flex-1 text-sm">{value}</span>
    </div>
  );
};

export default async function TxDetail({
  params,
}: {
  params: { txHash: string };
}) {
  const txInfo = await getTxByHash(params.txHash);

  return (
    <div className="w-full max-w-[1244px]">
      <HeaderBar />
      <h1 className="w-full text-2xl font-semibold">Transaction Details</h1>
      <div className="mt-6 w-full rounded-2xl bg-white px-6 pt-4 pb-5 border border-[#DEE4E9]">
        <Record label="Hash" value={txInfo?.transaction_hash || ''} />
        <Record label="Transactions" value={txInfo?.block_number || ''} />
        <Record
          label="Timestamp"
          value={
            txInfo?.block_timestamp
              ? new Date(txInfo?.block_timestamp).toLocaleString()
              : ''
          }
        />
        <Record
          label="From"
          value={
            <a
              className="text-[#046CB9]"
              href={`/address/${txInfo.from_address}`}
            >
              {txInfo.from_address}
            </a>
          }
        />
        <Record
          label="To"
          value={
            <a
              className="text-[#046CB9]"
              href={`/address/${txInfo.to_address}`}
            >
              {txInfo?.to_address}
            </a>
          }
        />
        <Record label="Value" value={txInfo?.value || ''} />
        <Record label="Transaction Fee" value={txInfo.fee || ''} />
        <Record label="Gas Price" value={txInfo.gas_price || ''} />
      </div>
    </div>
  );
}
