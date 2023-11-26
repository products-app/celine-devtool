import '../common/styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'primereact/resources/primereact.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

const poppins = Poppins({ weight: ['300', '400', '600', '700'],preload: false, })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
          {children}
      </body>
    </html>
  )
}