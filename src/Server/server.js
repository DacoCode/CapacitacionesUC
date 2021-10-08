import  Reaact, { useState } from 'react'
//Solicitando datos

const url = 'http://127.0.0.1:3002/Users';

//def function
const fetchApi = async () => {

    const response = await fetch(url);
    console.log(response.status);
}



export default fetchApi;