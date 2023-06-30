const campuses = require("./campuses");
const students = require("./students");
//Associsation
campuses.belongsToMany(students, {through: "StudentsCampuses"});
students.belongsToMany(campuses, {through: "StudentsCampuses"});

module.exports = {
    campuses,
    students
};
