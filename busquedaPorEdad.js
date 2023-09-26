function buscarPorEdad(array, edadBuscada) {
    const resultados = array.filter((mascota) => mascota.age === parseInt(edadBuscada));
    return resultados;
  }
  
  module.exports = buscarPorEdad;
  