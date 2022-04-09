const express = require("express");
const router = express.Router();

const{
    addEvent,
    getEvent,
    updateEvent,
    removeEvent,

} = require("../controllers/EventController");

router.get("/all",getEvent);

router.post("/",addEvent);

router.put("/:id",updateEvent);

router.delete("/:id",removeEvent);


module.exports = router;