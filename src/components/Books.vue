<template>
  <div class="container">
    <div class="row">
      <div v-for="(book, index) in books" :key="index" class="col-md-4">
        <Book :book="book"></Book>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Book from "./Book.vue";
export default {
  data() {
    return {
      books: {}
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/v1/books")
      .then(response => {
        this.books = response.data.data.books;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
        alert(error.response.data.message);
      });
  },
  components: {
    Book
  }
};
</script>
