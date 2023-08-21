<template>
    <v-card class="my-4">
        <v-card-title>
            <strong :class="'pa-2 mr-2 rounded-lg text-uppercase method method-' + item.request.method.toLowerCase()">
                {{ item.request.method }}
            </strong>
            {{ item.request.url }}
        </v-card-title>
        <v-card-subtitle>
            {{ data.parents }} → {{ item.name }}
        </v-card-subtitle>
        <v-card-text>
            <div class="text-subtitle-2">headers</div>
            <pre class="text-body-2" v-for="h in item.request.headers.members">{{ h }}</pre>

            <div v-if="item.request.body && item.request.body.raw" class="mt-4">
                <div class="text-subtitle-2">body</div>
                <highlightjs autodetect :code="item.request.body.raw" />
            </div>
        </v-card-text>
        <v-card-actions v-if="item.events.all().filter(e => e.script.exec.join('')).length">
            <v-spacer />
            <v-btn :icon="show.value ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show.value = !show.value"></v-btn>
        </v-card-actions>
        <v-expand-transition>
            <template v-for="e in item.events.all()">
                <div v-show="show.value">
                    <v-card-text class="pt-0">
                        <div v-if="e.script && e.script.exec.join('').length">
                            <div class="text-subtitle-2">{{ e.listen }}</div>
                            <highlightjs autodetect :code="e.script.exec.join('\n')" :class="'type-' + e.listen" />
                        </div>
                    </v-card-text>
                </div>
            </template>
        </v-expand-transition>
    </v-card>
</template>

<script setup>
import { reactive } from 'vue'

let data = reactive({ parents: "" });
let show = reactive({ value: false });

const props = defineProps(['item']);

let parentsList = []
props.item.forEachParent(p => parentsList.push(p.name));

data.parents = parentsList.reverse().join(" → ")
</script>
  
<style scoped>
pre {
    font-family: monospace !important;
}

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