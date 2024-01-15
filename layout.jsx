import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'


const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'NilAnimeList',
  description: 'Webiste Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" sup>
      <body className={`${gabarito.className} bg-color-dark` } suppressHydrationWarning>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
