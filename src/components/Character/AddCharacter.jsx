import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import AddCharacterForm from './AddCharacterForm';

const AddCharacter = () => {

  const { badge } = useSelector(state => state.search);

  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      {!badge && (
        <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" onClick={toggleModal} className="justify-self-start inline-flex items-center text-black bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-star-wars hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="button">
          <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
          Agregar
        </button>
      )}
      <div className={`fixed top-0 right-0 bottom-0 left-0 bg-black opacity-70 z-40 ${isVisible ? 'block' : 'hidden'}`}></div>
      <div id="crud-modal" tabIndex="-1" aria-hidden="true" className={`${isVisible ? 'flex' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Agregar Personaje
              </h3>
              <button type="button" onClick={toggleModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="crud-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">Close modal</span>
              </button>
            </div>
            <AddCharacterForm toggleModal={toggleModal} />
          </div>
        </div>
      </div> 
    </>
  )
}

export default AddCharacter