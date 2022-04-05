var empresas=[
    {
        nombreE:"pollo",
        catE:"comida",
        telefE:"98989898",
        representanteE:"Joel",
        RTNE:"00000001",
        logoE: "img/EmpresaLogo.png"    
    }
]

var productos=[{
    nombreProd:'pollo',
    precProd:'20',
    catProd:'comida',
    emProd:'pollo',
    dispProd:true,
    sucurPro: 'Centro',  
    descProd:'Lorem ipsum dolor sit amet consectetur adipisicing elit .',
    imgProd:'img/productos.png',
       
}]

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
var administas=[]

var pedidos=[]

var empresaAñadir=[]
var productoAñadir=[]

var perfiles=[
    {
        nombre:'Carlos',
        apellido:'Sierra',
        correo:'a',
        contraseña:'a',
        ubicacion:'Tegucigalpa FM., HN'
    },
    {
        nombre:'Martin',
        apellido:'Santos',
        correo:'martin@gmail.com',
        contraseña:'qwerty',
        ubicacion:'Tegucigalpa FM., HN'
    },
    {
        nombre:'Sarah',
        apellido:'Fortune',
        correo:'sarah@gmail.com',
        contraseña:'aqwert',
        ubicacion:'Tegucigalpa FM., HN'
    },
    {
        nombre:'David',
        apellido:'Martinez',
        correo:'david@gmail.com',
        contraseña:'aaqwerty',
        ubicacion:'Tegucigalpa FM., HN'
    },
]

var perfilActual=[]


var disponMoto="";






function mostrarFondo1(){
    document.getElementById('fondo').classList.add('fondoIniciarS');
}
mostrarFondo1();

function ocultarTodos(){
    let oinicioW=document.getElementById('inicioW');
    oinicioW.style.display='none';

    let oEmpresas=document.getElementById('empresas');
    oEmpresas.style.display='none';

    let oProductos=document.getElementById('productos');
    oProductos.style.display='none';

    let oMotoristas=document.getElementById('motoristas');
    oMotoristas.style.display='none';

    let oPedidos=document.getElementById('pedidos');
    oPedidos.style.display='none';

    let oPerfil=document.getElementById('perfil');
    oPerfil.style.display='none';

    let oAñadirEmpresa=document.getElementById('añadirEmpresa');
    oAñadirEmpresa.style.display='none';

    let oEliminarEmpresa=document.getElementById('eliminarEmpresa');
    oEliminarEmpresa.style.display='none';

    let oListaEmpresa=document.getElementById('listaEmpresas');
    oListaEmpresa.style.display='none';

    let genlistE=document.getElementById('genListaE');
    genlistE.style.display='none';

    let oAñadirProd=document.getElementById('añadirProducto');
    oAñadirProd.style.display='none';

    let oEliminarProd=document.getElementById('eliminarProducto');
    oEliminarProd.style.display='none';

    let oListaProd=document.getElementById('listaProductos');
    oListaProd.style.display='none';

    let genlistProd=document.getElementById('genListaE');
    genlistProd.style.display='none';

    let oMotoristasT=document.getElementById('motoristasT');
    oMotoristasT.style.display='none';

    let oMotoristasDat=document.getElementById('perfilMotoAct');
    oMotoristasDat.style.display='none';

    let oParteSup=document.getElementById('parteSup');
    oParteSup.style.display='none';

 
}
ocultarTodos();


function ocultarPSeIni(){
    let oParteSup=document.getElementById('parteSup');
    oParteSup.style.display='none';
    let oInicioS=document.getElementById('inicioAdm');
    oInicioS.style.display='none';
    

}
ocultarPSeIni();


function ocultarSelec(){
    document.getElementById('inicioWL').classList.remove('fondoAzulP');
    document.getElementById('empresasL').classList.remove('fondoAzulP');
    document.getElementById('productosL').classList.remove('fondoAzulP');
    document.getElementById('motoristasL').classList.remove('fondoAzulP');
    document.getElementById('pedidosL').classList.remove('fondoAzulP');
    document.getElementById('perfilL').classList.remove('fondoAzulP');
}

