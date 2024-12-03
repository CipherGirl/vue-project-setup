<template>
  <div id="nav">
    <RouterLink id="logo" to="/">Router App</RouterLink>
    <RouterLink
      v-for="destination of destinations"
      :key="destination.id"
      :to="{
        name: 'destination',
        params: { id: destination.id, slug: destination.slug },
      }"
      >{{ destination.name }}</RouterLink
    >
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
<style lang="css">
#nav .link-active-class {
  border-bottom: 2px solid white;
}
</style>
