import axios from 'axios';

const url = 'https://data.princegeorgescountymd.gov/resource/vkdv-rvfx.json'

export const fetchData = async() => {
    try {
        const { data } = await axios.get(url);
        const trimmedData = data;
        return(trimmedData);
    } catch (error) {

    }
}