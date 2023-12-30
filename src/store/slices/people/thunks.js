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
    const currentPeople = getState().people.updatedPeople;
    const updatedPeople = [...currentPeople];
    updatedPeople.splice(index, 1);

    dispatch(setUpdatedPeople({ updatedPeople: updatedPeople }));
  }
}

export const addCharacter = (data) => {
  return async (dispatch, getState) => {
    const currentPeople = getState().people.updatedPeople;
    const updatedPeople = [...currentPeople, data];
    dispatch(setPeople({ people: updatedPeople }));
    dispatch(setUpdatedPeople({ updatedPeople: updatedPeople }));
  }
}