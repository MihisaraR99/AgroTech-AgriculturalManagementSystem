import axios from 'axios'

const HOST = "http://localhost:8000/api"

export const getAllProducts = async () =>{
    try{
        const response = await axios.get(`${HOST}/wholesale/read`)
        return response
    }catch(error){
        console.log("error while retrieving data",error)
        return false;
    }
}

