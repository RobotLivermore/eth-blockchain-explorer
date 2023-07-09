'use client';

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

interface BlockInfoType {
  number: number;
  hash: string;
  parent_hash: string;
  timestamp: string;
  difficulty: string;
  extra_data: string;
  gas_limit: number;
  gas_used: number;
  base_fee_per_gas: number;
  miner: string;
  mix_hash: string;
  nonce: string;
  receipts_root: string;
  sha3_uncles: string;
  size: number;
  state_root: string;
  transactions_root: string;
  transactions_count: number;
  uncles_count: number;
}

interface BlockInfoProps {
  blockNumber: number;
}
export default function BlockInfo({ blockNumber }: BlockInfoProps) {
  const [blockInfo, setBlockInfo] = useState<BlockInfoType | null>(null);
  const updateBlockInfo = useCallback(async () => {
    const resp = await fetch(
      `/api/chainbase/block/detail?chain_id=1&number=${blockNumber}`
    );
    const result = await resp.json();
    console.log(result);
    setBlockInfo(result.data);
  }, []);

  useEffect(() => {
    updateBlockInfo();
  }, []);

  return (
    <div className="w-full rounded-2xl bg-white px-6 pt-4 pb-5 border border-[#DEE4E9]">
      <Record label="Hash" value={blockInfo?.hash || ''} />
      <Record
        label="Transactions"
        value={blockInfo?.transactions_count || ''}
      />
      <Record
        label="Timestamp"
        value={
          blockInfo?.timestamp
            ? new Date(blockInfo?.timestamp).toLocaleString()
            : ''
        }
      />
      <Record label="ParentHash" value={blockInfo?.parent_hash || ''} />
      <Record label="Miner" value={blockInfo?.miner || ''} />
      <Record label="GasLimit" value={blockInfo?.gas_limit || ''} />
      <Record label="BaseFeePerGas" value={blockInfo?.base_fee_per_gas || ''} />
      <Record label="Extra Data" value={blockInfo?.extra_data || ''} />
    </div>
  );
}
