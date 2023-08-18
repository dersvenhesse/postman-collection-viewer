<template>
    <div v-for="i in item.items.all()">
        <ItemGroup v-if="isItemGroup(i)" :item="i"/>
        <Request v-else :item="i" />
    </div>
</template>
  
<script setup>
import {Collection as PostmanCollection, ItemGroup as PostmanItemGroup, Item as PostmanItem} from 'postman-collection'

import Request from '@/components/Request.vue'

const props = defineProps(['item']);

function isItemGroup(obj) {
    return PostmanItemGroup.isItemGroup(obj);
}
function isItem(obj) {
    return PostmanItem.isItem(obj);
}
</script>
  