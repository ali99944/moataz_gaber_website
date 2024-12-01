import { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'معتز جابر - تشطيبات المطابخ والديكور',
  description: 'تصميم وتنفيذ أفخم المطابخ والديكورات الداخلية بأعلى جودة',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased bg-neutral-50`}>{children}</body>
    </html>
  )
}

