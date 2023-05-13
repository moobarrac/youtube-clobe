import { InitialState } from '../../Types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getHomePageVideos } from '../reducers/getHomePageVideos';
import { getSearchPageVideos } from '../reducers/getSearchPageVideos';
import { getVideoDetails } from '../reducers/getVideoDetails';
import { getRecommendedVideos } from '../reducers/getRecommendedVideos';

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: '',
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: []
}

const youtubeSLice = createSlice({
  name: 'youtubeApp',
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos =  [];
      state.nextPageToken = null;
    },
    changeSerachTerm: (state, action:PayloadAction<string>) => {
      state.searchTerm = action.payload 
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData
      state.nextPageToken = action.payload.nextPageToken
    });
    builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData
      state.nextPageToken = action.payload.nextPageToken
    });
    builder.addCase(getVideoDetails.fulfilled, (state, action) => {
      state.currentPlaying = action.payload;
    });
    builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
      state.recommendedVideos = action.payload.parsedData;
    });
  }
})

export const { clearVideos, changeSerachTerm, clearSearchTerm } = youtubeSLice.actions;


export default youtubeSLice.reducer
