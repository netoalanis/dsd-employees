/**
Desarrolle un programa en Node.js donde la primer versión del API regresa el id y nombre del empleado.
La segunda versión del API, regresará id, nombre y apellido.
Cada versión del API Empleados tendrá su propia ruta en el URL.
Utilice el siguiente ejemplo como apoyo.

// Request packages
var app = express();

// Declare an array of JSON objects
const employees1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" }
];

// Route to employees v2
app.get('/v2/employees', function(req, res) {
  // Print JSON array
  res.json( { employees2 } );
});

app.listen(PORT, function() {
  console.log(`App running in port ${PORT}`);
});
**/

// Request packages
var express = require("express");
var app = express();

// Declare an array of JSON objects
const employees = [
  { id: 1, name: "Rene",    lastname: "von Borstel" },
  { id: 2, name: "Armando", lastname: "Cardenas" },
  { id: 3, name: "Eduardo", lastname: "Quintero" },
  { id: 4, name: "Kevin",   lastname: "Bennett" },
  { id: 5, name: "Vicente", lastname: "Armenta" },
  { id: 6, name: "Israel",  lastname: "Magana" },
  { id: 7, name: "Miguel",  lastname: "Romo" },
];

// return arrays
var employeesv1 = [];
var employeesv2 = [];

// Route to employees v1 regresa el id y nombre del empleado
app.get('/v1/employees', function(req, res) {
  //construct new array
  for(i=0 ; i < employees.length ; i++){
    employeesv1[i] = {id:employees[i].id,
                      fullname:employees[i].name+" "+employees[i].lastname};
  }
  // Print JSON array
  res.json( { employeesv1 } );
});

// Route to employees v2 regresará id, nombre y apellido
app.get('/v2/employees', function(req, res) {
  // Print JSON array
    //for(i=0 ; i < employees.length ; i++){
    //  employeesv2[i] = {id:employees[i].id,
    //                    name:employees[i].name,
    //                    lastname:employees[i].lastname};
    // }
  //construct new array
  employeesv2 = employees ;
  // Print JSON array
  res.json( { employeesv2 } );
});

var PORT = process.env.port || 3000;

app.listen(PORT, function() {
  console.log(`App running in port ${PORT}`);
});