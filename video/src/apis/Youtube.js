import axios from 'axios';
const API_KEY = <fill your key>
// preconfigured instance of axios that already has baseurl and defult parameters loaded into it

export const baseParams = {
  part: "snippet",
  maxResults: 6,
  key: API_KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

//  var Youtube = axios.create({
//     baseURL: "https://www.googleapis.com/youtube/v3",
//     params:{
//         part:'snippet',
//         maxResults: 5,  
//         key: API_KEY
//         }
//  });
// export default Youtube;
// // https://www.googleapis.com/youtube/v3/videos?id=AIzaSyD37HfdcvWBVzkxshB4SPXpfYfxL46Pogw&part=snippet
