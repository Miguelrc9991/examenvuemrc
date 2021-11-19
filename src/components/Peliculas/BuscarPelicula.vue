<template>
  <div>
    <div>
      <table v-if="peliculas">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pelicula, index) in peliculas" :key="index">
            <td>{{ pelicula.titulo }}</td>

            <td><img :src="pelicula.foto" alt="imagen" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ServicePeliculas from "./../../services/Peliculas";
const service = new ServicePeliculas();
export default {
  name: "buscarPelicula",
  data() {
    return {
      nombre: "",
      peliculas: [],
    };
  },
  mounted() {
    this.nombre = this.$route.params.nombre;
    console.log(this.nombre);
    this.Busqueda();
  },
  methods: {
    Busqueda() {
      service.cargarBusqueda(this.nombre).then((res) => {
        this.peliculas = res;
        console.log(res);
      });
    },
  },
  watch: {
    "$route.params.nombre"(nextprop, prevprop) {
      if (nextprop != prevprop) {
        this.nombre = this.$route.params.nombre;
        this.Busqueda();
      }
    },
  },
};
</script>

<style>
img {
  width: 150px;
}
</style>
