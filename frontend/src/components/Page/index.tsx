import MenuSidebar from '@/components/Sidebar';
import Header from '@/components/Header';

type PageProps = {
  children: React.ReactNode
}

const Page = ({ children }: PageProps) => {
  return (
    <div className="">
      <Header />
      <div className='w-full flex'>
        <MenuSidebar defaultVisibility={false} />
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Page
