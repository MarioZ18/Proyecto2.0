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

var motoristaAct=[]

var ordenes=[
    {
        idPedido:"000001",
        productos:[
            {
                nombreProducto:"Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                imagen:"img/productos.png",
                precio:49.99
             },
            {
                nombreProducto:"Producto 2",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                imagen:"img/productos.png",
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
                imagen:"img/productos.png",
                precio:49.99
             },
            {
                nombreProducto:"Producto 4",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                imagen:"img/productos.png",
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
                imagen:"img/productos.png",
                precio:49.99
             },
            {
                nombreProducto:"Producto 6",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                imagen:"img/productos.png",
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

var paginas=[]

var datosImportant=[]



var horaT=0
var horai=numeroAzar(0,25);
var horaf=numeroAzar(0,25);

if(horaf<horai){
    let temp=0;
    temp=horaf;
    horaf=horai;
    horai=temp;

    horaT=horaf-horai;
}else{
    horaT=horaf-horai;
}

var minuT=0
var minuti=numeroAzar(0,61);
var minutf=numeroAzar(0,61);
if(minutf<minuti){
    
    minuT= 60-minuti+minutf;
    horaT=horaT-1;
}else{
    minuT= minutf-minuti;
}
var ceromf="";
var ceromi="";
var ceromT="";
if (minutf<10){
    ceromf=0;
}
if (minuti<10){
    ceromi=0;
}
if (minuT<10){
    ceromT=0;
}
var cerohf="";
var cerohi="";
var cerohT="";
if (horaf<10){
    cerohf=0;
}
if (horai<10){
    cerohi=0;
}
if (horaT<10){
    cerohT=0;
}
var nestrellas=numeroAzar(0,6)
var estrellas="";

for(let i=0; i<nestrellas;i++){
    estrellas+=`<i class="fas fa-star fa-2x ic2"></i>`;
}
for(let i=0; i<(5-nestrellas);i++){
    estrellas+=`<i class="far fa-star fa-2x ic2"></i>`;
}





function ocultarTodos(){
    let ocultarISesion = document.getElementById('iniciarS');
    ocultarISesion.style.display = 'none';

    let iniM = document.getElementById('inicioMoto');
   iniM.style.display = 'none';


   let ordDis = document.getElementById('ordDispon');
    ordDis.style.display = 'none';

    let listOD = document.getElementById('listaOD');
    listOD.style.display = 'none';

    let detaOD = document.getElementById('detallesOD');
    detaOD.style.display = 'none';

    let ocultarOrdP=document.getElementById('ordProgreso');
    ocultarOrdP.style.display='none';

    let detaOP = document.getElementById('detallesOP');
    detaOP.style.display = 'none';

    let ocultarFinPe=document.getElementById('detallesEntregaOP');
    ocultarFinPe.style.display='none';

    let ocultarOrdC=document.getElementById('ordComplet');
    ocultarOrdC.style.display='none';

    let detaOC = document.getElementById('detallesOC');
    detaOC.style.display = 'none';

    let ocultarFacOC=document.getElementById('detallesEntregaOC');
    ocultarFacOC.style.display='none';

    let ocultarfactOC=document.getElementById('facturaOC');
    ocultarfactOC.style.display='none';

    let ocultarLogoI=document.getElementById('logoIni');
    ocultarLogoI.style.display='none';

    let barraL = document.getElementById('barraLat');
    barraL.style.display = 'none';

    let perfil = document.getElementById('perfil');
    perfil.style.display = 'none';

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



function ocultarAtras(){
    let atr = document.getElementById('atras');
    atr.style.display = 'none';
}
ocultarAtras();

function ocultarBarraLat(){
    let barra = document.getElementById('barraOpc');
    barra.style.display = 'none';
}
ocultarBarraLat();

function mostrarBarraLat(){
    let barra = document.getElementById('barraOpc');
    barra.style.display = 'block';
}



function mostrarAtras(){

    let atr = document.getElementById('atras');
    atr.style.display = 'block';

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


function mostrarIniciarSesión(){
    ocultarTodos();
    ocultarBarraLat();
    ocultarAtras();

    let inS = document.getElementById('iniciarS');
    inS.style.display = 'block';

    document.getElementById('fondo').classList.remove('fondo2');

    
}

mostrarIniciarSesión();






/*--------------------------------------------Validad Formularios----------------------------------------------*/
function validarMoto(){
    motoristaAct=[];
    var correo= document.getElementById("correoMotor").value
    var contra= document.getElementById("contraMotor").value
    var i=0;
    motoristas.forEach(function(motor) {
        if(correo==motor.correo && contra==motor.contraseña){

            motoristaAct.push(motoristas[i]);
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
        i++
   });
}




/*--------------------------------------------Pagina de Inicio----------------------------------------------*/

function pagInicio(){

    ocultarTodos();
    ocultarLogo();
    ocultarAtras();
    mostrarBarraLat();
    let mostrarLogoI=document.getElementById('logoIni');
    mostrarLogoI.style.display='block';

    paginas.splice(pagina);
    var pagina="";

      pagina= {   
            paginaActual:'inici0',
        }
    paginas.push(pagina);

    document.getElementById('fondo').classList.remove('fondo3');
    document.getElementById('fondo').classList.add('fondo2');
    document.getElementById('opciSup').classList.remove('fondoAzl');
   

    let ocultarISesion = document.getElementById('iniciarS');
    ocultarISesion.style.display = 'none';

    let mostrarInicio = document.getElementById('inicioMoto');
    mostrarInicio.style.display = 'block';

    let barra = document.getElementById('barraOpc');
    barra.style.display = 'block';

    let pregunta = document.getElementById('preguntas');
    pregunta.style.display = 'none';

}



/*--------------------------------------------Función ir atras o regresar ----------------------------------------------*/

function volverAtras(){

    

    paginas.forEach(function(pag){
        var pa=pag.paginaActual
        if(pa=="ordDispon" || pa=="ordProgre" || pa=="ordComple"){
            pagInicio();
        }
            
        if(pa=="detallesOD"){
                
            ordenesDisp();
            
        }else{
            if(pa=="pedidoProgreso"){
                datosImportant.forEach(function(d){
                    detallesPedidoActual(d.dato);
                })              
            }
        }



        if(pa=="detallesOP"){
                
            ordenesPro();
            
        }else{
            if(pa=="facturaPP"){
                datosImportant.forEach(function(d){
                    detallesPedidoProgreso(d.idImp,d.lugarImp);
                })              
            }else{
                if(pa=="pedidoFinalizado"){
                    datosImportant.forEach(function(d){
                        fPedidoProgeso(d.idImp,d.lugarImp);
                    }) 
                }
            }
        }

        if(pa=="detallesOC"){
                
            ordenesCompl();
            
        }else{
            if(pa=="facturaPC"){
                datosImportant.forEach(function(d){
                    detallesPedidoCompletado(d.idImp,d.lugarImp);
                })              
            }
        }
              
    })

}



/*--------------------------------------------Generar las ordenes dispobibles----------------------------------------------*/
/*--------------------------------------------Lista de ordenes disponibles----------------------------------------------*/

function ordenesDisp(){
    paginas.splice(pagina);
    var pagina="";

      pagina= {   
            paginaActual:'ordDispon',
        }
    

    paginas.push(pagina);

  
    let ocultarISesion = document.getElementById('iniciarS');
    ocultarISesion.style.display = 'none';
    mostrarAtras();
    document.getElementById('opciSup').classList.add('fondoAzl');
    ocultarTodos();


    document.getElementById('fondo').classList.remove('fondo2');
    document.getElementById('fondo').classList.add('fBlanco');


    mostrarLogo();
    diseño1();
    

    let mostrarOD = document.getElementById('ordDispon');
    mostrarOD.style.display = 'block';
    
    let mostrarLOD = document.getElementById('listaOD');
    mostrarLOD.style.display = 'block';


    document.getElementById('tituloOD').innerHTML =
    `Ordenes Disponibles para Entregar`

    document.getElementById('subTOD').innerHTML =
    `Pedidos`

    document.getElementById('pedidos').innerHTML="";

    
    ordenes.forEach(function(ordDis) {

        
        document.getElementById('pedidos').innerHTML +=
        `<div class="col-12 col-sm-12 col-md-6 col-xl-4 " >
            <div class="card bordes25 mb-4 shadow fondoGris " >  
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
                    <div class="col-2 centery fondoCel botonAceptarO bordAzul bordes25 center fuenteAzul px-3" onclick="detallesPedidoActual('${ordDis.idPedido}');">
                        <i class="fa-regular fa-paper-plane fa-2x"></i>                   
                    </div>
                </div>
                    
            </div>
        </div>`;
   });
}

/*------------------------------------Detalles de la orden disponible seleccionada-------------------------------*/

function detallesPedidoActual(idP){
    paginas.splice(pagina);
    var pagina="";

      pagina= {   
            paginaActual:'detallesOD',
        }
    

    paginas.push(pagina);
   


    datosImportant.splice(pagina);
    var datosImp="";

      datosImp= {   
            dato:idP,
        }
    datosImportant.push(datosImp);

    let ocultarLista = document.getElementById('listaOD');
    ocultarLista.style.display = 'none';
    let mostrarDeta=document.getElementById('detallesOD');
    mostrarDeta.style.display='block';

    document.getElementById('tituloOD').innerHTML =
    `Detalles del Pedido`

    document.getElementById('subTOD').innerHTML =
    `ID: ${idP}`
    
    ordenes.forEach(function(pedido){

        if(pedido.idPedido==idP){
            document.getElementById('detallesOD').innerHTML =
            `
            <div  class="container-fluid">
                <div class="row center">

                    <div class="col-10" >
                        <div class="card bordes25 mb-4 shadow fondoGris center" >  
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
                            <div id="DetaPedidoActual" class="center">
                                <div id="fact1" class="card p-3" >
                            
                               </div>
                            </div>


                            <div class=" mt-3 fuenteCu center">
                                <i class="fa-solid fa-location-dot fuenteAzul fa-2x"></i>
                                ${pedido.lugarEntrega}
                            </div>

                            <div id="telefonoC" class=" my-3 fuenteCu center">
                               
                            </div>


                            <div  id="TomarPed" class="center fuenteCu">
                                <button   id="bTomarPed" class="btn fondoCel bordAzul bordes25 mb-4 shadow" type="button" onclick="pedidoProgeso('${pedido.telefono}','${pedido.idPedido}');">
                                Tomar Pedido
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            
            
            pedido.productos.forEach(function(prod){
                document.getElementById('fact1').innerHTML +=
                `
                <div id="prodF1">
                    <ul>
                        <li>${prod.nombreProducto}</li>
                    </ul>

                    x${prod.cantidad}
                </div>`;
            })
        }


    })


    
}

/*-------------------------------------------Orden disponible tomada----------------------------------------------*/

function pedidoProgeso(telef,idP){

    ocultarAtras();
    agregarPedido(idP);

    paginas.splice(pagina);
    var pagina="";

      pagina= {   
            paginaActual:'pedidoProgreso',
        }
    

    paginas.push(pagina);
    document.getElementById('DetaPedidoActual').innerHTML =
    `
    
    <div class="center fuenteCu my-5">

        <div class="spinner-border fuenteAzul" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        En Progreso
    </div>
    `


    document.getElementById('TomarPed').innerHTML =
            `<button class="btn fondoCel bordAzul bordes25 mb-4 m-l-2 shadow" style="margin-right:15%" type="button" onclick=" pagInicio()">
                Inicio      
            </button>

            <button class="btn fondoCel bordAzul bordes25 mb-4 shadow" type="button" onclick="ordenesPro();">
                Ordenes en Progreso
            </button>
                
            
            
            `

    document.getElementById('telefonoC').innerHTML =
        `
        <i class="fa-solid fa-phone fa-2x fuenteAzul"></i>
        ${telef}
        `


    

}


/*--------------------------------------Asignacion de la orden por el motorista----------------------------------------*/

function agregarPedido(idPedido){
    motoristas.forEach(function(moto){
        motoristaAct.forEach(function(mAc){

            
            if(moto.id==mAc.id){
                var i=0;
                ordenes.forEach(function(pedidos){
                    if(pedidos.idPedido==idPedido){
                        moto.ordenesAceptadas.push(ordenes[i]);
                        pedidos.aceptado=true;
                        ordenes.splice(ordenes[i],1);
                    }
                    i++;
                })
            }
        })
    })

    
}








/*--------------------------------------------Generar las ordenes en progreso----------------------------------------------*/
/*--------------------------------------------Lista de ordenes en progreso----------------------------------------------*/

function ordenesPro(){
    ocultarTodos();
    document.getElementById('tituloOP').classList.remove('fondoAzlC');
    document.getElementById('tituloOP').classList.remove('facturaOrdenL');
    paginas.splice(pagina);
    var pagina="";

      pagina= {   
            paginaActual:'ordProgre',
        }
    

    paginas.push(pagina);

  
    let ocultarISesion = document.getElementById('iniciarS');
    ocultarISesion.style.display = 'none';
    mostrarAtras();
    document.getElementById('opciSup').classList.add('fondoAzl');
    ocultarTodos();


    document.getElementById('fondo').classList.remove('fondo2');
    document.getElementById('fondo').classList.add('fBlanco');


    mostrarLogo();
    diseño2();
    

    let mostrarOP = document.getElementById('ordProgreso');
    mostrarOP.style.display = 'block';
    
    let mostrarLOP = document.getElementById('listaOP');
    mostrarLOP.style.display = 'block';


    document.getElementById('tituloOP').innerHTML =
    `<div class="center">
        Ordenes En Progreso
    </div>`



    document.getElementById('pedidosPro').innerHTML="";


    motoristas.forEach(function(moto){
        motoristaAct.forEach(function(mAc){            
            if(moto.id==mAc.id){

                moto.ordenesAceptadas.forEach(function(ordAcep){
                    document.getElementById('pedidosPro').innerHTML +=
                    `<div class="col-12 col-sm-12 col-md-6 col-xl-4 " >
                        <div class="card bordes25 mb-4 shadow fondoGris " >  
                            <div class=" row center">                     
                                <div class="col-3 center centery" style="margin-left:10px;">
                                    <div class="  fuenteAzul">
                                        <i class="fa-solid fa-spinner fa-4x"></i>
                                    </div>  
                                </div>
                                <div class="col-6 centery fuenteCu py-2 fuenteOD" >
                                    ID del Pedido: ${ordAcep.idPedido}
                                    <br>
                                    <br>
                                    Solicitado por:
                                    <br>
                                    ${ordAcep.cliente}
                                </div>
                                <div class="col-2 centery fondoCel botonAceptarO bordAzul bordes25 center fuenteAzul px-3" onclick="detallesPedidoProgreso('${ordAcep.idPedido}','${ordAcep.lugarEntrega}');">
                                    <i class="fa-solid fa-arrow-right fa-2x"></i>  
                                                     
                                </div>
                            </div>
                                
                        </div>
                    </div>`;
                })       
            }
        })
    })

    
    
}

/*------------------------------------Detalles de la orden en progreso seleccionada-------------------------------*/

function detallesPedidoProgreso(idP,lugarE){
    paginas.splice(pagina);
    var pagina="";

      pagina= {   
            paginaActual:'detallesOP',
        }
    

    paginas.push(pagina);



    let ocultarLista = document.getElementById('listaOP');
    ocultarLista.style.display = 'none';
    let ocultarfactOP=document.getElementById('facturaOP');
    ocultarfactOP.style.display='none';
    let mostrarDeta=document.getElementById('detallesOP');
    mostrarDeta.style.display='block';
    

    document.getElementById('tituloOD').innerHTML =
    `<div class="center" >Detalles del Pedidos</div>
    <hr class="black">
    <div class="center">ID del Pedido: ${idP}</div>`

    document.getElementById('ubicacionOP').innerHTML =
    `Dirección de Entrega: ${lugarE}`

    document.getElementById('btnFact').innerHTML =
        `<div  id="TomarPed" class="center fuenteCu mt-3">
            <button   id="bTomarPed" class="btn fondoCel bordAzul bordes25 mb-4 shadow" type="button" onclick="fPedidoProgeso('${idP}','${lugarE}');">
                Factura del Pedido
            </button>
        </div>`
    
}

/*------------------------------------Factura del pedido en progreso-------------------------------*/
function fPedidoProgeso(idP,l){
    
    paginas.splice(pagina);
    var pagina="";

      pagina= {   
            paginaActual:'facturaPP',
        }
    paginas.push(pagina);

    var datosImp="";

    datosImportant.splice(datosImp);
      datosImp= {   
            idImp:idP,
            lugarImp:l,
        }
    datosImportant.push(datosImp);


    let ocultarDetOP = document.getElementById('detallesOP');
    ocultarDetOP.style.display = 'none';

    let mostrarfactOP=document.getElementById('facturaOP');
    mostrarfactOP.style.display='block';


    document.getElementById('tituloOP').innerHTML =
    `
    <div class="center" >Detalles del Pedidos</div>
    <hr class="black">
    <div class="center">ID del Pedido: ${idP}</div>`

    var subtotal=0;
    document.getElementById('productosOP').innerHTML ="";
    motoristas.forEach(function(moto){
        motoristaAct.forEach(function(mAc){            
            if(moto.id==mAc.id){
                moto.ordenesAceptadas.forEach(function(ordAcep){
                    if(idP==ordAcep.idPedido){

                        ordAcep.productos.forEach(function(prod){
                            document.getElementById('productosOP').innerHTML +=
                            `<div class="col-12 " >
                                <div class="card bordes25 mb-4 mx-3 shadow fondoGris center " >  
                                    <div class=" row center">                     
                                        <div class="col-4 center centery">
                                            <div>
                                            <img src="${prod.imagen}" class="card-img py-1" alt="Imagen Producto" >
                                            </div>  
                                        </div>
                                        <div class="col-7 centery fuenteCu py-2 fuenteOD" >
                                            Nombre del Producto: ${prod.nombreProducto}
                                            <br>
                                            Empresa: XXX
                                            <br>
                                            Precio Unitario:${prod.precio}
                                            <br>
                                            Cantidad: ${prod.cantidad}
    
                                            
                                        </div>
                                    </div>  
                                </div>
                            </div>`
                            
                            subtotal=subtotal+(prod.precio*prod.cantidad);
                        })  

                    }               
                    document.getElementById('btnEntregado').innerHTML =
                    `<div  id="TomarPed" class="center fuenteCu mt-3">
                        <button   id="bTomarPed" class="btn fondoCel bordAzul bordes25 mb-4 shadow" type="button" onclick="pedidoFinalizado('${idP}','${l}');">
                            Finalizar Pedido
                        </button>
                    </div>`

                })  
            
               
            }
        })
    })

    var tarif=50;
    var tot=tarif+subtotal;

    document.getElementById('totalOP').innerHTML =
    `Subtotal: ${subtotal}
    <br>
    Tarifa de envío: ${tarif}
    <hr class="black">
    Total: ${tot}`
}


/*-------------------------------------------Orden finalizada----------------------------------------------*/

function pedidoFinalizado(id,lEntrega){
    ocultarAtras();
    agregarPedidoFinal(id);

    paginas.splice(pagina);
    var pagina="";

      pagina= {   
            paginaActual:'pedidoFinalizado',
        }
    

    paginas.push(pagina);

    var datosImp="";

    datosImportant.splice(datosImp);
      datosImp= {   
            idImp:id,
            lugarImp:lEntrega,
        }
    datosImportant.push(datosImp);

    let ocultarDetOP = document.getElementById('facturaOP');
    ocultarDetOP.style.display = 'none';

    let mostrarfactOP=document.getElementById('detallesEntregaOP');
    mostrarfactOP.style.display='block';

    document.getElementById('tituloOP').classList.add('fondoAzlC');
    document.getElementById('tituloOP').classList.add('facturaOrdenL');

    

    document.getElementById('tituloOP').innerHTML =
    `
    <div class="center">Entrega Finalizada con Exito</div>
    <div class="espacioE blanco fuentePeque mx-3">
        <div class="center">
        Fecha: x/x/2022
        </div>
        <div class="center">
        Hora: ${cerohf}${horaf}:${ceromf}${minutf}
        </div>
    </div>
    
    `
    
    


    document.getElementById('detallesEntregaOP').innerHTML =
    `
    
    
    <div class=" black  mx-3 fuenteCu">
        <div>
            Hora de salida: ${cerohi}${horai}:${ceromi}${minuti}
        </div>
        <div>
            Hora de entrega: ${cerohf}${horaf}:${ceromf}${minutf}
        </div>
        <div >
            Tiempo transcurrido:${cerohT}${horaT}:${ceromT}${minuT}
        </div>
        <br>
        <div>
        Dirección: ${lEntrega}
        </div>
    </div>



    <div class="center my-3">
        <div class="card fuenteCu" style="width: 90%;">
            Calificación del CLiente:
            <br><br>
            <div class="center fuenteAm">
                ${estrellas}  
            </div>
            <br>
            <div class="card-body">
            Comentarios:
            <br>
            <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!
            </div>
            </div>
        </div>
    </div>
    
    <div  id="finPe" class="center fuenteCu mt-3">
        <button   id="bfinPe" class="btn fondoCel bordAzul bordes25 mb-4 shadow" type="button" onclick=" pagInicio()"">
            Aceptar
        </button>
    </div>
   
   
    
    ` 

}

/*-----------------------------------Asignacion de la orden finalizada por el motorista-----------------------*/

function agregarPedidoFinal(idPedido){
    motoristas.forEach(function(moto){
        motoristaAct.forEach(function(mAc){

            
            if(moto.id==mAc.id){
                var i=0;
                moto.ordenesAceptadas.forEach(function(pedidos){
                    if(pedidos.idPedido==idPedido){
                        moto.ordenesCompletadas.push(mAc.ordenesAceptadas[i]);
                        pedidos.aceptado=true;
                        moto.ordenesAceptadas.splice(mAc.ordenesAceptadas[i],1);

                    }
                    i++;
                })
               
            }
        })
    })

    
    
}





/*--------------------------------------------Generar las ordenes finalizadas----------------------------------------------*/
/*--------------------------------------------Lista de ordenes finalizadas----------------------------------------------*/

function ordenesCompl(){
    ocultarTodos();
    
    paginas.splice(pagina);
    var pagina="";

      pagina= {   
            paginaActual:'ordComple',
        }
    

    paginas.push(pagina);

  
    let ocultarISesion = document.getElementById('iniciarS');
    ocultarISesion.style.display = 'none';
    mostrarAtras();
    document.getElementById('opciSup').classList.add('fondoAzl');
    ocultarTodos();


    document.getElementById('fondo').classList.remove('fondo2');
    document.getElementById('fondo').classList.add('fBlanco');


    mostrarLogo();
    diseño3();
    

    let mostrarOP = document.getElementById('ordComplet');
    mostrarOP.style.display = 'block';
    
    let mostrarLOP = document.getElementById('listaOC');
    mostrarLOP.style.display = 'block';


    document.getElementById('tituloOC').innerHTML =
    `<div class="center">
        Pedidos Completados
    </div>
    <hr>
    
    `



    document.getElementById('pedidosCom').innerHTML="";


    motoristas.forEach(function(moto){
        motoristaAct.forEach(function(mAc){            
            if(moto.id==mAc.id){

                moto.ordenesCompletadas.forEach(function(ord){
                    document.getElementById('pedidosCom').innerHTML +=
                    `<div class="col-12 col-sm-12 col-md-6 col-xl-4 " >
                        <div class="card bordes25 mb-4 shadow fondoGris " >  
                            <div class=" row center">                     
                                <div class="col-3 center centery" style="margin-left:10px;">
                                    <div class="  fuenteAzul">
                                        <i class="fa-solid fa-check-double fa-4x"></i>
                                    </div>  
                                </div>
                                <div class="col-8 centery fuenteCu py-2 fuenteOD" >
                                    <div>
                                    ID del Pedido: ${ord.idPedido}
                                    <br>
                                    <br>
                                    Solicitado por:
                                    <br>
                                    ${ord.cliente}
                                    </div>
                                    <button  class="btn my-0 my-sm-0 black center centery fondoCel botonAceptarO bordAzul bordes25 center fuenteAzul p-1"  type="button"  onclick="detallesPedidoCompletado('${ord.idPedido}','${ord.lugarEntrega}');" >
                                        Ver Detalles
                                    </button>

                                    
                                </div>
                                
                            </div>
                                
                        </div>
                    </div>`;
                })       
            }
        })
    })

    
    
}

/*------------------------------------Detalles de la orden finalizada-------------------------------*/

function detallesPedidoCompletado(idP,lugarE){
    paginas.splice(pagina);
    var pagina="";

      pagina= {   
            paginaActual:'detallesOC',
        }
    

    paginas.push(pagina);



    let ocultarListaOC = document.getElementById('listaOC');
    ocultarListaOC.style.display = 'none';

    let ocultarfactOC=document.getElementById('facturaOC');
    ocultarfactOC.style.display='none';
    let mostrarDeta=document.getElementById('detallesOC');
    mostrarDeta.style.display='block';
    let mostrarDetaOC=document.getElementById('detallesEntregaOC');
    mostrarDetaOC.style.display='block';


    document.getElementById('tituloOD').innerHTML =
    `<div class="center" >Detalles del Pedidos</div>
    <hr class="black">
    <div class="center">ID del Pedido: ${idP}</div>`

    document.getElementById('ubicacionOC').innerHTML =
    `Dirección de Entrega: ${lugarE}`

    document.getElementById('btnFactC').innerHTML =
        `<div  id="TomarPed" class="center fuenteCu mt-3">
            <button   id="bTomarPed" class="btn fondoCel bordAzul bordes25 mb-4 shadow" type="button" onclick="fPedidoCom('${idP}','${lugarE}');">
                Factura del Pedido
            </button>
        </div>`

        document.getElementById('detallesEntregaOC').innerHTML =
        `
        
        
        <div class=" black  mx-3 fuenteCu">
            <div>
                Hora de salida: ${cerohi}${horai}:${ceromi}${minuti}
            </div>
            <div>
                Hora de entrega: ${cerohf}${horaf}:${ceromf}${minutf}
            </div>
            <div >
                Tiempo transcurrido:${cerohT}${horaT}:${ceromT}${minuT}
            </div>
            <br>
            <div>
            Dirección: ${lugarE}
            </div>
        </div>
    
    
    
        <div class="center my-3 fuenteCu">
            <div class="card sinBord" style="width: 90%;">
                Calificación del CLiente:
                <br><br>
                <div class="center fuenteAm">
                    ${estrellas}  
                </div>
                <br>
                <div class="card-body">
                Comentarios:
                <br>
                <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!
                </div>
                </div>
            </div>
        </div>
        
        <div  id="finPe" class="center fuenteCu mt-3">
            <button   id="bfinPe" class="btn fondoCel bordAzul bordes25 mb-4 shadow" type="button" onclick=" pagInicio()"">
                Aceptar
            </button>
        </div>
       
       
        
        `
    
}

/*------------------------------------Factura del pedido en progreso-------------------------------*/
function fPedidoCom(idP,l){
    
    paginas.splice(pagina);
    var pagina="";

      pagina= {   
            paginaActual:'facturaPC',
        }
    paginas.push(pagina);

    var datosImp="";

    datosImportant.splice(datosImp);
      datosImp= {   
            idImp:idP,
            lugarImp:l,
        }
    datosImportant.push(datosImp);


    let ocultarDetOC = document.getElementById('detallesOC');
    ocultarDetOC.style.display = 'none';

    let mostrarfactOC=document.getElementById('facturaOC');
    mostrarfactOC.style.display='block';


    document.getElementById('tituloOP').innerHTML =
    `
    <div class="center" >Detalles del Pedidos</div>
    <hr class="black">
    <div class="center">ID del Pedido: ${idP}</div>`

    var subtotal=0;
    document.getElementById('productosOC').innerHTML ="";
    motoristas.forEach(function(moto){
        motoristaAct.forEach(function(mAc){            
            if(moto.id==mAc.id){
                moto.ordenesCompletadas.forEach(function(ord){
                    if(idP==ord.idPedido){

                        ord.productos.forEach(function(prod){
                            document.getElementById('productosOC').innerHTML +=
                            `<div class="col-12 " >
                                <div class="card bordes25 mb-4 mx-3 shadow fondoGris center " >  
                                    <div class=" row center">                     
                                        <div class="col-4 center centery">
                                            <div>
                                            <img src="${prod.imagen}" class="card-img py-1" alt="Imagen Producto" >
                                            </div>  
                                        </div>
                                        <div class="col-7 centery fuenteCu py-2 fuenteOD" >
                                            Nombre del Producto: ${prod.nombreProducto}
                                            <br>
                                            Empresa: XXX
                                            <br>
                                            Precio Unitario:${prod.precio}
                                            <br>
                                            Cantidad: ${prod.cantidad}
    
                                            
                                        </div>
                                    </div>  
                                </div>
                            </div>`
                            
                            subtotal=subtotal+(prod.precio*prod.cantidad);
                        })  

                    }               
                    document.getElementById('btnCompl').innerHTML =
                    `<div  id="finRevis" class="center fuenteCu mt-3">
                        <button   id="bfinRevis" class="btn fondoCel bordAzul bordes25 mb-4 shadow" type="button" onclick="pagInicio();">
                            Aceptar
                        </button>
                    </div>`

                })  
            
               
            }
        })
    })

    var tarif=50;
    var tot=tarif+subtotal;

    document.getElementById('totalOC').innerHTML =
    `Subtotal: ${subtotal}
    <br>
    Tarifa de envío: ${tarif}
    <hr class="black">
    Total: ${tot}`
}







/*--------------------------------------Generar la barra lateral----------------------------------------*/

function barraLateralA(){
    let mostrar=document.getElementById('barraLat');
    mostrar.style.display="block";

    console.log('motorista actual',motoristaAct)

    motoristaAct.forEach(function(mAc){
        document.getElementById('nombreActual').innerHTML =
        `${mAc.nombre} ${mAc.apellido}

        <br>
        <a id="CerrarS" class="fuentePeque fuenteAm" onclick="mostrarIniciarSesión();">Cerrar Sesión</a>|<a id="CambiarS" class="fuentePeque fuenteAm" onclick="mostrarIniciarSesión();">Cambiar Cuenta</a>    
        `
    })

    

}

/*--------------------------------------Ocultar la barra lateral----------------------------------------*/

function barraLateralC(){
    let mostrar=document.getElementById('barraLat');
    mostrar.style.display="none";
}




/*-------------------------------------Pefil actual----------------------------------------*/

function perfilActual(){
    ocultarTodos();

    paginas.splice(pagina);
    var pagina="";

      pagina= {   
            paginaActual:'perfil',
        }
    paginas.push(pagina);


    document.getElementById('fondo').classList.add('fondo3');
    document.getElementById('opciSup').classList.add('fondoAzl');

    let ocultarISesion = document.getElementById('iniciarS');
    ocultarISesion.style.display = 'none';

    let barra = document.getElementById('barraOpc');
    barra.style.display = 'block';

    let mostrarPerfil=document.getElementById('perfil');
    mostrarPerfil.style.display='block';


    motoristaAct.forEach(function(mAc){
        document.getElementById('nombreMoto').innerHTML =
        `${mAc.nombre} ${mAc.apellido}`

        document.getElementById('idMotorista').innerHTML =
        `ID: ${mAc.id}`
        document.getElementById('correoM').innerHTML =
        `Correo Electronico:
        <br>
        ${mAc.correo}
        `
        document.getElementById('telefM').innerHTML =
        `Telefono:
        <br>
        ${mAc.telefono}`

        if(mAc.disponibilidad==true){
            document.getElementById('checkDis').innerHTML =
        `<div>
            <input class="form-check-input" type="checkbox" value="" checked disable>
        </div>`

        }else{
            document.getElementById('checkDis').innerHTML =
        `<div>
            <input class="form-check-input" type="checkbox" value="" disable>
        </div>`
        }  
    })
}
function numeroAzar(min, max) {
    return Math.round(Math.random() * (max - min) + min); 
  }