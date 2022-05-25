
import { Link } from 'react-router-dom'
import { Form, Button} from 'react-bootstrap'
import './NewImagePage.css'
import pictureServices from '../../services/pictures.services'
import { useState } from 'react'


const NewImagePage = ({refresh}) => {


    const [picturesData, setPicturesData] = useState({

        title:'',
        imageUrl:'',
        description:'',

    })

    const {title, imageUrl, description} = picturesData

    const handleImputChange = e => {

        const { value, name } = e.target

        setPicturesData({
            ...picturesData,
            [name]: value  
        })

    }
    const handleSubmit = e => {

        e.preventDefault()
            
        pictureServices 
            .savePicture(picturesData)
            .then(({ data }) => {refresh()})
            .catch(err => console.log(err))
    }


    return (
        <>  

            <img className='pic' src= "picture-gallery.png"/>
            <div className='card-form'>
           
            <Form class="card-form" onSubmit={handleSubmit} >
			<div class="input">
				<input type="text" class="input-field" value={title} onChange={handleImputChange} name= 'title'/>
				<label class="input-label">Título</label>
			</div>
			<div class="input">
				<input type="url" class="input-field" value={imageUrl} onChange={handleImputChange} name='imageUrl'/>
				<label class="input-label">Pega aqui el URL de la imagen</label>
			</div>
            <div class="input">
				<input type="text" class="input-field" value={description} onChange={handleImputChange} name='description'/>
				<label class="input-label">Incluye la descripción de la imagen</label>
			</div>
					
			<div>
				<button class="action" >Guardar imagen</button>
			</div>
		    </Form>
            </div>
 
                    <Link to={`/`}>
                        <Button className='atras'>Volver</Button>
                    </Link>



        </>
    )

}

export default NewImagePage