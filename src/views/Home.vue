<template>
  <div class="home">
    <CityGrid></CityGrid>
  </div>
</template>

<script>
import CityGrid from "@/components/CityGrid.vue";

export default {
  name: "Home",
  components: {
    CityGrid,
  },
};
</script>
