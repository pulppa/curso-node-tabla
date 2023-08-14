const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    describe:'es la base del calculo de multiplicar'       
                })
                .option('l',{
                    alias:'listar',
                    type :'boolean',
                    default:false,
                    describe:'lista la tabla'
                })
                .option('h',{
                    alias: 'hasta',
                    type : 'number',
                    default : 10,
                    describe : 'hasta donde llega la multiplicacion'
                })
                .check((argv, options)=>{
                    if(isNaN(argv.b)){
                        throw'la base tiene que ser un numero'; 
                    }
                    return true;
                })
                .argv;
module.exports = argv ;
