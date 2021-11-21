function Callbacks() {
    /* setTimeout(() => {
        console.log('hola mundo')
    }, 1000); */

    const getUsuarioByID = (id, callback) =>{
        const user = {
            id,
            nombre: 'Mary'
        }
        setTimeout(() => {
           callback(user) 
        }, 1500);
    }

    getUsuarioByID(10, (usuario)=>{
        console.log(usuario.id);
        console.log(usuario.nombre.toUpperCase());
    });

    return <h1>Callbacks</h1>;
  }
  
  export default Callbacks;
  