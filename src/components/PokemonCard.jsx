import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 p-4 bg-white">
      <div className="flex flex-col items-center space-y-3">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-40 h-40 object-contain"
        />
        <h2 className="text-xl font-bold capitalize">
          {pokemon.name}
        </h2>
        <p className="text-gray-600">#{pokemon.id}</p>
        <div className="flex flex-wrap gap-2">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className={`px-3 py-1 rounded-full text-sm font-medium capitalize
                ${type.type.name === 'fire' ? 'bg-red-100 text-red-800' :
                  type.type.name === 'water' ? 'bg-blue-100 text-blue-800' :
                  type.type.name === 'grass' ? 'bg-green-100 text-green-800' :
                  type.type.name === 'electric' ? 'bg-yellow-100 text-yellow-800' :
                  type.type.name === 'psychic' ? 'bg-purple-100 text-purple-800' :
                  type.type.name === 'ice' ? 'bg-cyan-100 text-cyan-800' :
                  type.type.name === 'dragon' ? 'bg-indigo-100 text-indigo-800' :
                  type.type.name === 'dark' ? 'bg-gray-800 text-white' :
                  type.type.name === 'fairy' ? 'bg-pink-100 text-pink-800' :
                  type.type.name === 'normal' ? 'bg-gray-100 text-gray-800' :
                  type.type.name === 'fighting' ? 'bg-red-200 text-red-800' :
                  type.type.name === 'flying' ? 'bg-blue-200 text-blue-800' :
                  type.type.name === 'poison' ? 'bg-purple-200 text-purple-800' :
                  type.type.name === 'ground' ? 'bg-yellow-200 text-yellow-800' :
                  type.type.name === 'rock' ? 'bg-gray-300 text-gray-800' :
                  type.type.name === 'bug' ? 'bg-green-200 text-green-800' :
                  type.type.name === 'ghost' ? 'bg-purple-300 text-purple-800' :
                  type.type.name === 'steel' ? 'bg-gray-400 text-gray-800' :
                  'bg-gray-100 text-gray-800'}`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard; 