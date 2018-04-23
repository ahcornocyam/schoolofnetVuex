const getView = state => state.view;
const getLibertadores = state => state.times.slice(0, 6);

const getRebaixados = state => state.times.slice(16, 20);

const getters = { getView, getLibertadores, getRebaixados };

export default getters;
