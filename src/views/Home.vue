<template>
  <div class="home">
    <CityGrid></CityGrid>
  </div>
</template>

<script>
// @ is an alias to /src
import CityGrid from "@/components/CityGrid.vue";

export default {
  name: "Home",
  components: {
    CityGrid,
  },
};
</script>
