const mongoose = require('mongoose')

const AdvertiserSchema = mongoose.Schema({
   
    Adv_name:String,
    Adv_nic_no:String,
    Adv_address:String,
    Adv_mobile:String,
    Adv_email:String,

});

const Advertiser = mongoose.model("AdvertiserModel", AdvertiserSchema);
module.exports = Advertiser;