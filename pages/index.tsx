import type { NextPage } from 'next'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout
      title="Home"
    >
      <h1>Home Page</h1>

      <h1 className={'title'}>
        Go to <Link href="/about">About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.tsx</code>
      </p>
    </MainLayout>
        
  )
}

export default Home
