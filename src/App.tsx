import { Route, Routes } from "react-router-dom"
import "./App.css"
import PokemonList from "./components/PokemonList"
import PokemonDetail from "./components/PokemonDetail"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </>
  )
}

export default App
