import { createSlice } from '@reduxjs/toolkit'

export const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    people: [],
    isLoading: false
  },
  reducers: {
    loadingPeople: (state, action) => {
      state.isLoading = true;
    },
    setPeople: (state, action) => {
      state.isLoading = false;
      state.people = action.payload.people;
    }
  },
})

export const { loadingPeople, setPeople } = peopleSlice.actions