/* eslint-disable no-shadow */
import BlockService from "@/services/blocks";

const moduleState = {
  items: []
};

const getters = {};

const actions = {
  async fetchBlocks({ commit }) {
    const result = await BlockService.GET_BLOCKS().then(res => res.data);
    return commit("setBlocks", result);
  }
};

const mutations = {
  setBlocks(state, result) {
    state.items = result;
  }
};

export default {
  state: moduleState,
  getters,
  actions,
  mutations
};
