const form = document.getElementById("employeeForm");

// Create Employee
form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const employee = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        salary: document.getElementById("salary").value,
        department: document.getElementById("department").value

    };

    try {

        const response = await fetch("/employees", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(employee)

        });

        const result = await response.json();

        if (!response.ok) {

            result.errors.forEach(error => {

                document.getElementById(`${error.path}Error`).innerText = error.msg;

            });

            return;

        }

        alert(result.message);

        form.reset();

    } catch (error) {

        console.error(error);

    }

});