import {Routes, Route} from 'react-router-dom'
import EditPage from '../pages/EditPage/EditPage'
import GaleryPage from '../pages/GaleryPage/GaleryPage'
import Landing from '../pages/LandingPage/LandingPage'
import NewImagePage from '../pages/NewImagePage/NewImagepage'
import PictureDetailsPage from '../pages/PictureDetailsPage/NewImagePage/PictureDetailsPage'



const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path = '/nuevaImagen' element={<NewImagePage/>}/>
            <Route path = '/galeria' element={<GaleryPage/>}/>
            <Route path = '/detalles/:id' element={<PictureDetailsPage/>}/>
            <Route path = '/modificarImagen/:id' element={<EditPage/>}/>

            <Route path='*' element={<h1>Error 404</h1>} />         
        </Routes>
    )

}

export default AppRoutes