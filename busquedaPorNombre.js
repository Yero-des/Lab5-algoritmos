function buscarPorNombre(array, nombreBuscado) {
    const resultados = array.filter((mascota) => mascota.name.toLowerCase().includes(nombreBuscado.toLowerCase()));
    return resultados;
  }
  
  module.exports = buscarPorNombre;
  