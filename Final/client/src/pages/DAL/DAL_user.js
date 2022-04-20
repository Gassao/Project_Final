
import axios from "axios";
const url="http://localhost:3005/users" ;



const getuserName= async( )=>await axios.get(url)


const getidfromData=async (id)=>await axios.get(`${url}/${id}`)

const login=async( username,password)=>
{
return await axios.post(`${url}/login`,{ username,password  })
}

const Register=async( element)=>
{

    return  await axios.post( `${url}/register`, element )
}
export { getuserName,getidfromData, login, Register};




