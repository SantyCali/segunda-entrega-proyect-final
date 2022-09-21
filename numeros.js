const guardarStorage = (clave, valor) => {localStorage.setItem(clave, valor)};


const productos = [
    {
        id:1,
        numero:"23",
        desc:"Sorteo",
        precio: 1000,
        img:'src/img/num-23.jpg',
        cantidad:1
    },
    {
        id:2,
        numero:"03",
        desc:"Sorteo",
        precio: 900,
        img:'src/img/num-03.jpg',
        cantidad:1
    },
    {
        id:3,
        numero:"06",
        desc:"Sorteo",
        precio: 800,
        img:'src/img/num-06.jpg',
        cantidad:1
    },
    {
        id:4,
        numero:"44",
        desc:"Sorteo",
        precio: 700,
        img:'src/img/num-44.jpg',
        cantidad:1
    },
    {
        id:5,
        numero:"07",
        desc:"Sorteo",
        precio: 850,
        img:'src/img/num-07.jpg',
        cantidad:1
    },
]


for(const producto of productos){
    guardarStorage(producto.id, JSON.stringify(producto));
}


