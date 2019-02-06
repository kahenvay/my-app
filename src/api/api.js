import axios from 'axios';

const API = 'https://5c5abb061041df0014b3ee38.mockapi.io/api/v1/';

const getEvents = () => {
    return axios.get(`https://5c5abb061041df0014b3ee38.mockapi.io/api/v1/events`).then((response) => {
        return response.data;
    });
    
};

const getEventsSingle = (id) => {
    return axios.get(`https://5c5abb061041df0014b3ee38.mockapi.io/api/v1/events/${id}`).then((response) => {
        return response.data;
    });
}

export default  {
    getEvents,
    getEventsSingle
}