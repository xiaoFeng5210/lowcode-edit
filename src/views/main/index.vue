<template>
    <div class="g_box">
        <Picture :propValue="url"></Picture>
    </div>
</template>

<script lang="ts">
    import {defineComponent, ref, reactive} from "vue";
    import Picture from '@/components/picture/index.vue'
    export default defineComponent({
        name: 'main',
        components: {
            Picture
        },
        setup: () => {
            const url = ref('12345');
            return { url }
        }
    })
</script>

<style scoped lang="scss">
.g_box {
    background-color: #fff;
}
</style>