import axios from 'axios';

const url = 'https://data.princegeorgescountymd.gov/resource/vkdv-rvfx.json'

export const fetchData = async() => {
    try {
        const response = await axios.get(url);
        return(response);
    } catch (error) {

    }
}