/*--------------------------------------------Validad Formularios----------------------------------------------*/
function validarCuentaAdm(){
    perfilActual=[];
    var correo= document.getElementById("correoAdm").value
    var contra= document.getElementById("contraAdm").value
    var i=0;
    perfiles.forEach(function(admin) {
        if(correo==admin.correo && contra==admin.contraseña){
            document.getElementById('verificacion').innerHTML =
            ` `
            perfilActual.push(perfiles[i]);
            inicioAdm();
            
        }else{
            if(correo=="" && contra==""){
                document.getElementById('verificacion').innerHTML =
                ` No ha ingresado los datos`
                
               
            }else{
                document.getElementById('verificacion').innerHTML =
                ` Correo o contraseña invalidas`
            }
        }
        i++
   });
}


/*--------------------------------------------Pagina de Inicio----------------------------------------------*/

function inicioAdm(){

    ocultarTodos();
    ocultarSelec();
    document.getElementById('fondo').classList.remove('fondoIniciarS');
    document.getElementById('fondo').classList.add('fondoBlanco');

    document.getElementById('inicioWL').classList.add('fondoAzulP');

    let oIS=document.getElementById('iniciarSes');
    oIS.style.display='none';
    let mLogoSup=document.getElementById('parteSup');
    mLogoSup.style.display='block';
    let mInicio=document.getElementById('inicioAdm');
    mInicio.style.display='block';
    let minicioW=document.getElementById('inicioW');
    minicioW.style.display='block';


}

/*--------------------------------------------Pagina de Empresas----------------------------------------------*/

function empresasAdm(){

    ocultarTodos();
    ocultarSelec();
    document.getElementById('empresasL').classList.add('fondoAzulP');

    let inicioW=document.getElementById('inicioW');
    inicioW.style.display='none';

    let empres=document.getElementById('empresas');
    empres.style.display='block';

  
}

function añadirEmpresa(){
    ocultarTodos();
    let añadirEmpresa=document.getElementById('añadirEmpresa');
    añadirEmpresa.style.display='block';

    let formAñEm=document.getElementById('formAñadirE');
    formAñEm.style.display='block';

    let revAñEm=document.getElementById('revisAñadorE');
    revAñEm.style.display='none';
    let finAñ=document.getElementById('eAñadida');
    finAñ.style.display='none';

    document.getElementById('nombAñEm').value="";
    document.getElementById('catAñEm').value="";
    document.getElementById('telefAñEm').value="";
    document.getElementById('repreAñEm').value="";
    document.getElementById('rtnAñEm').value="";
    document.getElementById('logoAñEm').value="";
}

function revisarEmpresaAñ(){
   
    var nAñE=document.getElementById('nombAñEm').value;
    var catAñE=document.getElementById('catAñEm').value;
    var telAñE=document.getElementById('telefAñEm').value;
    var repreAñE=document.getElementById('repreAñEm').value;
    var rtnAñE=document.getElementById('rtnAñEm').value;
    var urlAñE=document.getElementById('logoAñEm').value;

    empresaAñadir=[];

    
    empresaAñadir= [{
        nombreE:nAñE,
        catE:catAñE,
        telefE:telAñE,
        representanteE:repreAñE,
        RTNE:rtnAñE,
        logoE: urlAñE    
    }]

    

    let formAñEm=document.getElementById('formAñadirE');
    formAñEm.style.display='none';

    let revAñEm=document.getElementById('revisAñadorE');
    revAñEm.style.display='block';

    document.getElementById('logoRevE').innerHTML =
    `
    
    <div class=" p-3 cuprum">
    Logo
    <br>
        <img src="${urlAñE}" class="card-img py-1" alt="Imagen Empresa" >
    </div>
    `

    document.getElementById('datosRevE').innerHTML =
    `
    Nombre de la Empresa: ${nAñE}
    <br>
    Categoria: ${catAñE}
    <br>
    Numero de Telefono:${telAñE}
    <br>
    Representante: ${repreAñE}
    <br>
    RTN: ${rtnAñE}
    `



}


