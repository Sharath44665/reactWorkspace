import axios from 'axios';

const searchImages = async function(){
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID apikey"
        },
        params: {
            query: 'nature'
        }
    });

    console.log(response)
    return response;
};

export default searchImages;