import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../compontents/header';
import  HomePage from '../compontents/HomePage'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TECH TAKSHAK',
  description: 'KNSITs TECH FEST',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}