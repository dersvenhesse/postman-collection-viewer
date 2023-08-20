<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title>
        <v-app-bar-nav-icon icon="mdi-rocket-launch" href="./"></v-app-bar-nav-icon>
        <strong>postman-collection-viewer</strong></v-app-bar-title>
    </v-app-bar>
    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script setup>
import Home from '@/components/Home.vue'
</script>
