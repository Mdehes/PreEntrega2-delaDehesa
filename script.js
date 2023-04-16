//Simulador de Tienda MMORPG
//Bienvenida a la Tienda de las Rarezas
let nombreUsuario = prompt(
    "Bienvenido a la Tienda de las Rarezas!\nPor favor, dime tu nombre aventurero"
);
//Construi una class que contiene todas las propiedades del usuario.
class Usuario {
    constructor(nombre) {
    this.id = 0,
    this.nombre = nombre,
    this.nivel = null,
    this.vidaInicial = 100,
    this.ataqueBasico = 0,
    this.probabilidadCritico = 0,
    this.defensaInicial = 0,
    this.inventario = [],
    this.capacidadInventario = 60,
    this.balanceOro = 200
//Estas propiedades seran utilizados cuando la tienda tenga la funcion de equipar y desequipar objetos.
//  this.objetosEquipados = []           
//  this.capacidadObjetosEquipados = 2
//  this.pasivasActivas = []
//  this.capacidadPasivasActivas = 2
    }
}
//Interaccion con el usuario.
let usuario = new Usuario(nombreUsuario);
console.log(
    `AAAH! a eso me refería ${usuario.nombre}!\nPrimero vamos a echarle un ojo a tus estadísticas actuales..
    Vida: ${usuario.vidaInicial},
    Ataque básico: ${usuario.ataqueBasico},
    Probabilidad de crítico: ${usuario.probabilidadCritico},
    Defensa: ${usuario.defensaInicial},
    Oro: ${usuario.balanceOro},
    Objetos equipados: ${usuario.objetosEquipados},
    Pasivas activas: ${usuario.pasivasActivas}`
);
console.log(
    "JA.. Lo que me imaginaba, mira el tamaño de esos píxeles.. \nAhora utiliza cualquiera de los siguientes comandos para adquirir el objeto que desees.."
);
console.log('-comprarObjeto(latigodelDruida)');
console.log('-comprarObjeto(mantoDeHojas)');
console.log('-comprarObjeto(guanteDelMinero)');
console.log('-comprarObjeto(hombrerasDeLaMontaña)');
console.log(
    "Podras ver que hay en tu inventario en cualquier momento con el siguiente comando..\n-mostrarInventario(usuario)\nInclusive ahora que no tienes nada JA!"
)
//Construi una class que contiene todas las propiedades de los objetos.
class Objeto {
    constructor(objeto) {
    this.id = objeto.id;
    this.nombre = objeto.nombre;
    this.elemento = objeto.elemento;
    this.categoria = objeto.categoria;
    this.tipoAtaque = objeto.tipoAtaque;
    this.tipoDefensa = objeto.tipoDefensa;
    this.ataqueBasico = objeto.ataqueBasico;
    this.defensa = objeto.defensa;
    this.probabilidadCritico = objeto.probabilidadCritico;
    this.aumentoVida = objeto.aumentoVida;
    this.pasiva = objeto.pasiva;
    this.peso = objeto.peso;
    this.precio = objeto.precio;
    }
};
let latigodelDruida = new Objeto({
    id: 1,
    nombre: "El Latigo del Druida",
    elemento: "Madera",
    categoria: "Ataque",
    tipoAtaque: "Magico",
    tipoDefensa: null,
    ataqueBasico: 15,
    defensa: 0,
    probabilidadCritico: 0.1,
    aumentoVida: 10,
    pasiva:
    "Alma Salvaje: este arma aumenta la efectividad de las habilidades de invocación y control de animales.",
    peso: 15,
    precio: 75,
});
let mantoDeHojas = new Objeto({
    id: 2,
    nombre: "el Manto de Hojas",
    elemento: "Madera",
    categoria: "Defensa",
    tipoAtaque: null,
    tipoDefensa: "Resistencia Magica",
    ataqueBasico: 0,
    defensa: 25,
    probabilidadCritico: 0.0,
    aumentoVida: 50,
    pasiva: "Simbiosis: esta vestimenta tiene la habilidad de otorgar a su poseedor un vínculo simbiótico con el entorno natural, lo que le otorga un aumento de velocidad en la regeneración de vida.",
    peso: 30,
    precio: 100
});
let guanteDelMinero = new Objeto({
    id: 3,
    nombre: "el Guante del Minero",
    elemento: "Metal",
    categoria: "Ataque",
    tipoAtaque: "Fisico",
    tipoDefensa: null,
    ataqueBasico: 20,
    defensa: 0,
    probabilidadCritico: 0.12,
    aumentoVida: 0,
    pasiva:
    "Buscador de tesoros: aumento en la probabilidad de encontrar objetos raros o valiosos, como gemas o minerales especiales, lo que permite al personaje obtener recursos más valiosos y útiles.",
    peso: 25,
    precio: 90,
});
let hombrerasDeLaMontaña = new Objeto({
    id: 4,
    nombre: "las Hombreras de la Montaña",
    elemento: "Metal",
    categoria: "Defensa",
    tipoAtaque: null,
    tipoDefensa: "Dureza Fisica",
    ataqueBasico: 0,
    defensa: 50,
    probabilidadCritico: 0.0,
    aumentoVida: 0,
    pasiva:
    "Resistencia férrea: cuando tengas menos del 10% de salud, aumentara considerablemente la resistencia del personaje a ataques físicos.",
    peso: 35,
    precio: 120,
});
//Filtre arrays con propiedades determinadas para desarrollar proximas funciones.
let objetos = [latigodelDruida, mantoDeHojas, guanteDelMinero, hombrerasDeLaMontaña];
let objetosDeMadera = objetos.filter(objeto => objeto.elemento === "Madera");
let objetosDeMetal = objetos.filter(objeto => objeto.elemento === "Metal");
let objetosDeAtaque = objetos.filter(objeto => objeto.categoria === "Ataque");
let objetosDeDefensa = objetos.filter(objeto => objeto.categoria === "Defensa");
//Funciones:
//Esta funcion muestra el contenido almacenado en el inventario.
function mostrarInventario(usuario) {
    console.log(`${usuario.nombre} tu inventario contiene:`);
    if (usuario.inventario.length === 0) {
    console.log("NADA! te lo dije..");
    } else {
    usuario.inventario.forEach((objeto) => {
        console.log(objeto.nombre);
    });
    }
}
//Esta funcion realiza la compra de un objeto.
//Por el momento los objetos del inventario son equipados automaticamente.
function comprarObjeto(objeto) {
    if (usuario.capacidadInventario < objeto.peso) {
        alert("Recuerda que no solo debes pagarlo, tambien debes tener espacio en tu inventario para cargarlo!");
    } else if (usuario.balanceOro < objeto.precio) {
        alert("No tienes suficiente oro para comprar este objeto..");
    } else if (usuario.inventario.some(obj => obj.id === objeto.id)) {
        alert("Ya tienes este objeto en tu inventario.");
    } else {
        usuario.balanceOro -= objeto.precio,
        usuario.capacidadInventario -= objeto.peso,
        usuario.vidaInicial+=objeto.aumentoVida,
        usuario.ataqueBasico+=objeto.ataqueBasico,
        usuario.probabilidadCritico+=objeto.probabilidadCritico,
        usuario.defensaInicial+=objeto.defensa,
        usuario.inventario.push(objeto),
        alert(`Has comprado ${objeto.nombre}.`);
        console.log(`Has comprado ${objeto.nombre}.\nTu inventario actual es: ${usuario.inventario.map(obj => obj.nombre).join(", ")}\nRecuerda que puedes ver que hay en tu inventario con el comando:\n-mostrarInventario(usuario)`);
        alert(`Has comprado ${objeto.nombre}.
            Por el momento los objetos son equipados automaticamente..
            tus estadísticas actualizadas son:
            Vida inicial: ${usuario.vidaInicial}
            Ataque básico: ${usuario.ataqueBasico}
            Probabilidad de crítico: ${usuario.probabilidadCritico}%
            Defensa inicial: ${usuario.defensaInicial}
            Oro: ${usuario.balanceOro}`);
    }
}



