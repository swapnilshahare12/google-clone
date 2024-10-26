import axios from "axios";

const Base_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key:'AIzaSyDx0bldAw0jaZb99tk5YIg5D4hOriHWe60',
    cx:'a2fcf4cd2dcce4a52'
}

export const fetchDataFromApi = async(payload) => {
    const {data} = await axios.get(Base_URL,{
        params:{...params,...payload}
    })
    return data
};