function finalizarAñ(){

    console.log('empresasA', empresaAñadir);

    let formAñEm=document.getElementById('formAñadirE');
    formAñEm.style.display='none';

    let revAñEm=document.getElementById('revisAñadorE');
    revAñEm.style.display='none';

    let finAñ=document.getElementById('eAñadida');
    finAñ.style.display='block';

    empresaAñadir.forEach(function(añE){
        if(añE.nombreE=="" && añE.catE=="" && añE.telefE=="" && añE.representanteE=="" && añE.RTNE=="" ){
            document.getElementById('eFAñadida').innerHTML=
            ` 
            <h2> 
                La empresa no se ha añadido
                <br>
                Datos Insuficientes
                <br>
                <i class="fa-solid fa-circle-xmark fuenteAzul fa-2x"></i>
                
            <h2>
            `
    
        }else{

            empresas.push(empresaAñadir[0]);
            console.log('empresas', empresas);
            console.log('empresasA', empresaAñadir);
            document.getElementById('eFAñadida').innerHTML=
            ` 
            <h2> 
                La empresa se 
                <br>
                ha añadido
                <br>
                <i class="fa-solid fa-circle-check fuenteAzul fa-2x"></i>
            <h2>
            `
    
        }

    })

}



function eliminarEmpresa(){
    ocultarTodos();

    let eliminarEmpresa=document.getElementById('eliminarEmpresa');
    eliminarEmpresa.style.display='block';

    /*document.getElementById('empresasListaL').value="";*/

    generarEmpresasL();

}

function generarEmpresas(){

    var nombreEmpresa=document.getElementById('nombEm').value;
    

    document.getElementById('empresasLista').innerHTML= "";

    empresas.forEach(function(emp){
        if(nombreEmpresa!=""){
            if(emp.nombreE==nombreEmpresa){
                document.getElementById('empresasLista').innerHTML+=
                `
                <option>Nombre Empresa:${emp.nombreE}, Categoría:${emp.catE}</option>
                                
                `
            }

        }else{
            document.getElementById('empresasLista').innerHTML+=
            `
            <option>Nombre Empresa:${emp.nombreE}, Categoría:${emp.catE}</option>
                            
            `
        }


    })

}

function generarEmpresasL(){

    var nombreEmpresa=document.getElementById('nombEmL').value;
    

    document.getElementById('empresasListaL').innerHTML= "";

    empresas.forEach(function(emp){
        if(nombreEmpresa!=""){
            if(emp.nombreE==nombreEmpresa){
                document.getElementById('empresasListaL').innerHTML+=
                `
                <option>Nombre Empresa:${emp.nombreE}, Categoría:${emp.catE}</option>
                                
                `
            }

        }else{
            document.getElementById('empresasListaL').innerHTML+=
            `
            <option>Nombre Empresa:${emp.nombreE}, Categoría:${emp.catE}</option>
                            
            `
        }


    })

}

function eliminar(){
    var empresaElim=document.getElementById('empresasListaL').value
    console.log('empresa',empresaElim)

    var i=0;
    empresas.forEach(function(emp){
        if(empresaElim!=""){
            if(empresaElim=="Nombre Empresa:"+emp.nombreE+", Categoría:"+emp.catE){
                
                console.log('empresa','hola')

                empresas.splice(empresas[i],1)
            }

        }else{
           
        }

        i++;
    })

    eliminarEmpresa();
}

function genListaEmpresas(){
    ocultarTodos();

    let listE=document.getElementById('listaEmpresas');
    listE.style.display='block';
    let genlistE=document.getElementById('genListaE');
    genlistE.style.display='block';
    let detaE=document.getElementById('datosEmpresa');
    detaE.style.display='none';

    document.getElementById('empresasLista').value="";
    generarEmpresas();


}

