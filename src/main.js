import Vue from 'vue'
import App from './App.vue'
import Home from './components/Peliculas/Home.vue'
import BuscarPelicula from './components/Peliculas/BuscarPelicula.vue'
import tablaPeliculas from './components/Peliculas/TablaPeliculas.vue'
import VueRouter from "vue-router";
import detallespelicula from './components/Peliculas/DetallesPelicula.vue'
Vue.config.productionTip = false
Vue.use(VueRouter);
const routes = [

  {
    path: "/home",
    component: Home,
  },
  {
    path: "/buscar/:nombre",
    component: BuscarPelicula,
  },
  {
    path: "/peliculas/:idGenero?/:idNacionalidad?",
    component: tablaPeliculas,
  },
  {
    path: "/peliculas/:idNacionalidad?",
    component: tablaPeliculas,
  },
  {
    path: "/detallespelicula/:idPelicula?",
    component: detallespelicula,
  },


]

const router = new VueRouter({
  routes,
  mode: "history",
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
