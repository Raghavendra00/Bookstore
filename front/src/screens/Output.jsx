import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'


const Output = () => {

    let { name } = useParams();
    const baseURL = "http://localhost:5500";

    const [details,setDetails] = useState({})

    useEffect(() => {
    axios
      .post(`${baseURL}/search`, {
       name 
      })
      .then((res) => {
        console.log("Response:",res);
          if (res.data.code === 1) {
            setDetails(res.data.info)
          }
          else if (res.data.code === -1) {
              alert('No user found')
            }
            else {
              alert('Try Again')

          }
      });
    }, [name])



    return (
        <div>
            <h1>First Name : {details.firstname}</h1>
            <h1>Email : {details.email}</h1>
        </div>
    )
}

export default Output
