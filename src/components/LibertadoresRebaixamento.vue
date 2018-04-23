<template>
  <div class="row">
    <div class="panel panel-Primary">
      <div class="panel-heading">
        <h3 class="panel-title">Lista de Times Classificados para a Libertadores</h3>
      </div>
      <div class="panel-body">
        <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="time in getLibertadores">
              <td><img :src="time.escudo" :alt="time.nome">  {{ time.nome }} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="panel panel-danger">
      <div class="panel-heading">
        <h3 class="panel-title">Times na Zona de Rebaixamento</h3>
      </div>
      <div class="panel-body">
        <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="time in getRebaixamento">
              <td><img :src="time.escudo" :alt="time.nome">  {{ time.nome }} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <a href="#" @click="verTabela($event)" class="btn btn-success"> Voltar</a>
  </div>
</template>
<script>
export default {
  name: "LibertadoresRebaixamento",
  methods: {
    verTabela(e) {
      e.preventDefault();
      this.view = "tabela";
    }
  },
  computed: {
    getLibertadores() {
      return this.$store.getters.getLibertadores;
    },
    getRebaixamento() {
      return this.$store.getters.getRebaixados;
    },
    view: {
      get() {
        return this.$store.getters.getView;
      },
      set(valor) {
        this.$store.commit("SET_VIEW", valor);
      }
    }
  }
};
</script>

