<template>
    <div style="overflow: hidden">
        <img :src="propValue" alt="">
    </div>
</template>

<script lang="ts">
    import { ref, defineComponent, reactive } from 'vue'
    export default defineComponent({
        name: 'picture',
        props: {
          propValue: String
        },
        setup: () => {
        }
    })
</script>

<style scoped>

</style>
