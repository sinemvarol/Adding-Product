import Image from 'next/image'
import { Inter } from 'next/font/google'
import Product from "pages/product";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Product/>
  )
}
