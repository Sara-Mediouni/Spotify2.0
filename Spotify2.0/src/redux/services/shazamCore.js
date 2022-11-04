import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

 export const shazamcoreApi=createApi({
        reducerPath:'shazamcoreApi',
        baseQuery:fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders:(headers)=>{
                headers.set('x-rapidapi-key','df07ad124bmsh086859e7f05146fp1fd874jsndc974acfa4ae');
       return headers;
    },
            }),
        endpoints:(builder)=>({
          getSongByGenre:builder.query({
            query:(genre)=>`/charts/genre-world?genre_code=${genre}`,
        
          }),
          getSongBySearch:builder.query({
            query:(searchTerm)=>`/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
        
          }),
            getTopCharts:builder.query({
      query:()=>`/charts/world`}),
      getSongDetails:builder.query({
        query:({songid})=>`/tracks/details?track_id=${songid}`,
    
      }),
      getSongRelated:builder.query({
        query:({songid})=>`/tracks/related?track_id=${songid}`,
    
      }),
      getArtistDetails:builder.query({
        query:({artistId})=>`/artists/details?artist_id=${artistId}`
    
      }),
      getSongsByCountry:builder.query({
        query:(countryCode)=>`/charts/country?country_code=${countryCode}`
    }),
})
})
export const {  
    useGetTopChartsQuery,
    useGetArtistDetailsQuery,
    useGetSongDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongRelatedQuery,
    useGetSongByGenreQuery,
    useGetSongBySearchQuery
  }=shazamcoreApi;
    