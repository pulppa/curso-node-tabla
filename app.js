
const { error } = require('console');
const { crearArchivo } = require('./helpers/multiplicar');
const { boolean } = require('yargs');
const argv = require('./config/yargs');


console.clear();

//console.log(process.argv);
console.log(argv); 

// const [ , , arg3=5]=process.argv;
// const [,base=5]=arg3.split('=');
// console.log(base);


 
//const base = 7;

   crearArchivo(argv.b,argv.l, argv.h)
       .then( nombreArchivo=> console.log(nombreArchivo,'creado'))
       .catch(err=>console.log(err))




