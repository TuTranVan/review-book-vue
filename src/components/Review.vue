<template>
  <div class="btn btn-outline-info d-block mt-2" @click="deleteReview(review, book, index)">
    <span>#{{review.id}} - {{review.title}} - {{review.average_rating}}</span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["review", "book", "index"],
  methods: {
    deleteReview: function(review, book, index) {
      if (confirm("Do you want to delete?")) {
        axios({
          method: "delete",
          url:
            "http://localhost:3000/api/v1/books/" +
            book.id +
            "/reviews/" +
            review.id,
          headers: { "AUTH-TOKEN": "bwgc5siLk5zxoxXxvZKL" }
        })
          .then(response => {
            console.log(response.data);
            this.book.reviews.splice(index, 1);
          })
          .catch(error => {
            console.log(error.response.data);
            alert(error.response.data.message);
          });
      }
    }
  }
};
</script>

<style scoped>
</style>
