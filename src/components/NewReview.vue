<template>
  <div>
    <form @submit.prevent="createReview">
      <div class="form-group">
        <input v-model="title" type="text" class="form-control" placeholder="Title" />
      </div>
      <div class="form-group">
        <input
          v-model="content_rating"
          type="number"
          class="form-control"
          min="0"
          max="10"
          placeholder="Content rating"
        />
      </div>
      <div class="form-group">
        <input
          v-model="recommend_rating"
          type="number"
          class="form-control"
          placeholder="Recommend rating"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-success">Review</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["book"],
  data() {
    return {
      title: "",
      content_rating: "",
      recommend_rating: ""
    };
  },
  methods: {
    createReview: function() {
      axios({
        method: "post",
        url: "http://localhost:3000/api/v1/books/" + this.book.id + "/reviews",
        headers: { "AUTH-TOKEN": "bwgc5siLk5zxoxXxvZKL" },
        data: {
          review: {
            title: this.title,
            content_rating: this.content_rating,
            recommend_rating: this.recommend_rating
          }
        }
      })
        .then(response => {
          this.book.reviews.push(response.data.data.review);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.response.data);
          alert(error.response.data.message);
        });
    }
  }
};
</script>
