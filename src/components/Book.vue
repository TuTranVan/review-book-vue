<template>
  <div class="card">
    <img :src="book.image" />
    <h1>{{book.title}}</h1>
    <p class="author">{{book.author}}</p>
    <i>{{book.reviews.length}} reviews</i>
    <router-link :to="{ name:'ShowBook', params: { id: book.id } }">
      <button>Show details</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["book"]
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  margin-bottom: 30px;
}

.card h1 {
  font-size: 12px;
  font-weight: bold;
  padding-top: 5px;
}

.card image {
  height: 200px;
}

.author {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>
