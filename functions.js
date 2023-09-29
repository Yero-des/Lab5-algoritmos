const sortByValueBurble = (array, prop) => {
  var orden;
  do {

    orden = false; // Se asigna el orden como false

    for (var i = 0; i < array.length - 1; i++) { // Se itera entre todos los valores del array

      if (array[i][prop] > array[i + 1][prop]) {

        // [5, 3, ...] Se toma dos valores dentro del array
        // Intercambiar elementos si están en el orden incorrecto
        var temp = array[i]; // Generamos una variable temporal "5"
        array[i] = array[i + 1]; // Se baja el elemento siguiente una posicion [3, ... ]
        array[i + 1] = temp; // Se sube el elemento actual una posicion [3, 5, ...]
        orden = true; // Se cambia el orden a true

      }

    }

  } while (orden); // El bucle do while se termina cuando todos los elementos esten ordenados

  return array;
}

const SortByValueInsert = (array, prop) => {

  for (let i = 1; i < array.length; i++) { // Se hace una iterado entre los elementos del array comenzando con 1

    const current = array[i]; // Se asigna el elemento actual empezando con array[1]
    let j = i - 1; // Se declara j que es un menor a i en uno

    // [5, 3, ...] Se toma dos valores dentro del array
    // 5 > 3
    while (j >= 0 && array[j][prop] > current[prop]) { // Se hace un iterado entre las propiedades hasta que se ordene
      array[j + 1] = array[j]; 
      j--; 
    }

    array[j + 1] = current; // Se sube el elemento de j una posicion [ 3 , 5, .....]
  }

  return array;

};

const searchByValue = (array, rl, prop, sentence, ejecutarMenu) => { 
    
  rl.question(sentence, (search) => { // Utilizamos la constante rl para recibir datos por consola

    if (search.toLowerCase() === "exit") {  // Si se escribe exit se ejecuta nuevamente la funcion recursiva ejecutarMenu    
      console.log("Operacion finalizada")
      return ejecutarMenu(array);
    }
    
    // Se le asigna una variable temporal el array filtrado segun lo ingresado en consola
    const temp = array.filter((mascota) => mascota[prop].toString().toLowerCase() === search.toString().toLowerCase());
    
    if (temp.length !== 0) { // Si la array no esta vacia se imprime
      console.log(temp);
    } else { // Si la array esta vacia imprime un mensaje
      console.log("Información no encontrada");
    }
    
    return searchByValue(array, rl, prop, sentence, ejecutarMenu); // Se ejecuta la funcion de forma recursiva con datos iguales

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


module.exports = { sortByValueBurble, SortByValueInsert, searchByValue, startSearch};