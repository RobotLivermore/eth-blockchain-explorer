export default function FeePrice({ value }: { value: string | number }) {
  return (
    <>
      {Number(value).toFixed(2)}
      <span className="ml-1">Gwei</span>
    </>
  );
}
