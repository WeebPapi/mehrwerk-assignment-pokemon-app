import { Outlet, Link, useLocation } from "react-router-dom"
import { APIToggle } from "../components/APIToggle"

const Layout: React.FC = () => {
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="w-full bg-red-600 text-white shadow-md">
        <nav className="container w-full px-4 flex items-center justify-between p-4">
          {!isHome && (
            <Link
              to="/"
              className="rounded-md px-3 py-1 text-lg font-medium text-white"
            >
              {"< Back"}
            </Link>
          )}
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold tracking-tight">
              Mehrwerk Pokedex
            </h1>
          </div>

          <div>
            <APIToggle />
          </div>
        </nav>
      </header>
      <main className="container mx-auto flex-grow p-4 flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
