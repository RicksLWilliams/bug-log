<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome to Your Vue.js App</h1>

    <div>
      <div class="col-3 m-5 list">
        <!-- <h1>I am a Bug</h1> -->
        <div class="row">
          <!-- <h3 class="listTitle pt-1 col-6">{{listData.title}}:</h3> -->
          <div class="col-6 dltList">
            <!-- <button class="btn pb-0" @click="deleteList(listData.id)">
              <h4 class="text-danger">X</h4>
            </button> -->
          </div>
        </div>
        <!-- <add-task v-bind:listData="listData"></add-task> -->
        <add-bug></add-bug>
        <bug v-for="bugInfo in bugItems" :bugData="bugInfo" :key="bugInfo.id"></bug>
        <!-- <bug></bug> -->
      </div>
    </div>
  </div>
</template>

<script>
import Bug from "../components/Bug.vue";
import AddBug from "../components/AddBug.vue";
export default {
  name: "home",
  //  name: "List",
  //props: ["listData"],
  data() {
    return {};
  },
  computed: {
    bugItems() {
      return this.$store.state.bugs;
    }
  },
  methods: {
    deleteBug(listId) {
      this.$store.dispatch("deleteBug", this.bugData);
    }
  },
  // mounted() {
  //   this.$store.dispatch("getBugs", this.bugData.id);
  // },
  components: { Bug
   , AddBug 
  }
};
</script>
