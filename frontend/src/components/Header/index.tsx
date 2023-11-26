'use client'
import { InputText } from 'primereact/inputtext';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import Logo from '@/components/Logo'
import Avatar, { genConfig } from 'react-nice-avatar'


const Header = () => {
  const config = genConfig({ sex: "woman", hairStyle: "womanLong" })

  return (
    <div className="w-full p-2 flex items-center justify-between border-b border-solid  border-slate-300 bg-white">
      <div className="px-2 flex-1 flex items-center gap-2">
        <button><MagnifyingGlassIcon /></button>
        <InputText placeholder="Buscar" className="outline-none p-inputtext-sm p-2" />
      </div>
      <Logo />
      <div className="px-2 flex-1 text-right flex justify-end">
        <Avatar className="w-8 h-8" {...config} />
      </div>
    </div>
  )
}

export default Header