import React from 'react'
import { results } from '../mocks/peopleList'

const PeopleList = () => {

  return (
    <div className="grid grid-cols-1 gap-4">
      {results.map((result, index) => (  
        <div key={index} className="flex flex-col items-center pl-5 pr-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 hover:cursor-pointer">
          <h1 className=""></h1>
          <div className="flex flex-col flex-grow justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{result.name}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Gender: {result.gender}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Height: {result.height}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Mass: {result.mass}</p>
          </div>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-yellow-star-wars rounded-lg hover:bg-dark-yellow-star-wars focus:ring-4 focus:outline-none focus:ring-dark-yellow-star-wars">
            Eliminar
          </a>
        </div>
      ))}
    </div>
  )
}

export default PeopleList