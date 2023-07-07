interface MetricsProps {
  icon: React.ReactNode
  title: string
  value: string
}

export default function Metrics({icon, title, value}: MetricsProps) {
  return <div className="w-[330px] h-[140px] rounded-[16px] py-6 px-5 bg-[#24232E] border border-[#4F4E5A]">
    <div className="flex items-center">
      {icon}
      <span className="ml-[10px] text-sm" style={{color: 'rgba(255, 255, 255, 0.70)'}}>{title.toUpperCase()}</span>
    </div>
    <div className="mt-4 pl-[46px] text-white text-2xl">
      {value}
    </div>
  </div>
}