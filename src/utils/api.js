// fetch pokemon data
export function fetchPokemonData({ pokemonName, searchType, searchTerm }) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    // let apiUrl;

    // if (searchType === 'name') {
    //     apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    // } else if (searchType === 'pokemon-species') {
    //     apiUrl = `https://pokeapi.co/api/v2/pokemon-species/${searchTerm}`
    // } else if (searchType === 'ability') {
    //     apiUrl = `https://pokeapi.co/api/v2/ability/${searchTerm}`
    // } else {
    //     return Promise.reject('Invalid search type');
    // }

    return fetch(apiUrl)
    .then((response) => {
        console.log('API response: ', response);
        return response.json();
    })
    .catch((error) => {
        console.log('Error fetching Pokemon data: ', error);
    });
}