
 import { AddUser , GetUserN, GetByIdUsers, updateUser, deleteuser} from "../DAL/DALUserJsonfromCinema";
import { Register } from "../DAL/DAL_user";

export const search_All_Movies =  (Current_Array,string) =>

{
    return Current_Array.filter((user) =>  (user.name.includes(string)));
}
 //-->updatinig items

export const regis=async( obj)=>  

{

      return (await  Register(obj) ).data
}

 export  const getAllEmployee=async()=>
{

    const res=await GetUserN()
    return res.data;
}

export   const AddEmployees=async( obj)=>
{

 const res=await AddUser(obj)
 return res.data

}



export const getByIdEmployee=async(id)=>
{

    const res=await GetByIdUsers(id)
    return res.data
}



export const updateEmployee=async(id,obj)=>
{

    const res=await updateUser(id,obj)
    return res.data
}


   export const DeletIdEmployee=async(id)=>
{


     const res=await deleteuser(id)
     return res.data
}
