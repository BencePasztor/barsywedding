import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Sidebar from '@/components/layout/sidebar/Sidebar'

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin-ext"]
})

export const metadata: Metadata = {
  title: 'Barsy Wedding',
  description: 'Segítek, hogy az álomesküvőd valósággá váljon.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body className={`${poppins.className} text-ctext bg-cbg grid grid-rows-[auto_1fr_auto] min-h-screen`}>
        <Providers>
          <Header />
          <Sidebar />
          <main className="min-w-0">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
