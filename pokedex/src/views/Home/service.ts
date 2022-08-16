import { api } from "../../services/api";

function getPokemon(id: number){
  const pokemon = api.get(`/pokemon/${id}`,).then((response) => {
    console.log(response)
  })
}



export { getPokemon };