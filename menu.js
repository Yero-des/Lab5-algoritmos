const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function seleccionarOpcion(opcion, array) {
  switch (opcion) {
    case "1":
      break;
    case "2":
      break;
    case "3":
      console.log("Saliendo del programa");
      return;
    default:
      console.log("Opción no válida");
  }
}

const ejecutarMenu = (array) => {

  console.log("AMAZING PETS:");
  console.log("-------------------");
  console.log("1. Ordenar por nombre");
  console.log("2. Ordenar por edad");
  console.log("3. Salir");

  rl.question("Selecciona una opción (1/2/3): ", (opcion) =>  {

    seleccionarOpcion(opcion, array);
    if (opcion == "3") {
      return rl.close();
    }
    ejecutarMenu(array); 
    
  });

}

const array = [
  {
    id: 1,
    name: "Doggy",
  }
]

ejecutarMenu(array);



