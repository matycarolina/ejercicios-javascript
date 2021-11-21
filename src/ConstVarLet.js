function ConstVarLet() {
  const nombre = "Wolverine";
  if (true) {
    let nombre = "Magneto";
    console.log(nombre);
  }
  //var nombre;
  console.log(nombre);

  return <h1>Const vs Var vs Let</h1>;
}

export default ConstVarLet;
