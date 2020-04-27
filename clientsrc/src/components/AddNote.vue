  
<template>
  <div class="border col-12">
    <form @submit.prevent="addNote()">
      <div class="form-group">
        <label for="note">Note</label>
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
        this.newNote.bugId = this.$route.params.bugId
        this.$store.dispatch('addNote', this.newNote)
        this.newNote = {}
      }
    }
  }
</script>

<style>
</style>