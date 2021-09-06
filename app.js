const { errorMonitor } = require("stream");
const { options } = require("yargs");
const { CrearArchivo } = require("./Helpers/multiplicar");
const argv = require("./config/yargs");
require("colors");

console.clear();

CrearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
.catch(err => console.log(err));
