const express = require("express");
const router = express.Router();
const {Campuses} = require("../db/models");

//use json middleware to notiy server that im taking json middleware
router.use(express.json());

router.get("/", async(req, res, next) =>{
    try {
        const allCampuses = await Campuses.findAll();
        // error checking
        allCampuses? res.status(200).json(allCampuses) : res.status(404).send("Campus List Not Found");
    } catch (error) {
        next(error);
    }
});
router.post("/AddCampus", async(req, res, next) => {
    try {
        const data = req.body;
        console.log("printing data", data);
        await campuses.create(data);
        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        next(error);
    }
});

router.delete("/RemoveCampus/:campusName", async (req, res) => {
    try {
        const routeCampusName = req.params.campusName;
        await campuses.destroy({
            where: {
                name: routeCampusName
            }
        })
        res.status(202).json({message: 'Delete was successfull'});
    } catch(error){
        next(error)
    }
})
router.get('/CampusView/:campusName', async(req, res, next) => {
    try {
        const camusName = req.params.campusName;
        const campusData = await campuses.findOne({where: {name: camusName}});
        res.send(campusData);
    } catch (error) {
        next(error);
    }
})
module.exports = router;