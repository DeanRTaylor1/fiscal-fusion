import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import HomeDivider from '@/core/components/design/dividers/HomeDivider'
import { signIn } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
      <HomeDivider />
      <div className='z-10'><SignIn /></div>
    </Fragment>

  )
}


function SignIn() {
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </div>
  );
}
