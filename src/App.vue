<template>
  <div id="app">
    <nav>
      <router-link to="/">Week</router-link> |
      <router-link to="/tasks">Tasks</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/components/scss/main.scss";
</style>
