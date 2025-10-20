import { Outlet } from "react-router-dom"
import { APIToggle } from "../components/APIToggle"

const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="w-full bg-red-600 text-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold tracking-tight">
            Mehrwerk Pokedex
          </h1>

          <div>
            <APIToggle />
          </div>
        </nav>
      </header>
      <main className="container mx-auto flex-grow p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
