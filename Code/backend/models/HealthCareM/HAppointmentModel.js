const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
      AppointmentNo:{
          type: String
      }, 
       CustomerName:{
          type:String
      },
       NIC:{
           type:String 
      },
       AnimalType:{
           type:String
      },
       ContactNo:{
           type:String
       }

});


module.exports = mongoose.model("PostAppoinment",postSchema)