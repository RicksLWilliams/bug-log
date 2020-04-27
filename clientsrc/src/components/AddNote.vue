  
<template>
  <div class="border col-12">
    <form @submit.prevent="addNote()">
      <div class="form-group">
        <label for="note">Comment</label>
        <input type="text" name="note" id="" class="form-control" placeholder="enter note..." aria-describedby="helpId"
          v-model="newNote.content" required>
      </div>
      <button type="submit" class="btn btn-success">Add Note</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AddNote',
    data() {
      return {
        newNote: {}
      }
    },
    methods: {
      addNote() {
        //set it in the store
        this.newNote.bugId = this.$route.params.bugId
        //this.newComment.creatorEmail = creatorEmail
        this.$store.dispatch('addNote', this.newNote)
        this.newNote = {}
      }
    }
  }
</script>

<style>
</style>