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
        contraseña:"a"
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
    }
]

function ocultarTodos(){
    let ocultar = document.getElementById('inicioMoto');
   ocultar.style.display = 'none';

}
ocultarTodos();


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
