import { peopleApi } from "../../../services/peopleApi"
import { loadingPeople, setPeople, setUpdatedPeople } from "./peopleSlice"

/*
  Realicé las siguientes funciones como Thunks para peticiones asíncronas, si bien solo el getPeople hace un llamado a la API real,
  las demás acciones llamarían tambien a la API, en este caso solamente interactúan con el store.

*/

/*
  getPeople obtiene la info de la API, guardando los resultados en el store
  people tendrá una copia de los resultados originales, mientras que updatedPeople se irá modificando acorde a las búsquedas que realice el usuario

*/
export const getPeople = () => {
  return async (dispatch) => {
    dispatch(loadingPeople());

    const response = await peopleApi.get('people?limit=10');

    dispatch(setPeople({ people: response.data.results }));
    dispatch(setUpdatedPeople({ updatedPeople: response.data.results }));
  }
}

/*
  deleteCharacter elimina el personaje del array original, y tambien de updatedPeople, 
  ya que si se elimina cuando el usuario está haciendo una búsqueda, deberá impactar en ambos resultados.  
  
  Si tuviera un id, hubiera realizado la eliminación por ID.
  Tampoco quise utilizar el name como ID.
  
  Para eliminar utilizo el index de la búsqueda, y para evitar colisionar índices y eliminarlo correctamente del array original,
  utilizo el nombre de la persona, por eso las dos variantes
  
*/

export const deleteCharacter = (index, name) => {
  return async (dispatch, getState) => {
    const originalPeople = getState().people.people;
    const updatedOriginalPeople = originalPeople.filter(person => person.name !== name);

    const currentPeople = getState().people.updatedPeople;
    const updatedPeople = [...currentPeople];
    updatedPeople.splice(index, 1);

    dispatch(setUpdatedPeople({ updatedPeople: updatedPeople }));
    dispatch(setPeople({ people: updatedOriginalPeople }));
  }
}

/*
  Al agregar un personaje, no tuve que hacer nada extra como en deleteCharacter,
  ya que solo se puede agregar en la página principal, y no cuando el usuario realice una búsqueda

*/

export const addCharacter = (data) => {
  return async (dispatch, getState) => {
    const currentPeople = getState().people.updatedPeople;
    const updatedPeople = [...currentPeople, data];
    dispatch(setPeople({ people: updatedPeople }));
    dispatch(setUpdatedPeople({ updatedPeople: updatedPeople }));
  }
}