import React from 'react'

const Card = ({ pokemon, loading, infoPokemon }) => {
    return (
        <>
            {
                loading ? <h1>Loading</h1> : pokemon.map((item) => {
                    return (
                        <>
                            <div key={item.id} onClick={() => infoPokemon(item)} className="bg-cyan-300 rounded-2xl p-6 flex items-center justify-between box-border capitalize">
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} className='w-10' alt="" />
                                <h2>{item.name}</h2>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Card