                    import React, { useEffect, useState } from 'react';
                    import { useNavigate, useParams } from 'react-router-dom';
                    import { deleletMember, getByIdMember } from '../DAL/DALMembers';
                    import { deleteSub } from '../DAL/DAL_Sebscription';
                    import Edite from './Edite';
                    import MovieWatch from './MovieWatch';


                    
                    export default function Member(props) {
                        const params = useParams()
                        const navigate = useNavigate()
                        const [member, setMember] = useState();
                        const [openEdite, setOpenEdite] = useState(false)
                 

                        useEffect(async () => {

                            fetch()
                        }, [props, params])


                        const fetch = async () => {

                            setMember(props.member || await getByIdMember(params._id))
                        }

                        const delet = async () => {

                            try {

                                await deleletMember(props.member._id)
                                await deleteSub(props.member._id)
                                if (props.fetch) {

                                    props.fetch()
                                }
                                else {
                                    navigate("/Members")

                                }

                            } catch (error) {
                                console.log(error);
                            }
                        }

                        return <div style={{ border: " solid 2px Violet", width: "700px", height: "500px" }}>
                            <div  >


                                <h6> {props.member.name} </h6> <br />
                                Email: {props.member.email} <br />
                                City:{props.member.city}  <br />

                                <button onClick={() => setOpenEdite(true)}>  Edite </button>  <button onClick={() => delet(member.id)}> Delete </button>


                                <br /> 
                                {openEdite && <Edite id={member._id} fetch={props.fetch} hide={() => setOpenEdite(false)} />}
                                {props.member && <MovieWatch memberID={props.member._id} />}

                            </div>


                        </div>
                    }
