import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    bugs:[],
    activeBug:{}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bugs) {
      state.bugs = bugs
    },
    setActiveBug(state, bug){
      state.activeBug = bug
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    getBugs({ commit, dispatch }) {
      api.get('bugs')
        .then(res => {
          commit('setBugs', res.data)
        })
    },
    async getBug({ commit }, bugId) {
      try {
        let res = await api.get(`bugs/${bugId}`);
        //console.log("getBlog",res.data);
        commit("setActiveBug", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async addBug({ commit, dispatch }, bugData) {
      try {
        let res = await api.post("bugs/",bugData );
        this.dispatch("getBugs" )
      } catch (error) {
        console.error(error);
      }
    },   
    async changeBug({ commit, dispatch }, bugData) {
      try {
        let res = await api.put("bugs/" + bugData.id, bugData);
        this.dispatch("getBugs" )
      } catch (error) {
        console.error(error);
      }
    },
    async addNote({ commit, dispatch }, noteData) {
      try {
        let res = await api.post("notes/",noteData );
        this.dispatch("getNotes")
      } catch (error) {
        console.error(error);
      }
    },
  }
});
