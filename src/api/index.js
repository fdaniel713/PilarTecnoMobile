const BASE_URL = 'https://pokeapi.co/api/v2/'
export const IMG_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'

//get all pokemos:
export const getPokemonList = (next) => {
    const url = next?next:`${BASE_URL}/pokemon/?limit=10`
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            return Promise.resolve(data)
        })
        .catch(err => {
            throw err
        })
}

//get pokemo by Id:
export const getPokemon = (url) => {
    return fetch(`${url}`)
        .then(res => res.json())
        .then(data => {
            //console.log('datosss:'+JSON.stringify(data)) 
            return Promise.resolve(data)
        })
        .catch(err => {
            throw err
        })
}