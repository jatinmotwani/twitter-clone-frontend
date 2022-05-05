<template>
  <div id="app" v-cloak>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
