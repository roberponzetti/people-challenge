import React from 'react'
import { deleteCharacter } from '../../store/slices/people/thunks';
import { useDispatch } from 'react-redux';

const Character = ({ updatedPeople }) => {

  const dispatch = useDispatch();

  const handleDelete = (index, name) => {
    dispatch(deleteCharacter(index, name));
  };

  return (
    updatedPeople.length > 0 ? (
      updatedPeople.map((character, index) => (  
        <div key={index} className="flex flex-col items-center pl-4 pr-4 bg-white border shadow-card-shadow border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-200">
          <div className="flex flex-col flex-grow items-start justify-between p-2 leading-normal">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{character.name}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Género: {character.gender === 'male' ? 'Masculino' : character.gender === 'female' ? 'Femenino' : 'Desconocido'}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">Altura: {character.height}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">Masa: {character.mass}</p>
          </div>
          <button onClick={() => handleDelete(index, character.name)} className="inline-flex items-center px-3 py-2 mb-1 text-sm font-medium text-center text-black bg-yellow-star-wars rounded-lg hover:bg-dark-yellow-star-wars focus:ring-4 focus:outline-none focus:ring-dark-yellow-star-wars">
            Eliminar
          </button>
        </div>
      ))
    ) : (
      <h1>No se encontraron resultados.</h1>
    )
  )
}

export default Character