import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/components/layouts/navbar'

export default function Home() {
  return (
    <div>
      <head>
        <title>Praktikum Next.js Page Router</title>
      </head>
        <h1 className='text-4xl'>Praktikum Next.js Page Router</h1> <br />
        <p>Mahasiswa D4 Pengembangan Web</p> <br />
        <Link href="/about">Ke Halaman About</Link>
    </div>
  )
}
