import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';
import type { NextPageWithLayout } from '../_app';

const Pricing: NextPageWithLayout = () => {
  return (
    <MainLayout
        title="Pricing"
    >
      <h1>Pricing Page</h1>

      <h1 className={'title'}>
        Go to <Link href={'/'}>Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing.tsx</code>
      </p>
    </MainLayout>
  )
}


export default Pricing;
