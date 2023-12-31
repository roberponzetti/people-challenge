import React from 'react'
import { useForm } from 'react-hook-form'
import { addCharacter } from '../../store/slices/people/thunks'
import { useDispatch } from 'react-redux';

const AddCharacterForm = ({ toggleModal }) => {

  const dispatch = useDispatch();

  const { register, formState: { errors }, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    dispatch(addCharacter(data));
    reset();
    toggleModal();
  }

  return (
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
        Aceptar
      </button>
    </form>
  )
}

export default AddCharacterForm