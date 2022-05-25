import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PictureCard.css'

const PictureCard = ( {title, imageUrl, _id}) => {
    return (

        <Card className='pictureCard'>
            <Card.Img src={imageUrl} />
            <Card.Body>
                <Card.Title className='title'>{title}</Card.Title>
                <Link to={`/detalles/${_id}`}>
                <Button className='button'>Ver detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default PictureCard