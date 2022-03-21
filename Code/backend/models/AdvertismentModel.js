const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdvertismentSchema = new Schema({

    type:String,
    town:String,
    AgentRef:String,
    heading:String,
    description:String,
    sizeOfArea:Number,
    priceRate:Number,
    availability:String,
    contactName:String,
    email:String,
    phone:String,
    
});

const Ads = mongoose.model("AdvertismentModel", AdvertismentSchema);

module.exports = Ads;
        