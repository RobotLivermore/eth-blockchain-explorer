export default function BlockDetail({
  params,
}: {
  params: { blockNumber: string };
}) {
  if (Number(params.blockNumber) >= 0) {
    return <div>Block#{params.blockNumber}</div>;
  }
  return <div>Invalid Block Number</div>;
}
