import Image from 'next/image'
import { Inter, Abril_Fatface } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {Head} from "@/seo/Head/Head";
import Sections from "@/components/Sections/Sections";

const inter = Inter({ subsets: ['latin'] })
export const header = Abril_Fatface({ weight: ['400'], subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Head/>
      <main>
        <div className=''>
          <Sections/>
        </div>
      </main>
    </>
  )
}
