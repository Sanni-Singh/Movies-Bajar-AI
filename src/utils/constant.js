const tmdbApiKey = import.meta.env.VITE_TMDB_KEY; 
const geminiApiKey = import.meta.env.VITE_GeminiApi; 

export const API_OPTION =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${tmdbApiKey}`
    }
  };
export const GeminiApi = geminiApiKey;
  export const SearchFieldBackgroundImg = "https://images.pexels.com/photos/7234386/pexels-photo-7234386.jpeg"
 export const IMG_CDN = "https://image.tmdb.org/t/p/w500"
