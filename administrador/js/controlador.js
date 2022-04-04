var empresas=[]

var productos=[]

var administas=[]

var pedidos=[]

var empresaAñadir=[]

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

    /**let oPerfil=document.getElementById('parteSup');
    oParteSup.style.display='none';

    let oParteSup=document.getElementById('parteSup');
    oParteSup.style.display='none';*/
 
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

  

   /* paginas.splice(pagina);
    var pagina="";

      pagina= {   
            paginaActual:'inici0',
        }
    paginas.push(pagina);*/
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

  

   /* paginas.splice(pagina);
    var pagina="";

      pagina= {   
            paginaActual:'inici0',
        }
    paginas.push(pagina);*/
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
    
    <div class="centerx p-3 cuprum">
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