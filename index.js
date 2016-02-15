var express = require ('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect("mongodb://localhost/mymongodb");

//Definimos usuarios
var usuariosSchema = {
  id:Number,
  nombre:String,
  correo:String,
  sueldo:Number
};

var Usuarios = mongoose.model("Usuario", usuariosSchema);

app.set("view engine","jade");
app.use(express.static("public"));
app.get("/", function(req,res){


  var datos = {
    id: 7,
    nombre: "Miguel",
    correo: "isthismich@gmail.com",
    sueldo: 100
  }
  var usuarios = new Usuarios(datos);

  usuarios.save(function(err){
    console.log(usuarios);
  });

  res.render("index");
});

app.listen(3000);
