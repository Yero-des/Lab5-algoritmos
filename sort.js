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

module.exports = { sortByValue };