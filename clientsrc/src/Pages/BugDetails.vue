<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <div class="row">
          <h3 class="text-primary text-left tskTitle col-10">{{bugDetails.title}}</h3>
          <h3 class="text-primary text-left tskTitle col-10">{{bugDetails.description}}</h3>
          <h3 class="text-primary text-left tskTitle col-10">{{bugDetails.closed}}</h3>
          <h3 class="text-primary text-left tskTitle col-10">{{bugDetails.updatedAt}}</h3>
          <h3 class="text-primary text-left tskTitle col-10">{{bugDetails.creatorEmail}}</h3>
          <div class="col-2">
            <!-- <button class="btn btn-process" @click="closeBug()">
              <h5 class="text-danger">Close</h5>
            </button>-->
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-11">
            <comment
              class="comment"
              v-for="comment in blogComents"
              :commentData="comment"
              :key="comment._id"
            ></comment>
          </div>
        </div>-->

        <div
          v-if="this.$auth.userInfo.email == this.bugDetails.creatorEmail && !this.bugDetails.closed"
        >
          <form @submit.prevent="changeBug()">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                name="title"
                id
                class="form-control"
                placeholder="enter title..."
                aria-describedby="helpId"
                v-model="bugDetails.title"
                required
              />
            </div>
            <div class="form-group">
              <label for="body">Description</label>
              <input
                type="text"
                name="body"
                id
                class="form-control"
                placeholder="enter body..."
                aria-describedby="helpId"
                v-model="bugDetails.description"
                required
              />
            </div>
            <button type="submit" class="btn btn-success">Save</button>
          </form>
          <button class="btn btn-process" @click="closeBug()">
            <h5 class="text-danger">Close</h5>
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-11">
        <CommentAdd v-if="$auth.isAuthenticated"> </CommentAdd>
        <small class="text-danger" v-else>You must log in to leave a comment.</small>
      </div>
    </div>-->
    <!-- <div class="row">
      <div class="col-11">
        <comment class="comment" v-for="comment in blogComents" :commentData="comment" :key="comment._id"></comment>
      </div>
    </div>-->
    <addNote v-if="$auth.isAuthenticated"></addNote>
    <!-- <note v-if="$auth.isAuthenticated"></note> -->
    <div class="row">
      <div class="col-11">
        <note class="note" v-for="noteData in bugNotes" :noteData="noteData" :key="noteData.id"></note>
      </div>
    </div>
  </div>
</template>


<script>
import addNote from "../components/AddNote";
import Note from "../components/Note";
export default {
  name: "bugDetails",
  //props: ["bugDetails"],
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getBug", this.$route.params.bugId);
    this.$store.dispatch("getNotes", this.$route.params.bugId);
  },
  computed: {
    bugDetails() {
      return this.$store.state.activeBug;
    },
    bugNotes() {
      return this.$store.state.notes;
    }
  },
  methods: {
    closeBug() {
      if (window.confirm("Are you sure?")) {
        this.bugDetails.closed = true;
        this.$store.dispatch("changeBug", this.bugDetails);
      }
    },
    changeBug() {
      this.$store.dispatch("changeBug", this.bugDetails);
    }

  },
  components: { addNote, Note }
};
</script>


<style scoped>
</style>