import React, {  useState } from 'react';
import HsntWtchYet from './HsntWtchYet';




export default function MovieWatch(props) {
  const memberID = props.memberID;
  const [openSubcribeToNewMovie, setOpenSubcribeToNewMovie] = useState(false)



                return <div style={{ border: "solid 2px black ", width: "700px", height: "500px" }}>


                  <h6 > Movies Watch </h6>
                  <div >
                    <button onClick={() => setOpenSubcribeToNewMovie(true)} > Subscribe to new movie  </button>
                  </div>
                  {openSubcribeToNewMovie && <HsntWtchYet memberID={memberID} />}





                </div>
}
