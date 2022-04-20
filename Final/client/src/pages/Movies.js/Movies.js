                      import { useEffect, useState } from "react"
                      import { GetMovies } from "../DAL/DAL_Movies";
                      import {search_All_Movies } from "../Utils/utils";
                      import Movie from "./Movie";

                      export default function AllMovie() {


                        const [movies, setMovies] = useState([]);
                        const [search, setSearch] = useState('')




                        const GetData = async () => {
                          const res = await GetMovies();
                          setMovies(res.data.slice(0, 30))
                     
                        }

                        useEffect(async () => {

                        GetData()


                        }, [])


                      
                        useEffect(() => {


                        }, [search])


                        const find = async () => {

                          if (!search) {
                            const res = await GetMovies();
                            setMovies(res.data.slice(0, 5))
                            return

                          }

                          const Amovies = await search_All_Movies(movies, search);

                          setMovies(Amovies)
                          setSearch(search)

                        }


                        const MovuesRep = movies.map((movie, index) => {


                          return (

                            <Movie key={index} movie={movie}  getdata={GetData}/>
                          )
                        })


                        return <div style={{
                          border: "solid 2px black", backgroundColor: "#8B4513", position: "relative", width: "700px", height: "200px",

                        }}>All Movies

                          <br/>
                        
                          Find Movie:<input type="text" name="name" placeholder=" Type..." onChange={e => setSearch(e.target.value)} value={search} />

                          <button onClick={find}> Find </button>
                          {MovuesRep}

                        </div>
                      }






