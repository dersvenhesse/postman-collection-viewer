<template>
  <v-container>
    <v-form>
      <v-file-input v-bind:clearable="false" label="Choose a collection file" accept="application/json"
        prepend-icon="mdi-file-code-outline" v-on:change="changedCollectionFile" show-size hide-details></v-file-input>
    </v-form>
  </v-container>
  <v-container v-if="data.collection">
    <Collection :collection="data.collection" />
  </v-container>
  <v-container v-if="!data.collection">
    <v-alert border="start" border-color="primary" icon="mdi-information" :text="data.information"></v-alert>
  </v-container>
</template> 

<script setup>
import { reactive } from 'vue'

import { Collection as PostmanCollection } from 'postman-collection'

import Collection from '@/components/Collection.vue'

let data = reactive({ collection: 0, information: "Nothing to show yet, please choose a collection file above." })

function changedCollectionFile(event) {
  let reader = new FileReader();
  reader.onloadstart = function (e) {
    data.collection = 0;
    data.information = "Reading collection file..."
  }
  reader.onload = function (e) {
    if (e.target.result.includes("_postman_id")) {
      data.collection = new PostmanCollection(JSON.parse(e.target.result))
    }
  };
  reader.readAsText(event.target.files[0])
}
</script>
