import type { NextPage } from 'next'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

const About: NextPage = () => {
  return (
    <MainLayout
      title="About"
    >
        <h1>About Page</h1>

        <h1 className={'title'}>
          Go to <Link href={'/'}>Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.tsx</code>
        </p>
    </MainLayout>

  )
}

export default About
