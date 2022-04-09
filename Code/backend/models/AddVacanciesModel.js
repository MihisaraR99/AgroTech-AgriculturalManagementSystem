const mongoose = require('mongoose')

const AddVacanciesSchema = mongoose.Schema({
   vacancyNo:String,
   jobTitle:String,
   location:String,
   jobDescription:String,
    
});

const AddVacanciesModel = mongoose.model("AddVacanciesModel", AddVacanciesSchema);
module.exports = AddVacanciesModel;