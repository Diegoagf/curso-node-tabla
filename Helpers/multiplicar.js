const fs = require('fs');
const { Module } = require('module');
const colors = require("colors");
const CrearArchivo = async(base=1, listar=false, hasta=10) => {
    try {           
            let salida = ``;
        for (let number = 1; number <= hasta; number++) {
            salida += (`${base} X ${number} = ${base*number}\n`);
        }

        if (listar) {
            console.log("==============================".blue);
            console.log( '      TABLA DEL '.blue,colors.bgRed(base));
            console.log("==============================".blue);
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/Tabla-del-${base}.txt`, salida);

        return`Tabla-del-${base}.txt`;
        
    } catch (error) {
        throw error;
    }
    

}

/*const CrearArchivo = (base, callback) =>
        {   
            console.log("==============================");
            console.log( '      TABLA DEL ',base);
            console.log("==============================");
    
            let salida = ``;
            for (let number = 1; number < 11; number++) {
            salida += (`${base} X ${number} = ${base*number}\n`);
      }
            console.log(salida);
            
            return new Promise((resolve, reject) => {               
                if(salida){

                    fs.writeFileSync(`Tabla-del-${base}.txt`, salida);
                    console.log(`Tabla-del-${base}.txt creado`);
                    resolve(`Tabla-del-${base}.txt creado`) 
                } 
                  else{
                    reject(`Error al crear archivo con nombre Tabla-del-${base}.txt`)  
                  }                
                                 
            });               
        }*/








module.exports = {
    CrearArchivo
}