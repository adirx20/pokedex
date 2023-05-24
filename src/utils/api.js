// fetch pokemon data
export function fetchPokemonData(searchType, searchTerm) {
    let apiUrl;

    if (searchType === 'name') {
        apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    } else if (searchType === 'pokemon-species') {
        apiUrl = `https://pokeapi.co/api/v2/pokemon-species/${searchTerm}`
    } else if (searchType === 'ability') {
        apiUrl = `https://pokeapi.co/api/v2/ability/${searchTerm}`
    } else {
        return Promise.reject('Invalid search type');
    }

    return fetch(apiUrl)
    .then((response) => {
        console.log('API response: ', response);
        return response.json();
    })
    .catch((error) => {
        console.log('Error fetching Pokemon data: ', error);
    });
}