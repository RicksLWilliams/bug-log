
<template>
  <div>
    <form class="row mb-3" @submit.prevent="addBug">
      <h5 class="m-1 pr-2 pl-3 tskName">Bug:</h5>
      <input
        class="pr-4 pl-2 inputTask"
        type="text"
        placeholder="add bug..."
        v-model="newBug.title"
        required
      />
      <input
        class="pr-4 pl-2 inputTask"
        type="text"
        placeholder="add description..."
        v-model="newBug.description"
        required
      />
      <button class="btn btn-secondary border-dark" type="submit">+</button>
    </form>
    <!-- <div v-for="list in board" :key="list.id">
      <router-link :to="{name: 'board', params: {boardId: board.id}}">{{board.title}}</router-link>
    <button @click="deleteList(board.id)">delete </button>-->
  </div>
</template>
  
<script>
export default {
  name: "AddBug",
  //props: ["listData"],
  data() {
    return {
      newBug: {}
    };
  },
  methods: {
    addBug() {
      console.log("addBug", this.newBug)
      //this.newTask.listId = this.listData.id;
      this.$store.dispatch("addBug", this.newBug);
      this.newBug = {};
      // this.$store.commit("setActiveBug", {});
      //this.bugData.id = 
      // this.$router.push({
      //   name: "BugDetails",
      //   params: { bugId: this.bugData.id }
      //});
    }
  }
};
</script>

<style>

</style>