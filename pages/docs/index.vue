<template>
    <div>
        <h1>{{md.attributes.title}}</h1>
        <div v-html="md.html"></div>
    </div>
</template>

<script>
import md from './test.md'

export default {
    data() {
        return {
            md
        }
    }
}
</script>