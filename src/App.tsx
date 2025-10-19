import { Route, Routes } from "react-router-dom"
import "./App.css"
import PokemonList from "./components/PokemonList"
import PokemonDetail from "./components/PokemonDetail"
import ListPage from "./pages/ListPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </>
  )
}

export default App
