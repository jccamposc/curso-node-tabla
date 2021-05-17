const fs = require("fs");
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10) => {
  try {
     
    
    let salida = "";
    let consola = '';

    for (let index = 1; index <= hasta; index++) {
      salida += `${base} X ${index} = ${base * index}\n`;
      consola += `${base} ${ 'X'.green } ${index} ${ '='.green } ${base * index}\n`;
    }

    if ( listar ) {
        console.clear();
        console.log("================".rainbow);
        console.log(`  Tabla del ${ base }   `.green);
        console.log("================".rainbow);
        console.log(consola);
      }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo: crearArchivo,
};
