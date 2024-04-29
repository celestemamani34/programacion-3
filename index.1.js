import express from "express";
import fs from "fs";

const app = express ();

const readData = () => {
    const data = fs.readFileSync ("./DB.js");
    return JSON.parse(data)

};

const whriteData = (data) => {
    fs.writefileSync ("./DB.js", JSON.stringify(data));
}

app.get ("/", (req, res) => {
    res. send (" Bienvenidos a mi app de Lectura");

})

app.get("Libros", (req, res)=> {
    const data = readData ();
    res.JSON(data.libros);


});

app.get("/libros/:id", (req, res) => {
    const data = readData ();
    const id = parseInt(req.params.id);
    const libros = data.libros.find((libros) => libros.id === id);
    res.json(libros);

    app.delete ("/libros/:id",(req, res) =>{
        const data = readData();
        const id = parseInt(req.params.id);
        const librosIndex = data.libros.findindex((libros) => libros.id === id);
        data.libros.splice (librosIndex, 3);
         writeData(data);
        res.json ({mensaje: "El libro fue borrado con exito"});


    })
});
app.listen (3000, () => 
    console.log ("El servidor esta en el puerto 3000"),
    
);