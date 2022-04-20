import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetAllSuub } from '../DAL/DAL_Sebscription';
import { getAllMembers } from '../DAL/DALMembers';


export default function SubscrippitionWatch(props) {

  const [movieId, setMovieId] = useState(props.id)
  const [allMembers, setAllMembers] = useState([]);
  const [allSubs, setAllSubs] = useState([]);
  const [showSubbedMovie, setShowSubbedMovie] = useState('none')


  useEffect(async () => {

    const res1 = await (await getAllMembers()).data;
    setAllMembers(res1)
    const res2 = await (await GetAllSuub()).data;
    setAllSubs(res2)

  }, [ ])

  const showSubbedMovies = allSubs?.map((sub, iendex) => {

    const isMovieSubbedTo = sub?.movies.find(sub => sub.movieId == movieId)

    if (typeof isMovieSubbedTo == 'object') {

      const member = allMembers?.find(m => m._id == sub.memberId  ) 
      // option 1 -->This part was not asked to do it.but as -->findMovie.it be worked .because of huge component it show us the part of "Movie watch" this means the same  in to componnet,therefore it bee done like -->findMovie  which is founding in Movies componnents.
      // return <li key={iendex}>  <Link to={`/FindMember/${member?._id }`}> {member?.name}   </Link>  , {isMovieSubbedTo.date}   </li>

      // option 2-->this part was aske to do --> it back and show us all members pages.
      return <li key={iendex}>  <Link to="/members"> {member?.name}   </Link>  , {isMovieSubbedTo.date}   </li>
    }
  })


  return <div style={{
    border: " solid 2px black", width: "160px", height: "200px", position: "absolute", left: "330px",
  }}  >
    <button onClick={() => setShowSubbedMovie(true)}> subscription Watched </button>

    <div style={{ display: showSubbedMovie, fontSize:"8px"}} >


      <ul  >
        {showSubbedMovies}
      </ul>

    </div>
  </div>
}
