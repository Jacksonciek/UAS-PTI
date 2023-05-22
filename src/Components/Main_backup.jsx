import React from 'react'
import Card from './Card'
import Pokeinfo from './Pokeinfo'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();


    const pokeFun = async () => {
        setLoading(true);
        const response = await axios.get(url);
        // console.log(response.data.results);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        getPokemon(response.data.results);
        setLoading(false);
        // console.log(pokeData);
    }
    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            // console.log(item.url);
            setPokeData(state => {
                state = [...state, result.data];
                state.sort((a, b) => a.id > b.id ? 1 : -1);
                return state;
            })
        })
    }
    useEffect(() => {
        pokeFun();
    }, [url])


    return (
        <>
            <div className="m-auto pt-28 flex shadow-md">
                <div className="flex basis-1/2 grid gap-8">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />
                    <div className="btn-group text-white flex justify-around">
                        {prevUrl && <button onClick={() => {
                            setPokeData([]);
                            setUrl(prevUrl);
                        }} className='m-1 py-1.5 px-0 bg-orange-400 w-1/2 rounded-2xl'>Previous</button>
                        }
                        {nextUrl && <button onClick={() => {
                            setPokeData([]);
                            setUrl(nextUrl);
                        }} className='m-1 py-1.5 px-0 bg-orange-400 w-1/2 rounded-2xl'>Next</button>
                        }
                    </div>
                </div>
                <div className="w-1/2">
                    <Pokeinfo data={pokeDex} />
                </div>
            </div>
        </>
    )
}

export default Main