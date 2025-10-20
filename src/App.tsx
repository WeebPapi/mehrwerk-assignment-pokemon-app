import { Route, Routes } from "react-router-dom"
import "./App.css"
import PokemonDetail from "./components/PokemonDetail"
import ListPage from "./pages/ListPage"
import { ApiProvider } from "./components/APIProvider"

function App() {
  return (
    <>
      <ApiProvider>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </ApiProvider>
    </>
  )
}

export default App
