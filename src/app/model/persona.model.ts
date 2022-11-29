export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    Img: String;

    constructor(nombre: String,apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.Img = img;
    }
}