function verDEm(){

    let lEmp=document.getElementById('genListaE');
    lEmp.style.display='none';
    
    let detaE=document.getElementById('datosEmpresa');
    detaE.style.display='block';
    

    var listaE=document.getElementById('empresasLista').value
    


    var i=0;
    empresas.forEach(function(emp){
        if(listaE!=""){
            if(listaE=="Nombre Empresa:"+emp.nombreE+", Categoría:"+emp.catE){
                document.getElementById('logoESel').innerHTML =
                    `
                    
                    <div class=" p-3 cuprum">
                    Logo
                    <br>
                        <img src="${emp.logoE}" class="card-img py-1" alt="Imagen Empresa" >
                    </div>
                    `

                    document.getElementById('datosESel').innerHTML =
                    `
                    Nombre de la Empresa: ${emp.nombreE}
                    <br>
                    Categoria: ${emp.catE}
                    <br>
                    Numero de Telefono:${emp.telefE}
                    <br>
                    Representante: ${emp.representanteE}
                    <br>
                    RTN: ${emp.RTNE}
                    `
                console.log('g','g')
                
            }

        }else{
            let detaE=document.getElementById('datosEmpresa');
            detaE.style.display='none';
            let lEmp=document.getElementById('genListaE');
            lEmp.style.display='block';
        }

        i++;
    })
}





/*--------------------------------------------Pagina de Productos----------------------------------------------*/

function productosAdm(){

    ocultarTodos();
    ocultarSelec();
    document.getElementById('productosL').classList.add('fondoAzulP');

    let inicioW=document.getElementById('inicioW');
    inicioW.style.display='none';

    let producs=document.getElementById('productos');
    producs.style.display='block';
}

function añadirProducs(){
    ocultarTodos();
    let añadirEmpresa=document.getElementById('añadirProducto');
    añadirEmpresa.style.display='block';

    let formAñEm=document.getElementById('formAñadirProd');
    formAñEm.style.display='block';

    let revAñEm=document.getElementById('revisAñadorProd');
    revAñEm.style.display='none';
    let finAñ=document.getElementById('prodAñadido');
    finAñ.style.display='none';

    document.getElementById('nombAñProd').value="";
    document.getElementById('precioAñProd').value="";
    document.getElementById('catAñProd').value="";
    document.getElementById('empresaAñProd').value="";
    document.getElementById('disponibleAñProd').value="";
    document.getElementById('sucursalAñProd').value="";
    document.getElementById('descripcionAñProd').value="";
    document.getElementById('imagenAñProd').value="";

    empresas.forEach(function (emp){
        document.getElementById('empresaAñProd').innerHTML+=
        `
        <option>${emp.nombreE}</option>
        `

    })
}

function revisAñadorProd(){
   
    var nomAñProd=document.getElementById('nombAñProd').value;
    var precAñProd=document.getElementById('precioAñProd').value;
    var catAñProd=document.getElementById('catAñProd').value;
    var empAñProd=document.getElementById('empresaAñProd').value;
    var disAñProd=document.getElementById('disponibleAñProd').value;
    var sucurAñProd=document.getElementById('sucursalAñProd').value;
    var descAñProd=document.getElementById('descripcionAñProd').value;
    var imgAñProd=document.getElementById('imagenAñProd').value;



    console.log('cheque',disAñProd)
    productoAñadir=[];

    
    productoAñadir= [{
        nombreProd:nomAñProd,
        precProd:precAñProd,
        catProd:catAñProd,
        emProd:empAñProd,
        dispProd:disAñProd,
        sucurPro: sucurAñProd,  
        descProd:descAñProd,
        imgProd:imgAñProd,
           
    }]

    

    let formAñPr=document.getElementById('formAñadirProd');
    formAñPr.style.display='none';

    let revAñEm=document.getElementById('revisAñadorProd');
    revAñEm.style.display='block';

    document.getElementById('imgRevProd').innerHTML =
    `
    
    <div class="p-3 cuprum">
    Imagen
    <br>
        <img src="${imgAñProd}" class="card-img py-1" alt="Imagen Producto" >
    </div>
    `

    document.getElementById('datosRevProd').innerHTML =
    `
    Nombre del Producto: ${nomAñProd}
    <br>
    Precio del Producto:L.${precAñProd}
    <br>
    Categoria: ${catAñProd}
    <br>
    Empresa: ${empAñProd}
    <br>
    Sucursales ${sucurAñProd}
    <br>
    Descripción: ${descAñProd}
    <br>
    
    `




}


