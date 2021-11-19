import Global from "./../components/Global"
import axios from "axios";

export default class serviciosPeliculas{

getGeneros(){
return new Promise(function(resolve){
    var request = "api/generos"
    var url = Global.urlpeliculas + request
    axios.get(url).then(res=>{
        resolve(res.data)
    })
})
}
getNacionalidades(){
    return new Promise(function(resolve){

    var request = "api/nacionalidades"
    var url = Global.urlpeliculas + request
    axios.get(url).then(res=>{
        resolve(res.data)
    })
    })
}

cargarBusqueda(nombre){
    return new Promise(function(resolve){
        var request = "api/peliculas/buscadorpeliculas/"+nombre
        var url = Global.urlpeliculas + request
        axios.get(url).then(res=>{
            resolve(res.data)
        })
    })

}
cargarPeliculasGenero(idGenero){
return new Promise(function(resolve){
    var request = "api/peliculas/peliculasgenero/"+idGenero
        var url = Global.urlpeliculas + request
        axios.get(url).then(res=>{
            console.log(url)

            resolve(res.data)
        })
})
}
cargarPeliculasNacionalidad(idNacionalidad){
    return new Promise(function(resolve){
        var request = "api/peliculas/peliculasnacionalidad/"+idNacionalidad
            var url = Global.urlpeliculas + request
            axios.get(url).then(res=>{
                console.log(url)

                resolve(res.data)
            })
    })
    }

    getPeliculaId(idPelicula){
        return new Promise(function(resolve){
            var request = "api/peliculas/" + idPelicula;
            var url = Global.urlpeliculas + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        });
    }

}
