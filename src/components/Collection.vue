<template>
    <h4 class="text-h4 mb-2">{{ collection.name }}</h4>
    <div class="text-subtitle-1 mb-2">
        <vue-markdown v-if="collection.description" :source="collection.description.content" />
    </div>
    <v-text-field class="mt-4" v-bind:clearable="true" variant="underlined" prepend-icon="mdi-filter"
        label="Filter requests by name" density="compact" v-on:click:clear="changedFilter" v-on:keyup="changedFilter"
        hide-details></v-text-field>
    <div v-for="i in collection.items.all()">
        <ItemGroup v-if="isItemGroup(i)" :item="i" :filter="data.filter" />
        <Request v-else :item="i" :filter="filter" />
    </div>
</template> 
  
<script setup>
import { reactive } from 'vue'

import VueMarkdown from 'vue-markdown-render'

import ItemGroup from '@/components/ItemGroup.vue'
import Request from '@/components/Request.vue'

import { isItemGroup } from '../mixins/itemMixin'

let data = reactive({ filter: "" })
const props = defineProps(['collection'])

function changedFilter(event) {
    data.filter = event.target.value
}
</script>
  
<style>
li {
    list-style-position: inside;
}
</style>