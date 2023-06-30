const express = require("express");
const router = express.Router();
const {students} = require("../db/models");

router.get("/", async(req, res, next) =>{
    try {
        const allstudents = await students.findAll();
        // error checking
        allstudents? res.status(200).json(allstudents) : res.status(404).send("Campus List Not Found");
    } catch (error) {
        next(error);
    }
});

module.exports = router;