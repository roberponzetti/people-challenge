import { configureStore } from '@reduxjs/toolkit'
import { peopleSlice } from './slices/people/peopleSlice'
import { searchSlice } from './slices/search/searchSlice'

export const store = configureStore({
  reducer: {
    people: peopleSlice.reducer,
    search: searchSlice.reducer
  },
})