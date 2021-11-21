function CallbackHell() {
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
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    if (empleado) {
      callback(null, empleado);
    } else {
      callback(`Empleado con id ${id} no existe`);
    }
  };

  const getSalario = (id, callback) => {
    const salario = salarios.find((s) => s.id === id)?.salario;
    if (salario) {
      callback(null, salario);
    } else {
      callback(`No existe salario para el empleado con id ${id}`);
    }
  };

  const id = 3;

  console.log(
    getEmpleado(id, (err, empleado) => {
      if (err) {
        console.log("ERROR!");
        return console.log(err);
      }
      getSalario(id, (err, salario) => {
        if (err) {
          console.log("ERROR!");
          return console.log(err);
        }
        console.log("El empleado:",empleado.nombre,'tiene un salario de:',salario);
      })
    })
  );

  return <h1>Callback Hell</h1>;
}

export default CallbackHell;