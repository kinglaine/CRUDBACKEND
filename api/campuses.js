const express = require("express");
const router = express.Router();
const {Campuses} = require("../db/models");
const {Students} = require("../db/models");
const { where } = require("sequelize");

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
        await Campuses.create(data);
        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        next(error);
    }
});

router.delete("/RemoveCampus/:campusName", async (req, res) => {
    try {
        const routeCampusName = req.params.campusName;
        await Campuses.destroy({
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
        const campusData = await Campuses.findOne({where: {name: camusName}});
        res.send(campusData);
    } catch (error) {
        next(error);
    }
})

router.get('/CampusView/:campusName/Students', async(req, res, next) => {
    try {
        const campusName = req.params.campusName;
        console.log("this is the campus name", campusName);
        const campusId = await Campuses.findOne({where: {name: campusName}});
        const campusData = await Students.findAll({where: {campusId: campusId.dataValues.id}});
        res.send(campusData);
    } catch (error) {
        next(error);
    }
});

router.put('/EditCampus/:campusName', async(req, res, next) => {
    try {
        const campusName = req.params.campusName;
        const data = req.body;
        console.log("this is the campus name", campusName);
        let row = await Campuses.findOne({where: {name: campusName}});
        row.update(data)
        row.save();
        res.send({message:"Row Updated to", data: row.dataValues});
    } catch (error) {
        next(error);
    }
})
module.exports = router;