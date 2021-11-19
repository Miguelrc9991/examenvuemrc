<template>
  <div>
    <div>
      <img :src="pelicula.foto" alt="imagen" />
      <h1>Título: : {{ pelicula.titulo }}</h1>

      <p>Director : {{ pelicula.director }}</p>
      <router-link
        class="btn btn-success"
        :to="'/peliculas/' + pelicula.idGenero"
        >Volver</router-link
      >
    </div>
  </div>
</template>

<script>
import ServicePeliculas from "./../../services/Peliculas";
const service = new ServicePeliculas();
export default {
  name: "detallesPelicula",
  data() {
    return {
      pelicula: {},
      idPelicula: 0,
    };
  },
  mounted() {
    this.idPelicula = this.$route.params.idPelicula;
    this.cargarPelicula();
  },
  methods: {
    cargarPelicula() {
      service.getPeliculaId(this.idPelicula).then((res) => {
        this.pelicula = res;
      });
    },
  },
};
</script>

<style></style>
