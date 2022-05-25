import './PictureEdit.css'
import pictureServices from '../../services/pictures.services'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'


const PictureEdit = () => {

        const [picturesData, setPicturesData] = useState({
            title:'',
            imageUrl:'',
            description:''
        })

        const {id} = useParams()

        const {title, imageUrl, description} = picturesData

        const navigate = useNavigate()

        useEffect(()=> {
            pictureServices
                .getOnePicture(id)
                .then(({data})=> setPicturesData(data))
                .catch(err => console.log(err))
        }, [])

        const handleImputChange = e => {

            const {value, name} = e.currentTarget
            

            setPicturesData({
                ...picturesData,
                [name]: value
            })


        }

        const handleSubmit = e => {

            e.preventDefault()
    
            pictureServices

                .editOnePicture (id, picturesData)
                .then(({ data }) => {
                    console.log("se ha modificado la imagen", data)
                    navigate("/galeria")
                })
    
                .catch(err => console.log(err))
        }

        return (
            <>
                <img className='pic2' src= "\rodillo.png"/>

                <Form onSubmit={handleSubmit} className ="card-form2">
                    
                <div class="input">
				    <input type="text" class="input-field" controlId={title} onChange={handleImputChange} name= 'title'/>
				    <label class="input-label">Título</label>
			    </div>
			    <div class="input">
				    <input type="url" class="input-field" controlId={imageUrl} onChange={handleImputChange} name='imageUrl'/>
				    <label class="input-label">Pega aqui el URL de la imagen</label>
			    </div>
                <div class="input">
				    <input type="text" class="input-field" controlId={description} onChange={handleImputChange} name='description'/>
				    <label class="input-label">Incluye la nueva descripción de la imagen</label>
			    </div>
					
			<div>
				<button class="action" >Modificar imagen</button>
			</div>
                </Form >

        </>

        )

}

 
export default PictureEdit