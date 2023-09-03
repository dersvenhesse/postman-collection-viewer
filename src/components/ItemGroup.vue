<template>
    <div v-for="i in item.items.all()">
        <ItemGroup v-if="isItemGroup(i)" :item="i" :filter="filter" />
        <Request v-else :item="i" :filter="filter" />
    </div>
</template>
  
<script setup>
import Request from '@/components/Request.vue'

import { isItemGroup } from '../mixins/itemMixin'

const props = defineProps(['item', 'filter']);
</script>
  