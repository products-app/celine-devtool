/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Divider } from 'primereact/divider'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'

const styles = {
  wrapper: 'flex flex-col gap-4',
}

export function CreateAppPage() {
  const [value, setValue] = useState('')
  const [selectedTecnology, setSelectedTecnology] = useState(null)
  const tecnologies = [
    { name: 'Reactjs', code: 'react' },
    { name: 'Nodejs', code: 'node' },
    { name: 'Python', code: 'python' },
    { name: 'Go', code: 'go' },
    { name: 'Typescript', code: 'ts' },
    { name: 'Javascript', code: 'js' },
  ]

  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const templates = [
    { name: 'Reactjs', code: 'react' },
    { name: 'Nodejs', code: 'node' },
    { name: 'Python', code: 'python' },
    { name: 'Go', code: 'go' },
    { name: 'Typescript', code: 'ts' },
    { name: 'Javascript', code: 'js' },
  ]


  return (
    <>
      <Header />
      <main className="max-w-4xl m-auto my-12">
        <Card className="p-0">
          <h1 className="text-3xl font-bold">Criar nova aplicação</h1>
          <Divider />
          <div className={styles.wrapper}>
            <div className="flex flex-col">
              <label>Nome</label>
              <InputText
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Descrição</label>
              <InputText
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Principais Tecnologias</label>
              <Dropdown
                value={selectedTecnology}
                onChange={(e) => setSelectedTecnology(e.value)}
                options={tecnologies}
                optionLabel="name"
                placeholder="Selecione a tecnologia principal"
                filter
                className="w-full md:w-14rem"
                multiple
              />
            </div>
            <div className="flex flex-col">
              <label>Template</label>
              <Dropdown
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.value)}
                options={templates}
                optionLabel="name"
                placeholder="Selecione o template do projeto"
                filter
                className="w-full md:w-14rem"
              />
            </div>
          </div>

          <Divider />
          <div className="flex gap-2 justify-end mt-4">
            <Button icon="pi pi-check" label="Criar app"  />
            <Button severity="secondary" outlined>Voltar</Button>
          </div>
        </Card>
      </main>
    </>
  )
}
