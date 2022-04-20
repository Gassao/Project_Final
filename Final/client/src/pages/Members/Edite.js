                import React, { useEffect, useState } from 'react';
                import { useNavigate } from 'react-router-dom';
                import { getByIdMember, updateMember } from '../DAL/DALMembers';

                export default function Edite(props) {

                    const [member, setMember] = useState({ name: '', email: '', city: '' })
                    const navigate = useNavigate()
                    useEffect(() => {

                        (async function foo() {
                            try {

                                const fetch = await getByIdMember(props.id)
                                delete fetch.ready;
                                setMember(fetch)

                            } catch (error) {
                                console.log(error);
                            }

                        })()
                    }, [])

                    const update = async () => {

                        try {

                            await updateMember(props.id, member)
                            props.fetch();
                            props.hide()

                        } catch (error) {
                            console.log(error);
                        }


                    }

                    return <div style={{ display: props.hide, width: "200px" }}>
                        <div style={{ width: "200px" }}>
                            Name: <input type="text" name="name" onChange={(e) => setMember({ ...member, name: e.target.value })} value={member.name} />
                            Email: <input type="email" name="email" onChange={(e) => setMember({ ...member, email: e.target.value })} value={member.email} />
                            City: <input type="text" name="city" onChange={(e) => setMember({ ...member, city: e.target.value })} value={member.city} />
                            <button onClick={update}> update </button>        <button onClick={() => navigate(0)  }  > back </button>
                        </div>

                    </div>
                }
