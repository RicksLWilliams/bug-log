
<template>
  <div>
    <div>
      <button v-if="this.$auth.userInfo.email == this.noteData.creatorEmail" type="button" class="close text-danger" @click="deleteNote()">
        <span>&times;</span>
      </button>
      <p>Body: {{noteData.content}}</p>
      <p>Email: {{noteData.creatorEmail}}</p>

      <!-- <form @submit.prevent="changeNote()">
          <div class="form-group">
            <label for="body">Note</label>
            <input type="text" name="body" id="" class="form-control" placeholder="enter Note..." aria-describedby="helpId" v-model="noteData.content" required>
          </div>

          <button type="submit" class="btn btn-success">Save Note</button>
      </form>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "note",
  props: ["noteData"],
  data() {
    return {};
  },
  methods: {
    deleteNote() {
      if (window.confirm("Are you sure?")) {
        //console.log("deleteNote", this.noteData);
        this.$store.dispatch("deleteNote", this.noteData);
      }
    },
    changeComment() {
      //console.log("changeBlog", this.blogDetails)
      //this.$router.push({ name: "Home" });
      this.$store.dispatch("changeNote", this.noteData);
    }
  }
};
</script>

<style>
</style>