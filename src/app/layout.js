import CiastkowoLogo from '@/img/logo.png'
import NavList from '../components/NavList'
import './globals.css'
import { initializeApp } from 'firebase/app'
import { isSupported, getAnalytics } from 'firebase/analytics'

export const metadata = {
  title: {
    template: 'Ciastkowo - Blog poświęcony ciastom'
  },
  openGraph: {
    title: 'Ciastkowo',
    description: 'Blog poświęcony ciastom'
  }
}
export default function Layout({ children }) {
  const firebaseConfig = {
    apiKey: 'AIzaSyCBv9FPPGVER87lEUTsb-mGEwokT3giopE',
    authDomain: 'torty-5e5f4.firebaseapp.com',
    projectId: 'torty-5e5f4',
    storageBucket: 'torty-5e5f4.appspot.com',
    messagingSenderId: '662867265850',
    appId: '1:662867265850:web:26797e0192742565626803',
    measurementId: 'G-MCZW0XWRQE'
  }
  let analytics = null
  isSupported().then((res) => {
    if (res) {
      analytics = getAnalytics(app)
    }
  })
// Initialize Firebase
  const app = initializeApp(firebaseConfig)
  return (
    <html lang="en">
    <body>
    <div className="px-6 max-w-7xl mx-auto">
      <header className="py-6 relative">
        <nav className="relative flex items-center justify-between sm:h-10 ">
          <a href="/" aria-label="Ciastkowo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width={40}
              height={40}
              src={CiastkowoLogo.src}
              alt="Ciastkowo Logo"
              className="hidden sm:block h-10"
            />
            <img
              width={40}
              height={40}
              src={CiastkowoLogo.src}
              alt="Ciastkowo Logo"
              className="h-10 sm:hidden"
            />
          </a>
          <ul>
            <NavList navId="main" />
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-white mt-5 dark:bg-gray-900">
        <div className="py-6 lg:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  © {new Date().getFullYear()} {' '}
                  <a href="https://ciastkowo.web.app/" className="hover:underline">
                    Ciastkowo
                  </a>
                  . Wszelkie prawa zastrzeżone.
                </span>
          </div>
        </div>
      </footer>
    </div>
    </body>
    </html>
  )
}
