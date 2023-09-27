const readline = require('readline');

const sortByValue = (array, prop) => {
  var orden;
  do {
    orden = false;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i][prop] > array[i + 1][prop]) {

        // Intercambiar elementos si están en el orden incorrecto
        var temp = array[i]; // Generamos una variable temporal
        array[i] = array[i + 1];
        array[i + 1] = temp;
        orden = true;

      }
    }
  } while (orden);
  return array;
}

const searchByValue = (array, search, prop) => {      

  if (search.toLowerCase() === 'exit') {
    return "Operacion cancelada"
  }

  const temp = array.filter((mascota) => mascota[prop].toString().toLowerCase() === search.toString().toLowerCase());

  if (temp.length !== 0) {
    return temp;
  } else {
    return "Información no existe";
  }

}

const searchById = (id, array) => {
  const elemento = array.find(item => item.id === id);
  return elemento ? elemento.name : null;
}

const startSearch = (array, id) => {

  if (id.toLowerCase() === 'exit') {
    return "Operacion cancelada"
  } else {
    const nombre = searchById(parseInt(id), array);
    if (nombre) {
      return `El nombre correspondiente al ID ${id} es: ${nombre}`
    } else {
      return `No se encontró un elemento con el ID ${id}`
    }
  }

}


module.exports = { sortByValue, searchByValue, startSearch};