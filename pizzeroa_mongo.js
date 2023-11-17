//USE pizzeria;

db.cliente.insert({
    nombre: "juan",
    apellido:"unoapellido",
    apellido2:"dosapellio",
    direccion:"diagona1",
    codigo_postal:"08002",
    localidad:"barcelona",
    provincia:"barcelona2",

});
db.pedido.insert({
    id_pedido:1,
    hora:new Date("2019-02-18T17:22:00"), 
    tipo_envio:"domicilio",
    sub_producto:[
    {
        cantidad:2,
        productos: db.productos.findOne({id:"ham"}).nombre,
    },
    {
        cantidad:1,
        productos: db.productos.findOne({id:"bebi"}).nombre,
        
    }
    ],
    precio:17.50,
   

});

db.pedido.insert({
    id_pedido:1,
    hora:new Date("2019-02-18T17:22:00"), 
    tipo_envio:"recogida",
    sub_producto:[
    {
        cantidad:2,
        productos: db.productos.findOne({id:"pizzam"},{nombre:1}),
    },

    ],
    precio:16,
    tienda:db.tienda.findOne({id_nombre:"detodo"},{id_nombre:1}),
});



db.tienda.insert({
    id_nombre:"detodo",
    direccion:"carrer diagonal 201",
    codigo_postal: 8006,
    localidad:"Barcelona",
    provincia:"barcelona",
    empleado_repartidor:[
    {
        id:1,
        nombre:"jaime",
        apellido:"apellido",
        nif:"12345678i",
        tipo:"repartidor",
    },
    {
        id:2,
        nombre:"jordi",
        apellido:"llido",
        nif:"12345678p",
        tipo:"repartidor",
    },
    {
        id:3,
        nombre:"Laia",
        apellido:"Blesa",
        nif:"87654321j",
        tipo:"cocinera",
    }]


});

db.productos.insert({
    nombre:"hamburguesa_carne",
    id:"ham",
    descrpcion:"carne de res 180gr",
    imagen:"enlace",
    precio:14,


})

db.productos.insert({
    nombre:"coca-cola",
    id:"bebi",
    descrpcion:"carne de res 180gr",
    imagen:"enlace",
    precio:3.50,


})

db.productos.insert({
    nombre:"pizza margarita",
    id_categoria:"1d",
    descrpcion:"pizza deliciosa",
    imagen:"enlace",
    precio:8,


})
db.categorias.insert({
    categorias_id:[
        {
        id_descuento:"1d",
        nombre:"descuento",
        },
        {
        id_temporada:"1t",
        nombre:"de temporada",
        },
        {
        id_temporada:"1p",
        nombre:"las preferidas",
        },
    
    ],
    
});
//idTienda = db.tienda.findOne({ tipo_envio: "detodo" })._id,
db.pedido.updateMany(
    {tipo_envio:"domicilio"},
    {
        $set: {
            repartidor: db.tienda.findOne({ empleado_repartidor: { $elemMatch: { nombre: "jaime" } } }).empleado_repartidor[0],
            hora_entrega:new Date("2019-02-18T17:22:30"),
        }
    }
    );   
db.pedido.update(
    { tipo_envio: "recogida" },
    {
        $set: {
            hora_entrega: new Date("2019-02-18T17:22:30"),
        }
    }
);  


db.pedido.find();
db.tienda.find();
db.productos.find();
db.categorias_id.find();
db.cliente.find();