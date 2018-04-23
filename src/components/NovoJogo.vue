<template>
<div class="row">
  <div class="col-xs-12">
    <form class="form-inline">
        <div class="form-group">
          <input type="number" style="width: 50px" class="form-control text-center" v-model="novoJogo.casa.gols" min="0" max="any">
          <label class="control-label">
            {{ novoJogo.casa.time.nome }}
            <img :src="novoJogo.casa.time.escudo" style="height: 30px; width: 30px;">
          </label>
        </div>
        <span>X</span>
        <div class="form-group">
          <label class="control-label">
            <img :src="novoJogo.fora.time.escudo" style="height: 30px; width: 30px;"> {{ novoJogo.fora.time.nome }}
          </label>
          <input type="number" style="width: 50px" class="form-control text-center" v-model="novoJogo.fora.gols" min="0" max="any">
        </div>
      <button type="button" class="btn btn-primary" @click="fimPartida($event)">Fim de jogo</button>
    </form>
    <br><br>
    <a href="#" class="btn btn-success" @click="verTabela($event)">Ver tabela</a>
  </div>
</div>
</template>
<script>
export default {
  name: "NovoJogo",
  data() {
    return {};
  },
  mounted(){
  },
  methods: {
    fimPartida(e) {
      let timeAdversario = this.novoJogo.fora.time;
      let gols = +this.novoJogo.casa.gols;
      let golsAdversario = +this.novoJogo.fora.gols;
      this.novoJogo.casa.time.fimJogo(timeAdversario, gols, golsAdversario);
      this.verTabela(e);
    },
    verTabela(e) {
      e.preventDefault();
      this.$emit('update:view', 'tabela');
    }
  },
  props: {
    novoJogo: {
      type: Object,
      required: true
    },
    view: {
      type: String,
      default: "tabela"
    }
  }
};
</script>


