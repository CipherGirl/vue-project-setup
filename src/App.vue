<script setup></script>

<template>
  <div class="router-links">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>
  <RouterView />
</template>

<style>
.router-links {
  text-decoration: underline;
  display: flex;
  gap: 4px;
}
</style>
