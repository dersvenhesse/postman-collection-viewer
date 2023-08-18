<template>
    <v-card class="my-4">
        <v-card-title>{{ item.request.method }} {{ item.request.url }}</v-card-title>
        <v-card-subtitle><div v-for="h in item.request.headers.members">{{ h }}</div></v-card-subtitle>
        <v-card-text v-if="item.request.body"><pre>{{ item.request.body.raw }}</pre></v-card-text>
    </v-card>
</template>

<script setup>
const props = defineProps(['item']);
</script>
  