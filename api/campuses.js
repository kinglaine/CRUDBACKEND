const express = require("express");
const router = express.Router();
const {campuses} = require("../db/models");

router.get("/", async(req, res, next) =>{
    try {
        const allCampuses = await campuses.findAll();
        // error checking
        allCampuses? res.status(200).json(allCampuses) : res.status(404).send("Campus List Not Found");
    } catch (error) {
        next(error);
    }
});

module.exports = router;