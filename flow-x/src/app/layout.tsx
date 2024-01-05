import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'],variable:'--font-inter', display: 'swap', });
const sora = Sora({ subsets: ["latin"], weight: ["400"] ,variable:'--font-sora' , display: 'swap',});

export const metadata: Metadata = {
  title: '8x flow cloning',
  description: 'A nextjs app designed with Figma ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable}`}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
