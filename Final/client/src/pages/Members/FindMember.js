import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllMembers } from '../DAL/DALMembers'
import Member from './Member'

export default function FindMember() 
{
const [ findMembers,setFindMembers]=useState([])

const { find}=useParams()
useEffect(()=>{


  async function get(){

      const res=await getAllMembers()
return res;
  }
  get().then( res=>{


      let members=[]
        res.data.map( member=>{

             if( member.name.toLowerCase().includes(find.toLocaleLowerCase()))
             {

               members.push(member)
             }
        })
          setFindMembers(members)
  })
},[find])


 const rep=findMembers.map((member,i)=>{


      return (


          <Member    key={ i} member={member} />
      )
 })
  return (
    <div>


         <div>


               {  rep}
         </div>



    </div>
  )
}
