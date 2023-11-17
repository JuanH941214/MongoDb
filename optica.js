//USE optica;
db.cliente.insert({
    nombre: "juan",
    email: "juan@gmail.com",
    dia_registro: new Date("2022,12,13"),
    nombre_recomendado: "joan",
    direccion: {
        calle: "orden",
        numero: "254",
        piso: "12",
        puerta: "1",
        ciudad: "barcelona",
        codigo_postal: "08002",
        pais: "colombia",
    },
});
db.cliente.insert({
    nombre: "juandos",
    email: "dos@gmail.com",
    dia_registro: new Date("2023,02,19"),
    nombre_recomendado: "juan",
    direccion: {
        calle: "alle2",
        numero: "12345",
        piso: "2",
        puerta: "1",
        ciudad: "3",
        codigo_postal: "0298",
        pais: "francia",
    },
});
db.proveedor.insert({
    nombre:"rayban",
    telefono:"123456",
    fax:"654321",
    nif:"12345678t",
    direccion:{
        calle:"ferran",
        numero:"11",
        piso:"1",
        puerta:"1",
        ciudad:"Barcelona",
        codigo_postal:"0801",
        pais:"España",       
    },
    id_gafas:[{
        zara_id:1},
    {
        rayban_id:2
    },
    {
        totto_i:3
    },
    ],
});

db.gafas.insert({
    id_proveedor: 1,
    marca: "zara",
    precio: "80",
    montura: "metalica",
    graduacion: {
        izquierda: "-4.75",
        derecha: "-4.50",
    },
    colorLentes: "transparentes",


});
db.gafas.insert({
    id_proveedor: 2,
    marca: "rayban",
    precio: "55",
    montura: "flotant",
    graduacion: {
        izquierda: "1.25",
        derecha: "1.00",
    },
    colorLentes: "azul",


});
db.gafas.insert({
    id_proveedor: 2,
    marca: "lola",
    precio: "30",
    montura: "flotant",
    graduacion: {
        izquierda: "2.25",
        derecha: "1.20",
    },
    colorLentes: "verde",


});
db.gafas.insert({
    id_proveedor: 2,
    marca: "rayban",
    precio: "55",
    montura: "flotant",
    graduacion: {
        izquierda: "1.25",
        derecha: "1.00",
    },
    colorLentes: "amarillo",


});


db.venta.insert({
        fecha:new Date("2023,12,14"),
        nombre_empleado:"jose",
        gafas: db.gafas.findOne({id_proveedor:2}).marca,
        cliente: db.cliente.findOne({nombre:"juandos"}).nombre,

});   


db.cliente.find();
db.venta.find();
db.gafas.find();
db.proveedor.find();


