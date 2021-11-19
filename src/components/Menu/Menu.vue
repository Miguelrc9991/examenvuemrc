<template>
  <nav
    class="navbar navbar-expand-md navbar-dark bg-dark"
    aria-label="Fourth navbar example"
  >
    <div class="container-fluid">
      <router-link class="nav-link" to="/home">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Generos</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown04">
              <li v-for="(genero, index) in generos" :key="index">
                <router-link
                  class="nav-link"
                  style="color: black"
                  :to="'/peliculas/' + genero.idGenero"
                  >{{ genero.nombre }}</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Nacionalidades</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown04">
              <li v-for="(nacionalidad, index) in nacionalidades" :key="index">
                <router-link
                  class="nav-link"
                  style="color: black"
                  :to="'/peliculas/' + nacionalidad.idNacionalidad"
                  >{{ nacionalidad.nombre }}</router-link
                >
              </li>
            </ul>
          </li>
        </ul>

        <form class="d-flex" v-on:submit.prevent="realizarBusqueda()">
          <input
            v-model="cajaBuscar"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <router-link
            class="btn btn-outline-success"
            :to="'/buscar/' + cajaBuscar"
            >Buscar</router-link
          >
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import ServicePeliculas from "./../../services/Peliculas";
const service = new ServicePeliculas();

export default {
  name: "Menu",
  data() {
    return {
      generos: [],
      nacionalidades: [],
      cajaBuscar: "",
    };
  },
  mounted() {
    this.cargarGeneros();
    this.cargarNacionalidades();
  },
  methods: {
    cargarGeneros() {
      service.getGeneros().then((res) => {
        this.generos = res;
      });
    },
    cargarNacionalidades() {
      service.getNacionalidades().then((res) => {
        this.nacionalidades = res;
      });
    },
  },
};
</script>

<style></style>
