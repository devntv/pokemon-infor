import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetPokemonList } from '../actions/pokemonAction';
import { Link } from "react-router-dom"
const PokemonList = () => {

    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.PokemonList)

    useEffect(() => {
        fetchData(1)
    }, [])


    const fetchData = (page = 1) => {
        dispatch(GetPokemonList(page))
    }


    const showData = () => {
        if (!_.isEmpty(pokemonList.data)) {
            return (
                <div className={"list-wrap"}>
                    { pokemonList.data.map(element => {
                        return (<div className={"pokemon-items"}>
                            <p>{element.name}</p>
                            <Link to={`/pokemon/${element.name}`}>view</Link>
                        </div>)
                    })}
                </div>
            )
        }

        if (pokemonList.loading) {
            return <p>loading...</p>
        }

        if (pokemonList.errorMsg !== "") {
            return <p>{pokemonList.errorMsg}</p>
        }
        return <p>không thể lấy thông tin pokemon</p>
    }

    return (
        <div className={"container-list"}>
            {showData()}
        </div>
    )
}

export default PokemonList
