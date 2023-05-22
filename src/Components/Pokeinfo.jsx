import React from 'react'

const Pokeinfo = ({ data }) => {
    console.log(data);
    return (
        <>
            {
                (!data) ? "" : (
                    <>
                        <h1 className='uppercase font-bold text-center'>{data.name}</h1>
                        <img className='w-15 m-auto' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt="" />
                        <div className="m-auto flex justify-around items-center mt-4 capitalize">
                            {
                                data.abilities.map(poke => {
                                    return (
                                        <>
                                            <div className="bg-orange-400 text-white">
                                                <h2>{poke.ability.name}</h2>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="base-stat text-center capitalize">
                            {
                                data.stats.map(poke => {
                                    // console.log(poke);
                                    return (
                                        <>
                                            <h3>{poke.stat.name} : {poke.base_stat}</h3>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Pokeinfo