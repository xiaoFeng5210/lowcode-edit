<template>
    <button class="v-button">{{propValue}}</button>
</template>

<script lang="ts">
    import { ref, defineComponent } from 'vue'
    export default defineComponent({
        name: 'button',
        props: {
          propValue: {
              type: String,
              default: ''
          }
        },
        setup: () => {
        }
    })
</script>

<style scoped>

</style>
