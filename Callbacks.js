/* setTimeout(() => {
        console.log('hola mundo')
    }, 1000); */

const getUsuarioByID = (id, callback) => {
  const user = {
    id,
    nombre: "Mary",
  };
  setTimeout(() => {
    callback(user);
  }, 5000);
};
const printUser = (usuario) => {
  console.log(usuario.id);
  console.log(usuario.nombre.toUpperCase());
};

getUsuarioByID(10, printUser);
