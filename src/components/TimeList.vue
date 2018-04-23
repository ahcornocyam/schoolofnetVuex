<template>
  <table class="table">
    <thead>
      <tr class="success">
        <th v-for="coluna in colunas" class="text-center">
          <a href="#" @click.prevent="sortBy(coluna)"> {{coluna | ucwords}}</a>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(time, index) in times" :key="index">
        <td>
          <img :src="time.escudo" :alt="time.nome" style="width: 30px; height: 30px"> {{ time.nome }}
        </td>
        <td class="text-center"> {{ time.pontos }} </td>
        <td class="text-center"> {{ time.gm }} </td>
        <td class="text-center"> {{ time.gs }} </td>
        <td class="text-center"> {{ time | saldo }} </td>
      </tr>
    </tbody>
  </table>

</template>
<script>
export default {
  name: "TimeList",
  data() {
    return {};
  },
  methods: {
    sortBy(coluna) {
      this.ordenacao.keys = coluna;
      this.ordenacao.sort = this.ordenacao.sort == "desc" ? "asc" : "desc";
    }
  },
  props: {
    times: {
      type: Array,
      required: true
    },
    colunas: {
      type: Array,
      required: true
    },
    ordenacao: {
      type: Object,
      required: true
    }
  }
};
</script>

