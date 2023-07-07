export default function AccountDetail({
  params,
}: {
  params: {
    address: string;
  };
}) {
  return <div>{params.address}</div>;
}
