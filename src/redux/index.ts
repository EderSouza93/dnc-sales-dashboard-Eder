import { configureStore } from '@reduxjs/toolkit'
import createProfileReduce from './slices/createProfile'

const store = configureStore({
  reducer: {
    createProfile: createProfileReduce,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
