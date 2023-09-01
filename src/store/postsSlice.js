import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  job: { description:''},
  status: 'dangerTest',
  id: 13498,
  darkMode: 'light',
  searchText: '',
  searchJobCriteria: { employer_id: 3739 },
  }
const postsSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setSearchJobCriteria(state, action) {
      state.searchJobCriteria = action.payload
    },
    setStatus(state, action) {
      state.status = action.payload
    },
    setId(state, action) {
      state.id = action.payload
    },
    setSearchText(state, action) {
      state.searchText = action.payload
    },
    setFilter(state, action) {
      state.filter = action.payload
    },
    setJob(state, action) {
      state.job = action.payload
    },
    setTtsSpeed(state, action) {
      state.ttsSpeed = action.payload
    },
    setDarkMode(state) {
      state.darkMode = state.darkMode == 'light' ? 'dark' : 'light'
    },
    setStatusId(state, action) {
      console.log(action.payload)
      state.id = action.payload.id
      state.status = action.payload.status
    },
  },
})

export const {
  setSearchJobCriteria,
  setJob,
  setStatus,
  setId,
  setStatusId,
  setDarkMode,
  setSearchText,
  setFilter,
} = postsSlice.actions

export default postsSlice.reducer
