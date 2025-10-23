import { Outlet, Link, useLocation } from "react-router-dom"
import { APIToggle } from "../components/APIToggle"

const Layout: React.FC = () => {
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className=" bg-red-600 text-white shadow-md">
        <nav className="container w-[90%] sm:w-full flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 gap-4 sm:gap-2">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            {!isHome && (
              <Link
                to="/"
                className="flex w-9 h-9 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white transition-colors hover:bg-red-700 sm:h-10 sm:w-10 sm:text-2xl"
                aria-label="Go back to home"
              >
                {"<"}
              </Link>
            )}
            <h1 className="mt-2 font-bold tracking-tight text-lg sm:text-xl">
              Mehrwerk Pokedex
            </h1>
          </div>
          <div className="flex">
            <APIToggle />
          </div>
        </nav>
      </header>
      <main className="container mx-auto flex-grow py-8 sm:p-6 flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
