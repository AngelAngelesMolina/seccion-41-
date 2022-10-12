function cargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;
        setTimeout(() => {
            if (!error) {
                console.log('El listado de clientes se descargó correctamente');
            }
            else {
                reject('Error en la conexión')
            }
        }, 3000);
    });
}

// Asinc Await 

// function expresion 
const ejecutar =async  () =>{
    try {
        console.log(1 + 1);
        const respuesta = await cargarClientes(); //detiene la ejecución del codigo hasta que se resuleve el promise
        
        console.log(respuesta);
    } catch (error) {
        console.log('error');
    }
}
ejecutar(); 