const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdvertismentSchema = new Schema({

    contactName:String,
    email:String,
    phone:String,
    
});

const Ads = mongoose.model("AdvertismentModel", AdvertismentSchema);

module.exports = Ads;
        