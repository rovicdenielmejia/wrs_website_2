import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  )
}
