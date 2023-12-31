import { createSlice } from '@reduxjs/toolkit'

export const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    people: [],
    updatedPeople: [],
    isLoading: false
  },
  reducers: {
    loadingPeople: (state) => {
      state.isLoading = true;
    },
    setPeople: (state, action) => {
      state.isLoading = false;
      state.people = action.payload.people;
    },
    setUpdatedPeople: (state, action) => {
      state.isLoading = false;
      state.updatedPeople = action.payload.updatedPeople;
    }
  },
})

export const { loadingPeople, setPeople, setUpdatedPeople } = peopleSlice.actions