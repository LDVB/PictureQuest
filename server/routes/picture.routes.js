const router = require ('express').Router();
const Picture = require ( './../models/Picture.model')


router.get('/getallPictures', (req, res, next) => {
    Picture
        .find()
        .select ('title imageUrl')
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

router.get("/getOnePicture/:id", (req, res, next) => {

    const { id } = req.params
  
    Picture
      .findById(id)
      .then(response => res.json(response))
      .catch(err => res.status(500).json(err))
  });


router.post('/savePicture', (req, res,) =>{

    const {title, description, imageUrl} = req.body

    Picture
        .create ({title, description, imageUrl})
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})


router.put ('/modificar-Picture/:id', (req, res) =>{

    const { id } = req.params

    Picture
        .findByIdAndUpdate (id, req.body, { new: true })
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})


router.delete ('/deletePicture/:id', (req, res) =>{

    const {id} = req.params

    Picture
        .findByIdAndDelete(id)
        .then (response =>  res.json (response))
        .catch (err => res.status (500).json(err))
})

module.exports = router