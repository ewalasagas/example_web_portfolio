import '@/styles/globals.css';
import 'tailwindcss/tailwind.css'; // Import the generated Tailwind CSS file

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
     <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
