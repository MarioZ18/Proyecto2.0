/*    Motoristas Registrados   */
var motoristas=[
    {
        nombre:"José",
        apellido:"Martinez",
        id:"M001",
        correo:"a",
        ubicación:"Tegucigalpa F.M., HN",
        telefono:"9999-9900",
        disponibilidad:true,
        contraseña:"a",
        ordenesAceptadas:[],
        ordenesCompletadas:[]
    },

    {
        nombre:"Marcos",
        apellido:"Sierra",
        id:"M002",
        correo:"sierraM@gmail.com",
        ubicación:"Tegucigalpa F.M., HN",
        telefono:"9999-9901",
        disponibilidad:true,
        contraseña:"1234567890",
        ordenesAceptadas:[],
        ordenesCompletadas:[]
    },
    {
        nombre:"Maria",
        apellido:"Castillo",
        id:"M003",
        correo:"castillosMar41@gmail.com",
        ubicación:"Tegucigalpa F.M., HN",
        telefono:"9999-9903",
        disponibilidad:false,
        contraseña:"contraseña2.0",
        ordenesAceptadas:[],
        ordenesCompletadas:[]
    },
    {
        nombre:"Salmonelo",
        apellido:"Ramos",
        id:"M004",
        correo:"ralmonelozz@gmail.com",
        ubicación:"Tegucigalpa F.M., HN",
        telefono:"9999-9904",
        disponibilidad:true,
        contraseña:"1324576890",
        ordenesAceptadas:[],
        ordenesCompletadas:[]
    },
    {
        nombre:"Camilo",
        apellido:"Madrigal",
        id:"M005",
        correo:"camilegrand01@gmail.com",
        ubicación:"Tegucigalpa F.M., HN",
        telefono:"9999-9905",
        disponibilidad:false,
        contraseña:"nohaycontraseña2",
        ordenesAceptadas:[],
        ordenesCompletadas:[]
    }
]


var ordenes=[
    {
        idPedido:"000001",
        productos:[
            {
                nombreProducto:"Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
             },
            {
                nombreProducto:"Producto 2",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            }
        ],
        lugarVenta:"La Colonia",
        cliente:"sol",
        lugarEntrega:"Tegucigalpa F.M., HN",
        telefono:"9999-9900",
        aceptado:false,
        completado:false
    },
    {
        idPedido:"000002",
        productos:[
            {
                nombreProducto:"Producto 3",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
             },
            {
                nombreProducto:"Producto 4",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            }
        ],
        lugarVenta:"La Colonia",
        cliente:"a",
        lugarEntrega:"Tegucigalpa F.M., HN",
        telefono:"9999-9900",
        aceptado:false,
        completado:false
    },
    {
        idPedido:"000003",
        productos:[
            {
                nombreProducto:"Producto 5",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
             },
            {
                nombreProducto:"Producto 6",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            }
        ],
        lugarVenta:"La Colonia",
        cliente:"a",
        lugarEntrega:"Tegucigalpa F.M., HN",
        telefono:"9999-9900",
        aceptado:false,
        completado:false
    }
]




function ocultarTodos(){
    let iniM = document.getElementById('inicioMoto');
   iniM.style.display = 'none';

   let ordDis = document.getElementById('ordDispon');
    ordDis.style.display = 'none';

    let listOD = document.getElementById('listaOD');
    listOD.style.display = 'none';

    let detaOD = document.getElementById('detallesOD');
    detaOD.style.display = 'none';

    let acepOD = document.getElementById('aceptadoOD');
    acepOD.style.display = 'none';

  /*  let ocultar = document.getElementById('iniciarS');
    ocultar.style.display = 'none';

    let ocultar = document.getElementById('iniciarS');
    ocultar.style.display = 'none';*/

}
ocultarTodos();


function ocultarLogo(){

    let logo = document.getElementById('logoP');
    logo.style.display = 'none';
}
ocultarLogo();

function mostrarLogo(){
    let logo = document.getElementById('logoP');
    logo.style.display = 'block';
}


function diseño1(){
    document.getElementById('franjas').innerHTML =
    `   <div class="fAzulG fondoGen heFran">
            <div class="inv">_</div>
        </div>

        <div class="fCelM fondoGen heFran">
            <div class="inv">_</div>    
        </div>

       `

}

function diseño2(){
    document.getElementById('franjas').innerHTML =
    `   <div class="fAzulG fondoGen heFran">
            <div class="inv">_</div>
        </div>

        <div class="fGrisM fondoGen heFran">
            <div class="inv">_</div>    
        </div>
       `
    
}

