import axios from 'axios'

class PictureServices {

    constructor(){
        this.api =axios.create ({baseURL:'http://localhost:5005/api/pictures'})
    }

    
    getAllPictures = () => {
        return this.api.get (`/getAllPictures`)
     }

    getOnePicture = id => {
        return this.api.get (`/getOnePicture/${id}`)
     }

    savePicture = picture =>{
        return this.api.post('/savePicture', picture)
    }

    editOnePicture = (id, picture) => {
        return this.api.put(`/modificar-Picture/${id}`, picture)
    }

    deleteOnePicture = id => {
        return this.api.delete (`/deletePicture/${id}`)
     }


 

    
}

const pictureServices = new PictureServices()

export default pictureServices