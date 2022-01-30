<template>
  <div class="main">
    <div class="container">
      <div
        v-for="city in cities"
        :key="city.id"
        class="card"
        :class="'card-' + city.id"
      >
        <!-- <div class="card-image">
          <figure>
            <img :src="getImgURL(city.imgSrc)" alt="valtech image" />
          </figure>
        </div> -->

        <div class="card-box">
          <div class="card-header">
            <small>{{ city.subtitle }}</small>
            <h2>{{ city.title }}</h2>
          </div>

          <div class="card-body">
            <p>{{ city.text }}</p>

            <button @click="exploreMoreBtn()" class="btn">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityGrid",
  data() {
    return {
      
    };
  },
  computed: {
    cities () {
      return this.$store.getters.getCities;
    },
  },
  methods: {
    exploreMoreBtn() {
      this.$router.push({ name: "Informations" });
    },
    // getImgURL: (imgUrl) => {
    //   return require("@/assets/img/" + imgUrl );
    // }
  },
  mounted() {
    this.$store.dispatch("getCitiesDataAction");
  },
};
</script>
