const router = require("express").Router();

//handle the different routes 
router.use("/campuses", require("./campuses"));
router.use("/students", require("./students"));

//Handling 404 errors
router.use((req, res, next) => {
    const error = new Error("404 Not found");
    error.status = 404;
    next();
});

module.exports = router;