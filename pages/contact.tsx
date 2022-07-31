import Link from 'next/link';
import { ReactElement } from 'react';
import { LightLayout } from '../components/layouts/LightLayout';
import { MainLayout } from '../components/layouts/MainLayout';
import type { NextPageWithLayout } from './_app';

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <h1>Contact Page</h1>

      <h1 className={'title'}>
        Go to <Link href={'/'}>Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/contact.tsx</code>
      </p>
    </>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout
      title="Contact"
    >
      <LightLayout>
        {page}
      </LightLayout>
    </MainLayout>
  )
}

export default Contact;
