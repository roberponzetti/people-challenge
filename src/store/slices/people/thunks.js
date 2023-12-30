import { peopleApi } from "../../../services/peopleApi"
import { loadingPeople, setPeople, setUpdatedPeople } from "./peopleSlice"

export const getPeople = () => {
  return async (dispatch) => {
    dispatch(loadingPeople());

    const response = await peopleApi.get('people?limit=10');

    dispatch(setPeople({ people: response.data.results }));
    dispatch(setUpdatedPeople({ updatedPeople: response.data.results }));
  }
}

export const deleteCharacter = (index) => {
  return async (dispatch, getState) => {
    const state = getState();
    const updatedPeople = [...state.people.updatedPeople];
    updatedPeople.splice(index, 1);

    dispatch(setUpdatedPeople({ updatedPeople: updatedPeople }));
  }
}