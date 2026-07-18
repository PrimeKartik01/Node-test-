const express = require("express");

const router = express.Router();


const { createEmployee, getEmployees } = require("../controllers/employee.controller");
const { createEmployeeValidation, validate } = require("../validations/employee.validation");


router.get("/get/employees", getEmployees);

router.post(
    "/employees",
    createEmployeeValidation,
    validate,
    createEmployee
);


module.exports = router;