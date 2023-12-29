import { peopleApi } from "../../../services/peopleApi"
import { loadingPeople, setPeople } from "./peopleSlice"

export const getPeople = () => {
  return async (dispatch) => {
    dispatch(loadingPeople());

    const response = await peopleApi.get('people?limit=10');

    dispatch(setPeople({ people: response.data.results }));
  }
}