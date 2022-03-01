<template>
  <div class="main p-off">
    <div class="blog">
      <div class="hero">
        <div class="hero-image">
          <figure>
            <img :src="getImgURL(city.imgSrc)" :alt="city.title" />
          </figure>
        </div>

        <div class="hero-heading">
          <div class="hero-heading-box">
            <h3>{{ city.subtitle }}</h3>
            <h1>{{ city.title }}</h1>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="content">
          <p>
            {{ city.content }}
          </p>
        </div>

        <div class="backHome">
          <button @click="backToHome()" class="btn">Back to home</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Informations",
  data() {
    return {
      city: Object,
    };
  },
  props: {
    cityId: String,
  },
  computed: {
    cities() {
      return this.$store.getters.getCities;
    },
  },
  methods: {
    getImgUrl(img) {
      return require(`../assets/img/${img}`);
    },
    backToHome() {
      this.$router.push({ name: "Home" });
    },
    getCity() {
      axios
        .get("/cities.json")
        .then((response) => {
          this.city = response.data.find((item) => item.id == this.cityId);
        })
        .catch((error) => {
          console.log("Informations.vue - getCity error", error);
        });
    },
  },
  mounted() {
    this.getCity();
  },
};
</script>
