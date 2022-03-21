const Ads = require("../models/AdvertismentModel");


 const addAds = (req, res)=>{

  const {type,town,AgentRef,heading,description,sizeOfArea,priceRate,availability,contactName,email,phone} = req.body;
  

  const newAd = new Ads({

      type,
      town,
      AgentRef,
      heading,
      description,
      sizeOfArea,
      priceRate,
      availability,  
      contactName,
      email,
      phone,
  
  });

   newAd.save().then((createdAds)=>{
      res.json(createdAds);
  }).catch((err)=>{
      console.log(error);
  });
};

const getAds = async (req, res) => {

  try{
    const ads = await Ads.find();
    res.json(ads)

  }catch(error){
    res.status(400).json(error);
  }
}

module.exports = {
  addAds,
  getAds
}