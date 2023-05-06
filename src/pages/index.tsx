import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import HomeDivider from '@/core/components/design/dividers/HomeDivider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
      <HomeDivider />
      <div className='z-10'>Test</div>
    </Fragment>

  )
}
