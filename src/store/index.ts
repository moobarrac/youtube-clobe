import { configureStore } from '@reduxjs/toolkit'
import youtubeSlice from './slices/youtubeSlice'


const store = configureStore({
  reducer: {
    youtubeApp: youtubeSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;