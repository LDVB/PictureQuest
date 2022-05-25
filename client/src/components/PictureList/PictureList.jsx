
import PictureCard from "../../components/PictureCard/PictureCard"
import { Col, Row,  } from 'react-bootstrap'
import pictureServices from "../../services/pictures.services"
import { useEffect, useState } from "react"

const PictureList = () => {

    let [pictures, setPictures] = useState([])

    useEffect(() => {

        pictureServices
            .getAllPictures()
            .then(({ data }) => setPictures(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <Row>
            {pictures.map(picture => {
                return (
                    <Col md={4} key={picture._id}>
                        <PictureCard {...picture} />
                    </Col>
                )
            })}
        </Row>
    )


}

export default PictureList