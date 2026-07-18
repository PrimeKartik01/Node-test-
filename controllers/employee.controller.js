const Employee = require("../models/employee.model");

const createEmployee = async (req, res) => {

    try {
        const { email } = req.body;

        const employeeExists = await Employee.findOne({ email });

        if (employeeExists) {

            return res.status(409).json({

                success: false,
                message: "Validation Failed",
                errors: [
                    {
                        path: "email",
                        msg: "Email already exists"
                    }
                ]

            });

        }

        const employee = await Employee.create(req.body);

        res.status(201).json({

            success: true,

            message: "Employee Created Successfully",

            data: employee

        });

    } catch (error) {

        console.error(error);
        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();

        res.status(200).json({
            success: true,
            data: employees
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {

    createEmployee,
    getEmployees

};