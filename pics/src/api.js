import axios from "axios";

const getData = async (type) => {

    const responseResult = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ladcGkVdefFSMRcrOt0_yPl3NNHXprR1tJH_hrkAUlU`
        },
        params: {
            query: type,
        }
    })

    return responseResult.data.results;
}


export default getData;