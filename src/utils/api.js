const BASE_URL = 'https://pokeapi.co/api/v2'

export const getPokemonData = ({ pokemonName }) => {
    return fetch(`${BASE_URL}/pokemon/${pokemonName}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch Pokémon data');
            }
            return res.json();
        })
        .catch((error) => {
            throw new Error('Failed to fetch Pokémon data');
        });


    // const apiUrl = `${BASE_URL}/pokemon/${pokemonName}`;

    // return fetch(apiUrl)
    // .then((response) => {
    //     console.log('API response: ', response);
    //     return response.json();
    // })
    // .catch((error) => {
    //     console.log('Error fetching Pokemon data: ', error);
    // });
};

export const getPokemonByUrl = (url) => {
    return fetch(url).then((res) => res.json());
};

export const getPokemonList = () => {
    return fetch(`${BASE_URL}/pokemon?limit=2000`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch Pokémon data');
            }
            return res.json();
        })
        .then((data) => {
            return data.results;
        })
        .catch((err) => {
            throw new Error('Failed to get Pokémon data');
        });
};

export const getAllPokemons = () => {
    return fetch(`${BASE_URL}/pokemon?limit=2000`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch Pokémon data');
            }
            return res.json();
        })
        .then((data) => {
            const pokemonResults = data.results;
            const pokemonDataPromises = pokemonResults.map((pokemon) => {
                return fetch(pokemon.url)
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error('Failed to fetch Pokémon data');
                        }
                        return res.json();
                    })
                    .catch((err) => {
                        throw new Error('Failed to fetch Pokémon data');
                    });
            });

            return Promise.all(pokemonDataPromises);
        })
        .catch((err) => {
            throw new Error('Failed to fetch Pokémon data');
        });
};  