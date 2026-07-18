const express = require("express");
const path = require("path");

const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employee.routes");

const app = express();

const PORT = 3000;

// Connect MongoDB
connectDB();

// Middlewares
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});