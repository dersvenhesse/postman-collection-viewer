<template>
    <h4 class="text-h4 mb-2">{{ collection.name }}</h4>
    <div class="text-subtitle-1">
        <vue-markdown v-if="collection.description" :source="collection.description.content" />
    </div>

    <div v-for="i in collection.items.all()">
        <ItemGroup v-if="isItemGroup(i)" :item="i" />
        <Request v-else :item="i" />
    </div>
</template> 
  
<script setup>
import { ItemGroup as PostmanItemGroup, Item as PostmanItem } from 'postman-collection'
import VueMarkdown from 'vue-markdown-render'

import ItemGroup from '@/components/ItemGroup.vue'
import Request from '@/components/Request.vue'

const props = defineProps(['collection']);

function isItemGroup(obj) {
    return PostmanItemGroup.isItemGroup(obj);
}
function isItem(obj) {
    return PostmanItem.isItem(obj);
}
</script>
  
<style>
li {
    list-style-position: inside;
}
</style>