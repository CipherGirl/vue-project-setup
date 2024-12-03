<template>
  <div class="home">
    <h2>All Destination</h2>
    <div class="destinations">
      <RouterLink
        v-for="destination of destinations"
        :key="destination.id"
        :to="{ name: 'destination', params: { id: destination.id } }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name"
      /></RouterLink>
    </div>
  </div>
</template>

<script>
import sourceData from "@/assets/data.json";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>
