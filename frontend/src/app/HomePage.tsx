'use client'
import Header from '@/components/Header';
import { PlusIcon } from '@radix-ui/react-icons'
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Link from 'next/link';
import Image from 'next/image';

export function HomePage() {
  const apps = [{
    id: 1,
    name: <b>MyApp</b>,
    team: 'Banking',
    url: <a href="/my-app" className="text-teal-500 hover:underline">Acessar app</a>,
    tecnologies: <>
      <Image src="/python.svg" alt="svg" width={30} height={30} />
    </>,
    date: '26/11/2023 12:23:00',
  }]

  const columns = [
    {field: 'name', header: 'Nome'},
    {field: 'tecnologies', header: 'Main Tecnologies'},
    {field: 'team', header: 'Time'},
    {field: 'date', header: 'Última atualização'},
];

  return (
    <>
			<Header />
			<main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Applications</h1>
          <Link href="create"><Button><PlusIcon /><span className="font-bold pl-1">Criar nova app</span></Button></Link>
        </div>

        <DataTable value={apps} tableStyle={{ minWidth: '50rem' }}>
          {columns.map((col, i) => (
            <Column key={col.field} field={col.field} header={col.header} />
          ))}
          <Column key="actions" field="url" header="Actions" />
        </DataTable>
			</main>
    </>
  );
}