import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  ttsSpeed: 1,
  status: 'dangerTest',
  id: 13498,
  darkMode: 'light',
  searchText: '',
  filter: 'SELECT questions.priority, questions.id,questions.watchYN, questions.delete1,  questions.sayYN, questions.question,questions.createdAt, questions.updatedAt, newYN , priority FROM questions WHERE questions.delete1=0 and (questions.archiveYN=0)  and (questions.archiveYN=0) AND questions.newYN=1  ORDER BY questions.id;',
  // filter: 'SELECT questions.priority, questions.id,questions.watchYN, questions.delete1,  questions.sayYN, questions.question,questions.createdAt, questions.updatedAt, newYN , priority FROM questions WHERE (questions.id>=${wZi} and ((questions.delete1)=0)  and (questions.archiveYN=0)  and (questions.archiveYN=0) AND questions.newYN =1 ) ORDER BY questions.id DESC;',
}
const postsSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
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
  setTtsSpeed,
  setStatus,
  setId,
  setStatusId,
  setDarkMode,
  setSearchText,
  setFilter,
} = postsSlice.actions

export default postsSlice.reducer
