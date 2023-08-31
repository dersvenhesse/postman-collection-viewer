<template>
    <div v-for="i in item.items.all()">
        <ItemGroup v-if="isItemGroup(i)" :item="i" />
        <Request v-else :item="i" />
    </div>
</template>
  
<script setup>
import Request from '@/components/Request.vue'

import { isItemGroup } from '../mixins/itemMixin'

const props = defineProps(['item']);
</script>
  