<template>
  <v-container>
    <v-form>
      <v-file-input show-size v-bind:clearable="false" label="Choose a collection file" accept="application/json" prepend-icon="mdi-file-code-outline" @change="changedCollectionFile"></v-file-input>
    </v-form>
  </v-container>
  <v-container v-if="data.collection">
    <Collection :collection="data.collection"/>
  </v-container>
  <v-container v-if="!data.collection">
    <v-alert border="start" border-color="primary" icon="mdi-information" text="Nothing to show yet, please choose a collection file above."></v-alert>
  </v-container>
</template>

<script setup>
import {reactive} from 'vue'

import {Collection as PostmanCollection, ItemGroup as PostmanItemGroup, Item as PostmanItem} from 'postman-collection'

import Collection from '@/components/Collection.vue'

let data = reactive({collection: 0});

function changedCollectionFile(event) {
  let reader = new FileReader();
  reader.onload = function (e) {
    data.collection = new PostmanCollection(JSON.parse(e.target.result));
  };
  reader.readAsText(event.target.files[0]);
}
</script>
