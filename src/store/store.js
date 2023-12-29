import { configureStore } from '@reduxjs/toolkit'
import { peopleSlice } from './slices/people/peopleSlice'

export const store = configureStore({
  reducer: {
    people: peopleSlice.reducer
  },
})