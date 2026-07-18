    const { body, validationResult } = require("express-validator");

const createEmployeeValidation = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3, max: 50 })
        .withMessage("Name must be between 3 and 50 characters"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Enter a valid email"),

    body("salary")
        .trim()
        .notEmpty()
        .withMessage("Salary is required")
        .isNumeric()
        .withMessage("Salary must be a number"),

    body("department")
        .trim()
        .notEmpty()
        .withMessage("Department is required")
        .isLength({ min: 2, max: 30 })
        .withMessage("Department must be between 2 and 30 characters")

];

const validate = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(422).json({

            success: false,

            message: "Validation Failed",

            errors: errors.array()

        });

    }

    next();

};

module.exports = {

    createEmployeeValidation,

    validate

};