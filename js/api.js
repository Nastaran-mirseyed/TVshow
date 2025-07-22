export async function fetchData(id) {
        const config = {
            headers: {
                 Accept: "application/json"
            }
        }
    try {
        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`, config);
        return data;
        
    } catch (error) {
        console.log(error.message);
        
    }
}