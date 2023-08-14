const fs=require('fs');
var colors = require('colors');

//-------usando promesa
// const crearArchivo=(base=5)=>{
// return new Promise((resolve,reject)=>{

//     let salida='';   

//     console.log('===================')
//     console.log('===Tabla del ' , base)
//     console.log('===================')
    
//         for (let index = 1; index < 11; index++) {
//         const element = base * index;
//         salida +=` ${base} x ${index} = ${element}\n`
//         }   
//         console.log(salida);
//     fs.writeFileSync(`tabla-${base}.txt`,salida)

//     if(salida){
//        resolve(`tabla-${base}.txt`) 
//     }else
//     {
//         reject('No se pudo crear')
//     }     
// }
// )
    

// }

//--lo mismo que arriba pero con async

const crearArchivo= async (base=5,listar = false, hasta = 20)=>{
    
    try {
        let salida, consola ='';   
    
     
        
            for (let index = 1; index < hasta; index++) {
            const element = base * index;
            salida +=`${base} x ${index} = ${element}\n`;
            consola +=` ${colors.green(base)} x ${index} = ${element}\n`;
            } 

            if( listar ){
              console.log('===================')
              console.log('===Tabla del ' , base)
              console.log(colors.red('===================')) 
              console.log(consola);  
            }  
            
        fs.writeFileSync(`tabla-${base}.txt`, salida)
    
      
         return  (`tabla-${base}.txt`) 
    } catch (error) {
        throw (error);
    }
 
    
    
    }
    

module.exports={
    crearArchivo : crearArchivo
}