<template>
    <div class="shape" :class="{ active }"></div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
    name: "Shape",
    props: {
        // 是否选中状态
        active: {
            type: Boolean,
            default: false
        }
    },
    setup: () => {

    }
})
</script>
