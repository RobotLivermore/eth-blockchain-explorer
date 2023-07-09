export default function GasLimit({ value }: { value: string | number }) {
  return <>{Number(value).toLocaleString()}</>;
}
