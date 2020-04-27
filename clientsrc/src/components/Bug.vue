  
<template>
  <div class="col-12 border mt-3 task">
    <!-- <h1 class="text-primary">I am a list</h1> -->
    <div class="row" @click="selectBug()">
      <!-- <h1>I am a bug</h1> -->
      <h3 class="text-primary text-left tskTitle col-10">• {{bugData.closed}}</h3>
      <h3 class="text-primary text-left tskTitle col-10">• {{bugData.description}}</h3>
      <h3 class="text-primary text-left tskTitle col-10">• {{bugData.title}}</h3>
      <h3 class="text-primary text-left tskTitle col-10">• {{bugData.closedDate}}</h3>
      <h3 class="text-primary text-left tskTitle col-10">• {{bugData.creatorEmail}}</h3>
      <div class="col-2">
        <button class="btn btn-process" @click="deleteBug()">
          <h5 class="text-danger">X</h5>
        </button>
      </div>
    </div>
    <div class="row pl-1">
      <!-- <select class="select" v-model="selected" @change="moveTask()">
        <option disabled value>
          <h3 class="edit">M♥VE</h3>
        </option>
        <option
          v-for="listInfo in listItems"
          :key="listInfo.id"
          :value="listInfo.id"
        >{{listInfo.title}}</option>
      </select> -->
      <!-- <add-comment v-bind:taskData="taskData"></add-comment> -->

      <!-- <div class="col-12 pb-1 text-left comcom">
        <comment
          v-for="commentInfo in commentItems"
          :commentData="commentInfo"
          :key="commentInfo.id"
        ></comment>
      </div> -->
    </div>

    <!-- <add-comment></add-comment> -->
  </div>
</template>

<script>
//import Comment from "../components/Comment.vue";
//import AddComment from "../components/AddComment.vue";
export default {
  name: "Bug",
  props: ["bugData"],
  data() {
    return { selected: "" };
  },
  computed: {
    bugItems() {
      //console.log("listItems",this.$store.state.lists )
      return this.$store.state.bugs;
    },
    // commentItems() {
    //   return this.$store.state.comments[this.taskData.id];
    // }
  },
  // mounted() {
  //   this.$store.dispatch("getComments", this.taskData.id);
  // },
  methods: {
    selectBug() {
      this.$store.commit("setActiveBug", {});
      console.log(this.bugData.id)
      this.$router.push({
        name: "BugDetails",
        params: { bugId: this.bugData.id }
      });
    },
    deleteBug() {
      //let listId = this.$route.params.boardId
      //this.$store.dispatch("deleteTask", taskId);
      this.$store.dispatch("deleteBug", this.bugData);
    },
    // moveBug() {
    //   console.log("moveTask", this.selected);
    //   let moveData = {
    //     taskId: this.taskData.id,
    //     oldListId: this.taskData.listId,
    //     newListId: this.selected
    //   };
    //   this.$store.dispatch("moveTask", moveData);
    // }
  },
  //components: { Comment,AddComment}
};
</script>

<style>

</style>