<script setup></script>

<template>
  <div id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/brazil">Brazil</RouterLink>
    <RouterLink to="/panama">Panama</RouterLink>
    <RouterLink to="/hawaii">Hawaii</RouterLink>
    <RouterLink to="/jamaica">Jamaica</RouterLink>
  </div>
  <div class="container">
    <RouterView />
  </div>
</template>

<style></style>
