<template>
    <h4 class="text-h4 mb-2">{{ collection.name }}</h4>
    <div class="text-subtitle-1 mb-2">
        <vue-markdown v-if="collection.description" :source="collection.description.content" />
    </div>

    <div v-for="i in collection.items.all()">
        <ItemGroup v-if="isItemGroup(i)" :item="i" />
        <Request v-else :item="i" />
    </div>
</template> 
  
<script setup>
import VueMarkdown from 'vue-markdown-render'

import ItemGroup from '@/components/ItemGroup.vue'
import Request from '@/components/Request.vue'

import { isItemGroup } from '../mixins/itemMixin'

const props = defineProps(['collection']);
</script>
  
<style>
li {
    list-style-position: inside;
}
</style>