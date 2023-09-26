function ordenamientoBurbuja(array) {
  var orden;
  do {
    orden = false;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {

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