function finalizarAñPro(){

    let formAñProd=document.getElementById('formAñadirProd');
    formAñProd.style.display='none';

    let revAñProd=document.getElementById('revisAñadorProd');
    revAñProd.style.display='none';

    let finAñProd=document.getElementById('prodAñadido');
    finAñProd.style.display='block';

    productoAñadir.forEach(function(añprod){
        if(añprod.nombreE=="" && añprod.catE=="" && añprod.telefE=="" && añprod.representanteE=="" && añprod.RTNE=="" ){
            document.getElementById('prodFAñadido').innerHTML=
            ` 
            <h2> 
                El producto no se ha añadido
                <br>
                Datos Insuficientes
                <br>
                <i class="fa-solid fa-circle-xmark fuenteAzul fa-2x"></i>
                
            <h2>
            `
    
        }else{

            productos.push(productoAñadir[0]);
            
            document.getElementById('prodFAñadido').innerHTML=
            ` 
            <h2> 
                El producto se 
                <br>
                ha añadido
                <br>
                <i class="fa-solid fa-circle-check fuenteAzul fa-2x"></i>
            <h2>
            `
    
        }

    })
console.log('prod',productos)
}



function eliminarProd(){
    ocultarTodos();

    let eliminarProd=document.getElementById('eliminarProducto');
    eliminarProd.style.display='block';


    generarProdsEl();

}

function generarProds(){

    var nombreProd=document.getElementById('nombProd').value;
    

    document.getElementById('productoLista').innerHTML= "";

    productos.forEach(function(prod){
        if(nombreProd!=""){
            if(prod.nombreE==nombreProd){
                document.getElementById('productoLista').innerHTML+=
                `
                <option>Nombre Producto:${prod.nombreProd}, Categoría:${prod.catProd}</option>
                                
                `
            }

        }else{
            document.getElementById('productoLista').innerHTML+=
            `
            <option>Nombre Producto:${prod.nombreProd}, Categoría:${prod.catProd}</option>
                            
            `
        }


    })

}

function generarProdsEl(){

    var nombreProd=document.getElementById('nombProdEl').value;
    

    document.getElementById('producsListaL').innerHTML= "";

    productos.forEach(function(prod){
        if(nombreProd!=""){
            if(prod.nombreE==nombreProd){
                document.getElementById('producsListaL').innerHTML+=
                `
                <option>Nombre Producto:${prod.nombreProd}, Categoría:${prod.catProd}</option>
                                
                `
            }

        }else{
            document.getElementById('producsListaL').innerHTML+=
            `
            <option>Nombre Producto:${prod.nombreProd}, Categoría:${prod.catProd}</option>
                            
            `
        }


    })

}

function eliminarProdLista(){
    var prodElim=document.getElementById('producsListaL').value

    var i=0;
    productos.forEach(function(prod){
        if(prodElim!=""){
            if(prodElim=="Nombre Producto:"+prod.nombreProd+", Categoría:"+prod.catProd){
                
                console.log('empresa','hola')

                productos.splice(productos[i],1)
            }

        }else{
           
        }

        i++;
    })

    eliminarProd();
}

function genListaProd(){
    ocultarTodos();

    let listP=document.getElementById('listaProductos');
    listP.style.display='block';
    let genlistPr=document.getElementById('genListaProd');
    genlistPr.style.display='block';
    let detaPr=document.getElementById('datosProducto');
    detaPr.style.display='none';

    document.getElementById('productoLista').value="";
    generarProds();


}

