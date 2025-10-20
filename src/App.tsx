import { Route, Routes } from "react-router-dom"
import PokemonDetail from "./pages/PokemonDetail"
import ListPage from "./pages/ListPage"
import { ApiProvider } from "./components/APIProvider"
import Layout from "./layouts/Layout"

function App() {
  return (
    <>
      <ApiProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ListPage />} />
            <Route path="pokemon/:id" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </ApiProvider>
    </>
  )
}

export default App
