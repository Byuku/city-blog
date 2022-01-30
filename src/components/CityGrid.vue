<template>
  <div class="main bg-light-purple">
    <div class="grid-container">
      <div
        v-for="city in cities"
        :key="city.id"
        class="card"
        :class="'card-' + city.id"
      >
        <div class="card-box">
          <div class="card-header">
            <small>{{ city.subtitle }}</small>
            <h2>{{ city.title }}</h2>
          </div>

          <div class="card-body">
            <p>{{ city.text }}</p>

            <button @click="exploreMoreBtn(city.id)" class="btn">Explore More</button>
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
    exploreMoreBtn(cityId) {
      this.$router.push({ name: "Informations", params: { cityId }});
    },
  },
  mounted() {
    this.$store.dispatch("getCitiesDataAction");
  },
};
</script>
