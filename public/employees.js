const table = document.getElementById("employeeTable");

async function loadEmployees() {

    const response = await fetch("/get/employees");

    const result = await response.json();

    table.innerHTML = "";

    result.data.forEach(emp => {

        table.innerHTML += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.email}</td>
                <td>${emp.salary}</td>
                <td>${emp.department}</td>
            </tr>
        `;

    });

}

loadEmployees();