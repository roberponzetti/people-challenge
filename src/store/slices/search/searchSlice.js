import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    badge: false
  },
  reducers: {
    setBadge: (state, action) => {
      state.badge = action.payload.badge;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload.searchTerm;
    }
  },
})

export const { setBadge, setSearchTerm } = searchSlice.actions