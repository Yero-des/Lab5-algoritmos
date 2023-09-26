const readline = require('readline');
const { sortByValue, searchByName } = require('./functions');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ejecutarMenu = (array) => {

  console.log("AMAZING PETS:");
  console.log("-------------------");
  console.log("1. Ordenar por nombre");
  console.log("2. Ordenar por edad");
  console.log("3. Ordenar por tipo");
  console.log("4. Buscar por nombre");
  console.log("5. Buscar por tipo");
  console.log("6. Buscar por edad");
  console.log("7. Salir");

  rl.question("Selecciona una opción (1/2/3/4/5/6): ", (opcion) =>  {

    switch (opcion) {
      case "1":
        console.log(sortByValue(array, "name"));
        break;
      case "2":
        console.log(sortByValue(array, "age"));
        break ;
      case "3":
        console.log(sortByValue(array, "type"));
        break ;
      case "4":
        return rl.question("Ingresa un nombre a buscar: ", (search) => {
          console.log(searchByName(array, search, "name"));
          return ejecutarMenu(array)
        });    
      case "5":
        return rl.question("Ingresa un tipo de animal a buscar: ", (search) => {
          console.log(searchByName(array, search, "type"));
          return ejecutarMenu(array)
        });  
      case "6": 
        return rl.question("Ingresa una edad a buscar: ", (search) => {
          console.log(searchByName(array, search, "age"));
          return ejecutarMenu(array)
        });  
      case "7":
        console.log("Saliendo del programa");
        return rl.close();
      default:
        console.log("Opción no válida");
    }

    if (opcion !== "7") {
      return ejecutarMenu(array)
    }

    rs.close();
    
  });

}

const array = [
  { id: 1, name: "Luna", age: 3, type: "Perro" },
  { id: 2, name: "Milo", age: 4, type: "Perro" },
  { id: 3, name: "Simba", age: 2, type: "Gato" },
  { id: 4, name: "Bella", age: 5, type: "Perro" },
  { id: 5, name: "Lola", age: 1, type: "Gato" },
  { id: 6, name: "Bruno", age: 2, type: "Perro" },
  { id: 7, name: "Mia", age: 3, type: "Gato" }
];


ejecutarMenu(array);
