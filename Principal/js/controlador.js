var eventos = [
    {
        nombreEvento: 'Nuevos Productos',
        thumbnail: 'thmb1.jpeg',
        eventoID: 1
    },

    {
        nombreEvento: 'Los Más Pedidos',
        thumbnail: 'thmb2.jpg',
        eventoID: 2
    },

    {
        nombreEvento: 'Ofertas',
        thumbnail: 'thmb3.jpeg',
        eventoID: 3
    }
];

var categorias = [
    {
        nombreCat: 'Comida',
        iconoCat: 'comida.png',
        idCat: 1
    },

    {
        nombreCat: 'Tiendas y Supermercados',
        iconoCat: 'supermercado.png',
        idCat: 2
    },

    {
        nombreCat: 'Farmacias',
        iconoCat: 'farmacia.png',
        idCat: 3
    },

    {
        nombreCat: 'Herramientas',
        iconoCat: 'herramientas.png',
        idCat: 4
    },

    {
        nombreCat: 'Librería y Papelería',
        iconoCat: 'libreria.png',
        idCat: 5
    },

    {
        nombreCat: 'Electrónicos',
        iconoCat: 'electro.png',
        idCat: 6
    },

    {
        nombreCat: 'Belleza y Cuidado Personal',
        iconoCat: 'cosmeticos.png',
        idCat: 7
    },
    {
        nombreCat: 'Cafeterías y Panaderías',
        iconoCat: 'cafe.png',
        idCat: 8
    }
];

function generarEventos() {
    eventos.forEach(function(evnt) {
        document.getElementById('eventos').innerHTML+=
        `
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" id="tEv"><div class="tarjetaEvento"><img src="img/${evnt.thumbnail}" id="thmbImg" alt=""></div> ${evnt.nombreEvento}</div>
        `
    });
}

generarEventos();

function generarCategorias(){
    categorias.forEach(function(categ) {
       document.getElementById('categorias').innerHTML+=
       `
       <div class="col-6 col-sm-6 col-md-4 col-lg-3">
       <div id="cateCuadro">
         <img src="img/${categ.iconoCat}" alt="" id="cateImg">
       </div>
       <div id="txtCate">${categ.nombreCat}</div>
     </div>
       ` 
    });
}

generarCategorias();