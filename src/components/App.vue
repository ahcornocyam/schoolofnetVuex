<template>
  <div class="container">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">Times do Campeonato Brasileiro</h3>
        </div>
        <div class="panel-body">
          <div v-if="view == 'tabela'">
            <div class="row">
              <div class="col-xs-12">
                  <div class="alert alert-succes" role="alert">
                    <a href="#" @click="novaPartida($event)" class="btn btn-success">Nova Partida</a>
                    <a href="#" @click="zonaLibertaRebaixamento($event)" class="btn btn-primary">Libertadores Rebaixamento</a>
                  </div>
                  <br>
                  <br>
                  <time-list :times="timesFiltro" :colunas="colunas" :ordenacao="order"></time-list>
              </div>
            </div>
          </div>
          <div v-if="view == 'novoJogo'">
            <novo-jogo :novoJogo="novoJogo" :view="view" @update:view="v => view = v"></novo-jogo>
          </div>
          <div v-if="view == 'zona'">
          <libertadores-rebaixamento></libertadores-rebaixamento>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Time from "../time";
import TimeList from "./TimeList.vue";
import NovoJogo from "./NovoJogo.vue";
import LibertadoresRebaixamento from "./LibertadoresRebaixamento.vue";
import _ from "lodash";

export default {
  name: "App",
  components: { TimeList, NovoJogo, LibertadoresRebaixamento },
  data() {
    return {
      order: {
        keys: ["pontos", "gm", "gs"],
        sort: ["desc", "desc", "asc"]
      },
      colunas: ["nome", "pontos", "gm", "gs", "saldo"],
      novoJogo: {
        casa: {
          time: null,
          gols: 0
        },
        fora: {
          time: null,
          gols: 0
        }
      }
    };
  },
  methods: {
    novaPartida(e) {
      e.preventDefault();
      this.view = "novoJogo";

      let indexCasa = Math.floor(Math.random() * 20),
        indexFora = Math.floor(Math.random() * 20);

      this.novoJogo.casa.time = this.times[indexCasa];
      this.novoJogo.casa.gols = 0;
      this.novoJogo.fora.time = this.times[indexFora];
      this.novoJogo.fora.gols = 0;
    },
    zonaLibertaRebaixamento(e) {
      e.preventDefault();
      this.view = "zona";
    }
  },
  computed: {
    timesFiltro() {
      return _.orderBy(this.times, this.order.keys, this.order.sort);
    },
    view: {
      get() {
        return this.$store.state.view;
      },
      set(valor) {
        this.$store.commit("SET_VIEW", valor);
      }
    },
    times() {
      return this.$store.state.times;
    }
  }
};
</script>

<style>

</style>