function verDProd(){

    let lPr=document.getElementById('genListaProd');
    lPr.style.display='none';
    
    let detaPr=document.getElementById('datosProducto');
    detaPr.style.display='block';
    

    var listaPro=document.getElementById('productoLista').value
    


    var i=0;
    productos.forEach(function(pr){
        if(listaPro!=""){
            if(listaPro=="Nombre Producto:"+pr.nombreProd+", Categoría:"+pr.catProd){
                console.log('hola','hola')
                document.getElementById('imgPrSel').innerHTML =
                    `
                    
                    <div class=" p-3 cuprum">
                        Imagen
                        <br><br>
                        <img src="${pr.imgProd}" class="card-img py-1" alt="Imagen Empresa" >
                    </div>
                    `

                    document.getElementById('datosPrSel').innerHTML =
                    `
                    Nombre del Producto: ${pr.nombreProd}
                    <br>
                    Precio del Producto:L.${pr.precProd}
                    <br>
                    Categoria: ${pr.catProd}
                    <br>
                    Empresa: ${pr.emProd}
                    <br>
                    Sucursales ${pr.sucurPro}
                    <br>
                    Descripción: ${pr.descProd}
                    <br>
                    `
                console.log('g','g')
                
            }

        }else{
            let detaPr=document.getElementById('datosProducto');
            detaPr.style.display='none';
            let lPr=document.getElementById('genListaProd');
            lPr.style.display='block';
        }

        i++;
    })
}


/*--------------------------------------------Pagina de Motoristas----------------------------------------------*/

function motoristasAdm(){

    ocultarTodos();
    let motorista=document.getElementById('motoristas');
    motorista.style.display='block';

    let motoristasT=document.getElementById('motoristasT');
    motoristasT.style.display='block';

    let motoristasDat=document.getElementById('perfilMotoAct');
    motoristasDat.style.display='none';

    var actM="";

    document.getElementById('motoristasEnW').innerHTML=""

    motoristas.forEach(function (moto){

        if(moto.disponibilidad==true){
            actM="checked"
        }else{
            actM="disable";
        }

        if(disponMoto==moto.disponibilidad){
            document.getElementById('motoristasEnW').innerHTML+=
        `
        <div class="m-3 puntero row">
            <div class="col-3">
                <div  id="imagenMoto" class="card sinFondo sinBorde">
                    <i  class="fa-solid fa-user-large fa-3x  fuenteAzul"></i>   
                </div>  
                                                                
            </div>
            <div class="col-4">
                ${moto.nombre} ${moto.apellido}                                                
            </div>
            <div class="col-2">
                ${moto.id}                                      
            </div>
            <div class="col-2" id="motoActivo">
                <input class="form-check-input" type="checkbox" value="" id="activoCheck" ${actM} >
                    <label class="form-check-label" for="activoCheck">
                        Activo
                    </label> 
                                                                
            </div>
        </div>
        
        `

        }else{
            if(disponMoto==""){
                document.getElementById('motoristasEnW').innerHTML+=
                `
                <div class="m-3 row puntero" onclick="perfilMoto('${moto.id}')">
                <div class="col-3">
                    <div  id="imagenMoto" class="card sinFondo sinBorde">
                        <i  class="fa-solid fa-user-large fa-3x  fuenteAzul"></i>   
                    </div>  
                                                                    
                </div>
                <div class="col-4">
                    ${moto.nombre} ${moto.apellido}                                                
                </div>
                <div class="col-2">
                    ${moto.id}                                      
                </div>
                <div class="col-2" id="motoActivo">
                    <input class="form-check-input" type="checkbox" value="" id="activoCheck" ${actM} >
                        <label class="form-check-label" for="activoCheck">
                            Activo
                        </label> 
                                                                    
                </div>
                </div>
                `
            }
        }

    })

}

function filtroMoto(disp){
    disponMoto="";
    disponMoto=disp;

    motoristasAdm();

}

function perfilMoto(idM){
    let motoristasT=document.getElementById('motoristasT');
    motoristasT.style.display='none';
    let motoristasDat=document.getElementById('perfilMotoAct');
    motoristasDat.style.display='block';


    motoristas.forEach(function(moto){
        if(idM==moto.id){
            document.getElementById('datosMA').innerHTML=
            `
            <div class="cuprum">ID: ${moto.id}</div>
            <div class="cuprum">Nombre: ${moto.nombre} ${moto.apellido}</div>
            <div class="cuprum">Correo: ${moto.correo}</div>
            <div class="cuprum">Ubicación: ${moto.ubicación}</div>
            <div class="cuprum">Telefono: ${moto.telefono}</div>
            
            `
        }
    })
}


