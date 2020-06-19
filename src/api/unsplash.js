import axios from 'axios';

export default axios.create({
    
          
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID 5jpN0HQu4Xvd1uydD8Knjz7amBu41iKsavu_JwsCbPk'
    }
});

