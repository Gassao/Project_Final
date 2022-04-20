                    import React, { useEffect, useState } from 'react';
                    import { getAllMembers } from '../DAL/DALMembers';
                    import Member from './Member';




                    export default function Members() {
                        const [members, setMembers] = useState([])

                        useEffect(async () => {

                            fetch();

                        }, [])

                        const fetch = async () => {

                            const res = await getAllMembers();
                            setMembers(res.data);

                        }



                        const membersRep = members.map((member, index) => {


                            return (

                                <Member key={index} member={member} fetch={fetch} />
                            )
                        })
                        return <div style={{ border: "solid 4px black", backgroundColor: "gray", width: "700px" }}    >
                            <span style={{ backgroundColor: "brown" }}>   All Members   </span>

                            {membersRep}



                        </div>
                    }
