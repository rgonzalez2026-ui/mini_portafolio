import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

function Layout() {
  return (
    <div className="site-shell">
      <Header />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
