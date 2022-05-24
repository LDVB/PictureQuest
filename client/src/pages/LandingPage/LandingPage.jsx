import axios from 'axios'
import { useEffect, useState } from "react"


const Landing = () => {

    let [ pictures, setPictures] = useState([])

    useEffect(() => {

         axios
            .get ('http://localhost:5005/api/pictures/getAllPictures')
            .then (({data}) => setPictures (data) )
            .catch (err=>console.log(err))

    }, [])


    return (
       <ul>
         {pictures.map(pictures => <li>{pictures.title}</li>)}
       </ul>
    )

}

export default Landing