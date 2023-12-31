import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header/Header'
import Body from './body/Body'
import Footer from './footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Replication of Assingment 2',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="bg-[#0a5783] flex flex-col justify-start gap-12 relative w-full items-center" >
        <Header/>
        <Body/>
        <Footer/>
        </div>
      </body>
    </html>
  )
}
