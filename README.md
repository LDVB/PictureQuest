# PictureQuest


## Description:
PictureQuest is the app where you can save, edit and delete your images. 
You add your photos along with a name and a description.
When you open the app, the landing page is displayed with an image slider, a navigation bar and a footer.

In each of the sections you will find:
-Home: slider
- Image Gallery: this is where all the saved photos are displayed with the identifying title. Here, you can see the details of each image.
- Add Image: you will be able to add new images to the library.
- Details: from this point you can see all the details of an image, as well as delete or edit them by clicking on "Eliminar" or "Editar" respectively.


## Setup:

Clone this repo.
Run $npm install to install the node modules on main folder technicaltest
Create an .env document in Server and add the information below ->
PORT=5005
ORIGIN=http://localhost:3000
MONGODB_URI=yourDBKeys

Create an .envdocument in Client and add the information below ->
REACT_APP_API_URL=http://localhost:5005/api

Import the pictures.json to your database. That's in public folder on Client. There are the used pictures too.

App Run:

Run $cd server and put the comand $npm run dev to connect the server.
Run $cd client and put the comand $npm start to open the app on the browser, in a separate CLI window.


Technologies used:

SERVER: I've used Express/Node for the server part, from where I created the picture model. As for the management of images of the entire application is managed through MongoDB and Mongoose for DB management and the management of images.

CLIENT: On the client side I've used REACT as a library, shelling out the components of the App to obtain a dynamic and attractive Single Page Application. I've used Hooks and Context API. The creative part is made with Bootstrap and CSS.

## Endpoints
HTTP Method	URI path	Description
GET	/	Render home page
GET	/galeria	List of all pictures
POST	/galeria	form to create new picture
GET	/detalles/:id	Render picture details
PUT	/modificarImagen/:id	Handle edit picture form
DELETE deletePicture/:id	Delete a picture
