<template>
  <div class="row">
    <div class="col-md-4">
      <h2>INFORMATION</h2>
      <Book :book="book"></Book>
    </div>
    <div class="col-md-3">
      <h2>REVIEW</h2>
      <NewReview :book="book"></NewReview>
    </div>
    <div class="col-md-4">
      <h2>REVIEWS</h2>
      <div v-for="(review, index) in book.reviews" :key="index">
        <Review :review="review" :book="book" :index="index"></Review>
      </div>
    </div>
    <div class="col-md-1"></div>
  </div>
</template>

<script>
import axios from "axios";
import Book from "./Book.vue";
import Review from "./Review.vue";
import NewReview from "./NewReview.vue";
export default {
  data() {
    return {
      book: {}
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/v1/books/" + this.$route.params.id)
      .then(response => {
        this.book = response.data.data.book;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
        alert(error.response.data.message);
      });
  },
  components: {
    Book,
    Review,
    NewReview
  }
};
</script>

<style scoped>
</style>
