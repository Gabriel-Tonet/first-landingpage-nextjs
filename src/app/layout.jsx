import { Roboto } from 'next/font/google'
import './globals.scss'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: 'First Landing Page',
  description: 'Site acadêmico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
