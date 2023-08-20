<template>
    <v-card class="my-4">
        <v-card-title>
            <span><strong :class="'pa-2 mr-2 rounded-lg text-uppercase method method-' + item.request.method.toLowerCase()">{{ item.request.method }}</strong></span> {{ item.request.url }}
        </v-card-title>
        <v-card-subtitle>
            {{ data.parents }}
        </v-card-subtitle>
        <v-card-text>
        <div v-for="h in item.request.headers.members">{{ h }}</div>

        <div v-if="item.request.body" class="mt-4">
            <highlightjs autodetect :code="item.request.body.raw" />
        </div>
        </v-card-text>
    </v-card>
</template>

<script setup>
import {reactive} from 'vue'

let data = reactive({parents: ""});

const props = defineProps(['item']);

let parentsList = []
props.item.forEachParent(p => parentsList.push(p.name));

data.parents = parentsList.reverse().join(" → ")
</script>
  
<style scoped>
    .method {
        color: white;
        font-size: 0.85rem;
        background-color: #999;
    }
    .method-get {
        background-color: #61affe;
    }
    .method-post {
        background-color: #49cc90;
    }    
    .method-put {
        background-color: #fca130;
    }    
    .method-delete {
        background-color: #f93e3e;
    }    
    .method-patch {
        background-color: #50e3c2;
    }
</style>