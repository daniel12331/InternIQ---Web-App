import axios from "axios";

const cutomFetch = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit'
});


export default  cutomFetch