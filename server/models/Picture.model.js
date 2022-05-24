const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const pictureSchema = new Schema(
  {
    title: {
      type: String,
      unique: true 
    },
    description: {
      type: String,
      required: [true, 'la descriptión es obligatoria'],
      minlenght: [20, 'la descripción debe tener min, 20 caracteres']
    },
    imageUrl: {
      type: String,
      required: [true, 'la imagen es obligatoria']
    }
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Picture = model("Picture", pictureSchema);

module.exports = Picture;
