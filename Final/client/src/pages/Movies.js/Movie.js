                        import React, { useState } from 'react';
                        import { deleteMovie } from '../DAL/DAL_Movies';
                        import Edite from './Edite';

                        import SubscrippitionWatch from './SubscrippitionWatch';

                        export default function Movie(props) {

            

                            
                            const [DisplayUpdate, setDisplayupdate] = useState(false)
                            var genres = '';
                            props.movie.genres.forEach(genre => genres += `${genre},`);

                            const delet = async () => {
                                const id = props.movie._id

                                try {
                                    await deleteMovie(id)
                                    props.getdata()

                                } catch (error) {
                                    console.log(error);
                                }

                            }

                            return <div style={{
                                backgroundColor: "#a65959", 
                                border: " solid 1px black "
                            }}>
                                <div style={{ right: "400px" }}>

                                    {props.movie.name} ,  {props.movie.Premiered.slice(0, 4)} <br />
                                    Genres: {genres.slice(0, -2)}
                                    <br />
                                    {<img src={props.movie.image} style={{ width: "70px" }} />}
                                    <br /> <br />
                                    <div style={{ width: "200px", height: "300px" }}  >

                                        {<SubscrippitionWatch id={props.movie._id} />}
                                        <button onClick={() => setDisplayupdate(true)}>    Edite</button> <button onClick={delet}>  Delete</button>
                                        {DisplayUpdate && <Edite id={props.movie._id} movie={props.movie} />}


                                    </div>

                                </div>

                            </div>

                        }
