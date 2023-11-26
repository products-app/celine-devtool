import Link from 'next/link'
import Image from 'next/image';

const Logo = () => (
  <div className="text-center font-bold text-xl flex-1">
    <Link href="./" className='flex items-center justify-center gap-2'>
      <Image src="/cell.svg" alt="svg" width={40} height={40} />
      <span>Celine <span className="text-slate-400 text-xs font-light">Dev Tools</span></span>
    </Link>
  </div>
)

export default Logo
