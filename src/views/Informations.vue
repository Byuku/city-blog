<template>
    <div>
      <p>Informations</p>
    </div>
</template>


<script>
export default {
  name: "Informations",
  data() {
    return {
      
    };
  },
  props: {

  },
  computed: {
    cities () {
      return this.$store.getters.getCities;
    },
  },
  methods: {
    
  },
};
</script>
