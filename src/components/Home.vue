<template>
  <v-container>
    <v-form>
      <v-file-input show-size v-bind:clearable="false" label="Choose a collection file" accept="application/json" prepend-icon="mdi-file-code-outline" @change="changedCollectionFile"></v-file-input>
    </v-form>
  </v-container>
  <v-container v-if="data.collection">
    <h2>{{ data.collection.info.name }}</h2>
    <h4>{{ data.collection.info.description }}</h4>
  </v-container>
  <v-container v-if="!data.collection">
    <v-alert border="start" border-color="primary" icon="mdi-information" text="Nothing to show yet, please choose a collection file above."></v-alert>
  </v-container>
</template>

<script setup>
import {reactive} from 'vue'

let data = reactive({collection: 0});

function changedCollectionFile(event) {
  let reader = new FileReader();
  reader.onload = function (e) {
    extractData(JSON.parse(e.target.result));
  };
  reader.readAsText(event.target.files[0]);
}

function extractData(collection) {
  data.collection = collection;
}
</script>
