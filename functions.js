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

const searchByValue = (array, rl, prop, ejecutarMenu) => { 
    
  rl.question("Ingresa un nombre a buscar: ", (search) => {

    if (search.toLowerCase() === "exit") {      
      console.log("Operacion finalizada")
      return ejecutarMenu(array);
    }
    
    const temp = array.filter((mascota) => mascota[prop].toString().toLowerCase() === search.toString().toLowerCase());
    
    if (temp.length !== 0) {
      console.log(temp);
    } else {
      console.log("Información no encontrada");
    }
    
    return searchByValue(array, rl, prop, ejecutarMenu);

  });


}

const searchById = (id, array) => {
  const elemento = array.find(item => item.id === id);
  return elemento ? elemento.name : null;
}

const startSearch = (array, rl, ejecutarMenu) => {

  rl.question("Ingrese el ID para obtener el nombre: ", (id) => {

    if (id.toLowerCase() === "exit") {      
      console.log("Operacion finalizada")
      return ejecutarMenu(array);
    }

    const nombre = searchById(parseInt(id), array);
    if (nombre) {
      console.log(`El nombre correspondiente al ID ${id} es: ${nombre}`)
    } else {
      console.log(`No se encontró un elemento con el ID ${id}`)
    }

    return startSearch(array, rl, ejecutarMenu);

  });


}


module.exports = { sortByValue, searchByValue, startSearch};