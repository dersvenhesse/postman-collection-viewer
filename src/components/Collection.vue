<template>
    <h2>{{ collection.name }}</h2>
    <div>{{ collection.description }}</div>
    <v-divider class="my-4"/>
    <div v-for="i in collection.items.all()">
        <ItemGroup v-if="isItemGroup(i)" :item="i"/>
        <Request v-else :item="i" />
    </div>
</template>
  
<script setup>
import {ItemGroup as PostmanItemGroup, Item as PostmanItem} from 'postman-collection'

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
  