import Vue from "vue";

const ucwords = value => value.charAt(0).toUpperCase() + value.slice(1);

export default Vue.filter("ucwords", ucwords);
