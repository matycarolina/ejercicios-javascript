const empleados = [
  {
    id: 1,
    nombre: "Mary",
  },
  {
    id: 2,
    nombre: "Benito",
  },
  {
    id: 3,
    nombre: "Vicky",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1500,
  },
  {
    id: 2,
    salario: 1000,
  },
];

const getEmpleado = (id, callback) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    empleado ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
  });
};

const getSalario = (id, callback) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.salario;
    salario ? resolve(salario) : reject(`No existe salario para el id ${id}`);
  });
};

const id = 3;

/*   getEmpleado(id)
    .then((empleado) => console.log(empleado))
    .catch((err) => console.log(err));

  getSalario(id)
    .then((salario) => console.log(salario))
    .catch((err) => console.log(err)); */

/*  getEmpleado(id)
    .then((empleado) => {
      getSalario(id)
        .then((salario) => {
          console.log(
            "El empleado:",
            empleado,
            "tiene un salario de:",
            salario
          );
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err)); */

let nombre;

getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log("El empleado:", nombre, "tiene un salario de:", salario)
  )
  .catch((err) => console.log(err));
