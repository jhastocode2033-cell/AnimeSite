import axios from "axios";  

const BASE_URL = 'https://anime-db.p.rapidapi.com/';
const options = {
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_API_KEY,
		'x-rapidapi-host': 'anime-db.p.rapidapi.com'
	}
};

const FetchAPI = async (url: string) => {
    const {data} = await axios.get(`${BASE_URL}/${url}` , options)
    return data;
}

export default FetchAPI;