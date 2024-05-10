import { Route, Routes } from "react-router-dom"
import PokeCardList from "./list/PokeCardList"
import PokemonDetail from "./detail/PokemonDetail"

const PageNavigator = () => {
    return (
        <Routes>
            <Route path="/" element={<PokeCardList/>}/>
            <Route path="/pokemon/:name" element={<PokemonDetail/>}/>
        </Routes>
    )
}

export default PageNavigator