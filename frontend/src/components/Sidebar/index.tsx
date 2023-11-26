'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { PanelMenu } from 'primereact/panelmenu';
import { DashboardIcon, TargetIcon, LayersIcon } from '@radix-ui/react-icons'


type MenuSidebarProps = {
  defaultVisibility: boolean
}

const MenuSidebar = ({ defaultVisibility }: MenuSidebarProps) => {
  const [visible, setVisible] = useState(defaultVisibility);

  return (
    <div className="h-screen w-80 border-r border-solid border-slate-300">
      
      <ul>
        <div className='text-indigo-500 font-bold text-xs px-7 uppercase mb-2'>Admin</div>
        <li>
          <Link className="px-7 p-3 flex items-center gap-2 text-sm hover:bg-slate-100" href="dashboard"><DashboardIcon /> Dashboard</Link>
        </li>
        <li>
          <Link className="px-7 p-3 flex items-center gap-2 text-sm hover:bg-slate-100" href="dashboard"><TargetIcon /> Scopes</Link>
        </li>
        <li>
          <Link className="px-7 p-3 flex items-center gap-2 text-sm hover:bg-slate-100" href="dashboard"><LayersIcon /> Versões</Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuSidebar
