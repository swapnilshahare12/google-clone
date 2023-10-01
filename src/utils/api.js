import axios from "axios";

const Base_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key:'Your google search api key',
    cx:'your google search cx'
}

export const fetchDataFromApi = async(payload) => {
    const {data} = await axios.get(Base_URL,{
        params:{...params,...payload}
    })
    return data
};
