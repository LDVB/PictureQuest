
import './PictureDetails.css'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button, Col, Row } from "react-bootstrap"
import pictureServices from '../../services/pictures.services'


const PictureDetails = () => {


    const { id } = useParams()
    const [pictureDetails, setPictureDetails] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        pictureServices
            .getOnePicture(id)
            .then(({ data }) => { setPictureDetails(data) })
            .catch(err => console.log(err))
    }, [id])

    const deletePicture = () => {
        pictureServices
            .deleteOnePicture(id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }


    return (
        <div>

            <Row>
                <Col className='name' >
                    <h3>{pictureDetails.title}</h3>
                    <br />
                    <p>{pictureDetails.description}</p>
                </Col>
                <Col>
                    <img className='photo' src={pictureDetails.imageUrl} alt={pictureDetails.title} />
                </Col>
            </Row>

            <div className='space'>
                <Link to={`/modificarImagen/${pictureDetails._id}`}>
                    <Button className='edit' variant="light">Editar Imagen</Button>
                </Link>

                <Button className='delete' variant="light" onClick={deletePicture}>Borrar imagen</Button>

                <Link to='/'>
                    <Button className="volver">Volver</Button>
                </Link>
            </div>

        </div>
    )

}



export default PictureDetails