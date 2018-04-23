import Vue from "vue";

const saldo = time => time.gm - time.gs || 0;

export default Vue.filter("saldo", saldo);
