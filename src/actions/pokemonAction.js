import axios from "axios";

export const GetPokemonList = (page) => async dispatch => {

    try {
        dispatch({
            type: "POKEMON_LIST_LOADING"
        });

        const perPage = 15;
        const offset = (page * perPage) - perPage; // 1 = 0, 2 = 15, 3 = 30 ( page 1 = (1 * 15) - 15 =0,... )
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`;
        const res = await axios.get(url)

        dispatch({
            type: "POKEMON_LIST_SUCCESS",
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: "POKEMON_LIST_FAIL"
       });
    }
};