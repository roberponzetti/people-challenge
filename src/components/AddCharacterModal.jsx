import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addCharacter } from '../store/slices/people/thunks';

const AddCharacterModal = () => {

  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const { register, reset, formState: { errors }, handleSubmit } = useForm()
  const onSubmit = (data) => {
    dispatch(addCharacter(data));
    setIsVisible(!isVisible);
  }

  const toggleModal = () => {
    reset();
    setIsVisible(!isVisible);
  }

  return (
    <>
      <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" onClick={toggleModal} className="block justify-self-start text-black bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-star-wars hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="button">
        Agregar
      </button>
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
            <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                  <input type="text" 
                        name="name" 
                        id="name" 
                        {...register("name", { 
                          required: 'Campo requerido!', 
                          maxLength: {value: 20, message: 'La longitud máxima es de 20 caracteres.'} 
                        })} 
                        aria-invalid={errors.name ? "true" : "false"} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-star-wars focus:border-dark-yellow-star-wars block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400" 
                        placeholder="Darth Vader, Owen Lars..." 
                  />
                  {errors.name && <p role="alert" className="flex text-red-600">{errors.name.message}</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Altura</label>
                  <input type="number" 
                        name="height" 
                        id="height" 
                        {...register("height", { 
                          required: 'Campo requerido!', 
                          min: {value: 10, message: 'La altura debe ser mayor a 10'}, 
                          max: {value: 300, message: 'La altura debe ser menor a 300'}
                        })} 
                        aria-invalid={errors.height ? "true" : "false"} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-star-wars focus:border-dark-yellow-star-wars block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400" 
                        placeholder="200" 
                  />
                  {errors.height && <p role="alert" className="flex text-red-600">{errors.height.message}</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="mass" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Masa</label>
                  <input type="number" 
                        name="mass" 
                        id="mass" 
                        {...register("mass", 
                        { required: 'Campo requerido!', 
                          min: {value: 10, message: 'La masa debe ser mayor a 10'}, 
                          max: {value: 500, message: 'La masa debe ser menor a 500'}, 
                        })} 
                        aria-invalid={errors.mass ? "true" : "false"} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-star-wars focus:border-dark-yellow-star-wars block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400" 
                        placeholder="99" 
                  />
                  {errors.mass && <p role="alert" className="flex text-red-600">{errors.mass.message}</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Género</label>
                  <select id="gender" 
                          {...register("gender", { required: 'Campo requerido!' })} 
                          aria-invalid={errors.gender ? "true" : "false"} 
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-star-wars focus:border-dark-yellow-star-wars block w-full p-2.5"
                  >
                    <option value="">Seleccione...</option>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                    <option value="n/a">N/A</option>
                  </select>
                  {errors.gender && <p role="alert" className="flex text-red-600">{errors.gender.message}</p>}
                </div>
              </div>
              <button type="submit" className="text-black inline-flex items-center bg-yellow-star-wars hover:bg-dark-yellow-star-wars focus:ring-4 focus:outline-none focus:ring-yellow-star-wars font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div> 
    </>
  )
}

export default AddCharacterModal