function diseño3(){
   
    document.getElementById('franjas').innerHTML =
    `   <div class="fCianG fondoGen heFran">
            <div class="inv">_</div>
        </div>

        <div class="fCelM fondoGen heFran">
            <div class="inv">_</div>    
        </div>

       `
}









function validarMoto(){
    var correo= document.getElementById("correoMotor").value
    var contra= document.getElementById("contraMotor").value

    motoristas.forEach(function(motor) {
        if(correo==motor.correo && contra==motor.contraseña){
            pagInicio();
            
        }else{
            if(correo=="" && contra==""){
                document.getElementById('verif').innerHTML =
                ` No ha ingresado los datos`
                
               
            }else{
                document.getElementById('verif').innerHTML =
                ` Correo o contraseña invalidas`
            }
        }
   });
}


function pagInicio(){

    document.getElementById('fondo').classList.toggle('fondo2');
 

    let ocultar = document.getElementById('iniciarS');
    ocultar.style.display = 'none';

    let mostrar = document.getElementById('inicioMoto');
    mostrar.style.display = 'block';

}


function ordenesDisp(){
    document.getElementById('opciSup').classList.toggle('fondoAzl');
    ocultarTodos();


    document.getElementById('fondo').classList.toggle('fondo2');
    document.getElementById('fondo').classList.toggle('fBlanco');


    mostrarLogo();
    diseño1();
    

    let mostrarOD = document.getElementById('ordDispon');
    mostrarOD.style.display = 'block';
    
    let mostrarLOD = document.getElementById('listaOD');
    mostrarLOD.style.display = 'block';


    document.getElementById('tituloOD').innerHTML =
    `
    Ordenes Disponibles para Entregar
    `

    document.getElementById('subTOD').innerHTML =
    `
    Pedidos
    `


    document.getElementById('pedidos').innerHTML="";

    
    ordenes.forEach(function(ordDis) {

        
        document.getElementById('pedidos').innerHTML +=
        `
            <div class="col-12 col-sm-12 col-md-6 col-xl-4 " >
                <div class="card card1 mb-4 shadow fondoGris " >  
                    <div class=" row center">                     
                        <div class="col-3 center centery" style="margin-left:10px;">
                            <div class="  fuenteAzul">
                                <i class="fa-solid fa-box fa-4x"></i>
                            </div>  
                        </div>
                        <div class="col-6 centery fuenteCu py-2 fuenteOD" >
                           ID del Pedido: ${ordDis.idPedido}
                           <br>
                           <br>
                           Solicitado por:
                           <br>
                            ${ordDis.cliente}
                        </div>
                        <div class="col-2 centery fondoCel botonAceptarO card1 center fuenteAzul px-3" onclick="detallesPedidoActual('${ordDis.idPedido}','${ordDis.cliente}','${ordDis.lugarEntrega}','${ordDis.telefono}');">
                            <i class="fa-regular fa-paper-plane fa-2x"></i>
                           
                        </div>
                    </div>
                    
                </div>
            </div>
            
            `;
        
   });


}


function detallesPedidoActual(idP,nCliente,lugE,telef){

    let ocultar = document.getElementById('listaOD');
    ocultar.style.display = 'none';
    let mostrar=document.getElementById('detallesOD');
    mostrar.style.display='block';

    document.getElementById('tituloOD').innerHTML =
    `
    Detalles del Pedido
    `

    document.getElementById('subTOD').innerHTML =
    `
    ID: ${idP}

    `
    


    ordenes.forEach(function(pedido){
        if(pedido.idPedido==idP){
            document.getElementById('detallesOD').innerHTML =
            `
            <div  class="container-fluid">
                <div class="row center">

                <div class="col-10" >
                <div class="card card1 mb-4 shadow fondoGris center" >  
                    <div class=" row center">                     
                        <div class="col-4 center centery" style="margin-left:10px;">
                            <div class="  fuenteAzul">
                                <i class="fa-solid fa-box fa-4x"></i>
                            </div>  
                        </div>
                        <div class="col-6 centery fuenteCu py-2 fuenteOD" >
                           ID del Pedido: ${pedido.idPedido}
                           <br>
                           <br>
                           Solicitado por:
                           <br>
                            ${pedido.cliente}
                        </div>
                    </div>

                    <div class="center">
                        <div id="d1" class="card p-3" >
                        

                        
                        </div>
                    </div>

                    



                </div>
            </div>
                </div>
            </div> 
            

            `
            console.log('cliente',nCliente)

        }


    })





   /* console.log('cliente',nCliente)
    console.log('lugar',lugE)
    console.log('telefono',telef)*/



}


function nada(){
    var i;
}