function descargarNuevosClientes(){
    return new Promise((resolve) => {
        console.log('Descargando clientes...');
        setTimeout(() => {
            resolve('Clientes descargaods')
        }, 5000);

    });
}
function descargarNuevosPedidos(){
    return new Promise((resolve) => {
        console.log('Descargando Pedidos...');
        setTimeout(() => {
            resolve('Pedidos descargados')
        }, 3000);

    });
} 

const app = async () =>{
    //consultas independientes 
    try {
        const respuesta = await Promise.all([descargarNuevosClientes(),descargarNuevosPedidos()]);
        console.log(respuesta[0]); 
        console.log(respuesta[1]); 
        } catch (error) {
        console.log(error);
    }
}
app(); 