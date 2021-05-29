const router = require("express").Router();
const employeeController = require("../../client/controllers/employeeController");

//`https://randomuser.me/api/?results=${num}&inc=name,gender,location,email,dob,registered,phone,cell,id,picture&nat=us&noinfo`

router.route("/employees")
    .post(employeeController.insertCurrent)
    .get(employeeController.getCurrent);

router.route("/new")
    .post(booksController.insertNew)
    .get(employeeController.getNew);

router.route("/future")
    .update(booksController.fastForward);

router.route("/past")
    .update(booksController.backInTime)

router.route("/birthday")
    .get(employeeController.getBirthday);

module.exports = router;