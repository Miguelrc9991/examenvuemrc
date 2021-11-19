<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-8 text-center">
        <table class="table table-striped" border="2">
          <thead>
            <th>Nombre</th>
            <th>Director</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </thead>
          <tbody>
            <tr v-for="(pelicula, index) in peliculas" :key="index">
              <td>{{ pelicula.titulo }}</td>
              <td>{{ pelicula.director }}</td>
              <td><img :src="pelicula.foto" alt="imagen" /></td>
              <td>
                <router-link
                  class="btn btn-success"
                  :to="'/detallespelicula/' + pelicula.idPelicula"
                  >Detalles</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ServicePeliculas from "./../../services/Peliculas";
const service = new ServicePeliculas();
export default {
  name: "tablaPeliculas",
  data() {
    return {
      peliculas: [],
      idGenero: 0,
      idNacionalidad: 0,
    };
  },
  mounted() {
    this.idGenero = this.$route.params.idGenero;
    this.idNacionalidad = this.$route.params.idNacionalidad;

    if (this.idGenero) {
      this.cargarPeliculasG();
    } else if (this.idNacionalidad) {
      this.cargarPeliculasN();
    }
  },
  methods: {
    cargarPeliculasG() {
      service.cargarPeliculasGenero(this.idGenero).then((res) => {
        this.peliculas = res;
      });
    },
    cargarPeliculasN() {
      service.cargarPeliculasNacionalidad(this.idNacionalidad).then((res) => {
        this.peliculas = res;
      });
    },
  },
  watch: {
    "$route.params.idGenero"(nextprop, prevprop) {
      console.log(this.idGenero, "genero");
      console.log(this.idNacionalidad, "localidad");
      if (nextprop != prevprop) {
        this.idGenero = this.$route.params.idGenero;
        if (this.idGenero) {
          this.cargarPeliculasG();
        } else if (this.idNacionalidad) {
          this.cargarPeliculasN();
        }
      }
    },
    "$route.params.idNacionalidad"(nextprop, prevprop) {
      if (nextprop != prevprop) {
        this.idNacionalidad = this.$route.params.idNacionalidad;
        console.log(this.idGenero);
        console.log(this.idNacionalidad);
        if (this.idGenero) {
          this.cargarPeliculasG();
        } else if (this.idNacionalidad) {
          this.cargarPeliculasN();
        }
      }
    },
  },
};
</script>

<style></style>
