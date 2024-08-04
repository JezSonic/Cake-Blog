import CiastkowoLogo from '@/img/logo.png'
import NavList from '../components/NavList'
import './globals.css'

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
