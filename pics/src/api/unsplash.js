import axios from 'axios';

export default  axios.create({
    baseURL:'https://api.unsplash.com',
                    headers: {
                  Authorization: 'Client-ID 24S_17pc-m1QHCVOcoCVwtbVsolC-Sgji_BYX_DIPbM'
              }   
})

