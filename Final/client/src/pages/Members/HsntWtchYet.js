
                    import { useEffect, useState } from 'react';
                    import { Link, useNavigate } from 'react-router-dom';
                    import { GetMovies } from '../DAL/DAL_Movies';
                    import { AddSub, GetAllSuub } from '../DAL/DAL_Sebscription';



                    export default function HsntWtchYet(props) {

                        const navigate = useNavigate();
                        const [divDis, setDivDis] = useState('none');
                        const [memberSubs, setMemberSubs] = useState({ _id: "", memberId: "", movies: [] })
                        const [allMovies, setAllMovies] = useState([]);
                        const [selectedMovie, setSelectedMovie] = useState('')
                        const [date, setDate] = useState('')


                        const memberId = props.memberID;
                        useEffect(async () => {
                            async function getMovies() {
                                const res1 = (await GetMovies()).data;
                                const res2 = (await GetAllSuub()).data.find(sub => sub.memberId == memberId)
                                return { res1, res2 }


                                
                            }

                            getMovies().then(res => {
                                setAllMovies(res.res1);
                                setMemberSubs(res.res2);
                            })
                    
                        }, [divDis])


                        const options = allMovies.map((movie, i) => {
                            const IsmovieExist = memberSubs?.movies.find(p => movie._id == p.movieId);
                            if (typeof IsmovieExist != 'object') {
                                return (<option key={i} value={movie._id}>  {movie.name}   </option>)
                            }
                        })
                        const showSubbedMovies = memberSubs?.movies.map((m, i) => {
                            const movie = allMovies.find(movie => movie._id == m.movieId)
                            return <li key={i}>  <Link to={`/FindMovie/${movie.name}`}> {movie.name} </Link> ,{ m.date}    </li>
                        })

                        const SubscribeMovie = () => {

                            if (selectedMovie == 'default' || date == '') {

                                alert(" ==> choose movie & date")
                            }
                            else {

                                const newSub = {

                                    memberId: memberId,
                                    movies: { movieId: selectedMovie, date: date }
                                }

                            AddSub(newSub)

                                setDivDis('none')
                            }
                        }
                        return <div style={{ border: "solid 3px blue", width: "700px", height: "500px"    }}>

                            <button onClick={() => divDis == 'none' ? setDivDis('initial') : setDivDis('none')} > Subscribe to a new movie    </button>

                            <div style={{ display: divDis }}>

                                Add a new movie
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >

                                    <select onChange={e => setSelectedMovie(e.target.value)} style={{ width: '130px' }} >
                                        <option value="default">---Select a Movie--  </option>
                                        {options}

                                    </select>
                                    <input type="date" onChange={e => setDate(e.target.value)} />
                                </div>

                                <button onClick={() => SubscribeMovie( )}>Subscribe</button>     <button  onClick={() => navigate(0)  }> BackToAllMembers    </button>
                            </div>

                            <ul align='left'  >
                                
                                {showSubbedMovies}


                            </ul>

                        </div >



                    }
