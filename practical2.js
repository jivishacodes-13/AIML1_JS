let employees = [];
function addEmployee(){
    let name = document.getElementById("empname").value;
    let empId = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;
    if (name === "" || dept === "" || isNaN(salary) || dept ===""){
        alert("Please fill all the fields correctly.");
        return;
    } 
    let employee = {
        name: name,
        id : empId,
        salary: salary,
        department: dept};
    employees.push(employee);
    alert("Employee added successfully!");
    document.getElementById("empname").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";

}

function displayEmployees(){
        let output = "<h3>ALL EMPLOYEE:</h3>";
        employees.forEach((emp) => {
            output += `
                Name: ${emp.name} |
                ID: ${emp.id} |
                Salary: ${emp.salary} |
                Department: ${emp.department} <br>
            `;
        });
        document.getElementById("output").innerHTML = output;
}

function filterSalary(){
        let filtered = employees.filter(emp => emp.salary > 50000);
        let output = "<h3>EMPLOYEES WITH SALARY > 50000:</h3>";
        filtered.forEach((emp) => {
            output += `
                Name: ${emp.name} |
                ID: ${emp.id} |
                Salary: ${emp.salary} |
                Department: ${emp.department} <br>
            `;
        });
        document.getElementById("output").innerHTML = output;
}

function totalSalary(){
        let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
        document.getElementById("output").innerHTML = "<h3>Total Salary of All Employees: " + total + "</h3>";
}
function averageSalary(){   
        if (employees.length === 0) {
            document.getElementById("output").innerHTML = "<h3>No employees to calculate average salary.</h3>";
            return;
        }
        let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
        let avg = total / employees.length;
        document.getElementById("output").innerHTML = "<h3>Average Salary of Employees: " + avg + "</h3>";
}  
function countDepartment(){
    let deptName = prompt("Enter department name");
    let count = 0;
    employees.forEach((emp) => {
    if(emp.department === deptName){
        count++;
    }
    });
     document.getElementById("output").innerHTML ="<h3>Employees in " + deptName + ": " + count + "</h3>";
}
   