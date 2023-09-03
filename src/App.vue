<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title>
        <v-app-bar-nav-icon icon="mdi-rocket-launch" href="./"></v-app-bar-nav-icon>
        <strong>postman-collection-viewer</strong></v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-github" href="https://github.com/dersvenhesse/postman-collection-viewer" target="_blank"></v-btn>
      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
    </v-app-bar>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'

import Home from '@/components/Home.vue'

const theme = useTheme()

var pcvTheme = localStorage.getItem('pcv_theme')
if (pcvTheme) {
  if (pcvTheme == 'dark') {
    import('highlight.js/styles/stackoverflow-dark.css')
  }

  theme.global.name.value = pcvTheme;
}

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  localStorage.setItem('pcv_theme', theme.global.name.value)
}
</script> 
